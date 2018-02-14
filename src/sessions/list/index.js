import $ from 'jquery';

export default class SessionList {
    
    constructor(talkService){
        this.talkService = talkService;
    }

    render(idView){
        this.talkService.findAllSessions()
        .then(sessions => {
            $(idView).html(
                `<div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <ul class="list-group">` +
                                sessions.map(session =>
                                    `<li class="list-group-item">
                                        <a class="d-flex justify-content-between align-items-center"
                                            href="#session[` + session.id + ']">' +
                                            session.title +
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

    renderSession(idView, idSession){
        this.talkService.findSessionById(idSession)
        .then(session => {
            let speakerlist = '';
            this.talkService.findSessionSpeakers(session.title)
            .then(speakers => speakers
                .forEach(speaker => 
                    speakerlist += 
                        `<li>
                            <img class="col-3 col-md-2 col-lg-4 mb-2 image-fluid" 
                                src="/images/` + speaker.image + `">
                            <a class="col-9 col-lg-8"
                                href="#speaker[` + speaker.id + ']">' +
                                speaker.lastname.toUpperCase() + ' ' +
                                speaker.firstname +
                            `</a>
                        </li>`
                )
            );
            $(idView).html(
                `<div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <h1>` + session.titre + `</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-8">
                        <p>` + session.desc + `</p>
                    </div>
                    <ul class="col-12 col-lg-4 list-unstyled">` +
                        speakerList + 
                    `</ul>
                    </div>
                    <div class="row justify-content-center">
                        <a class="btn btn-secondary col-10 col-sm-5 mb-3 mt-3" 
                            href="#notes[` + session.id + `]">Mes notes</a>
                    </div>
                </div>`
            );
        })
    }
}