export default class SpeakerList {
    
    constructor(talkService){
        this.talkService = talkService;
    }

    render(idView){
        let $ = require("jquery");
        this.talkService.findAllSpeakers()
        .then(speakers => {
            $(idView).html(
                '<ul>' +
                speakers.map(speaker => 
                    '<li><a href="#speaker[' +
                    speaker.id + ']">' +
                    speaker.lastname.toUpperCase() + ' ' +
                    speaker.firstname.toUpperCase() + '</a></li>'
                ).join('') +
                '</ul>');
        })
    }

    renderSpeaker(idView, idSpeaker){
        let $ = require("jquery");
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
                linkList += '<a href="' + links.link + '">' + links.class + '</a><br>';
            });
            $(idView).html(
                '<h1>' + 
                    speaker.lastname.toUpperCase() + ' ' +
                    speaker.firstname +
                '</h1><br>' +
                '<img src="/images/' + speaker.image + '"/><br>' +
                linkList +
                '<br><b>Ses Présentations</b><br>' +
                '<ul>' + presentationlist + '</ul>'
            );
        });
    }
}