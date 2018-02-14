import $ from 'jquery';

export default class SpeakerList {
    
    constructor(talkService){
        this.talkService = talkService;
    }

    render(idView){
        this.talkService.findAllSpeakers()
        .then(speakers => {
            $(idView).html(
                `<div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <ul class="list-group">` +
                                speakers.map(speaker => 
                                    `<li class="list-group-item">
                                        <a class="d-flex justify-content-between align-items-center" 
                                            href="#speaker[` + speaker.id + ']">' +
                                            speaker.lastname.toUpperCase() + ' ' +
                                            speaker.firstname.toUpperCase() +
                                            `<i class="material-icons">keyboard_arrow_right</i>
                                        </a>
                                    </li>`
                                ).join('') +
                            `</ul>
                        </div>
                    </div>
                </div>`
            );
        })
    }

    renderSpeaker(idView, idSpeaker){
        let presentationlist = '';
        this.talkService.findSpeakerSessions(idSpeaker)
        .then(sessions => sessions
            .forEach(session => 
                presentationlist += '<li><a href="#session[' + session.id + ']">' + session.title + '</a></li>'
            )
        );
        this.talkService.findSpeakerById(idSpeaker)
        .then(speaker => {
            let linkList = '';
            speaker.ribon ? linkList += '<a href="' + speaker.ribon.link + '">' + speaker.ribon.title + '</a><br>': null;
            speaker.socials.forEach( links => {
                linkList += '<li><a href="' + links.link + '">' + links.class + '</a></li>';
            });
            $(idView).html(
                `<div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <h1>` + 
                                speaker.lastname.toUpperCase() + ' ' +
                                speaker.firstname +
                            `</h1><br>
                        </div>
                    </div>
                    <div class="row justify-content-center ">
                        <div class="col-9 col-sm-4  mt-3" id="photo">
                            <img class="img-fluid" src="/images/` + speaker.image + `"/><br>
                        </div>
                        <div class="col-12 col-sm-8">
                            <ul class="list-unstyled" id="links">` +
                                linkList +
                            `</ul>
                        </div>
                    </div>
                </div>` +
                '<br><b>Ses Présentations</b><br>' +
                '<ul>' + presentationlist + '</ul>'
            );
        });
    }
}