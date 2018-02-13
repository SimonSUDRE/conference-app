export default class SessionList {
    
    constructor(talkService){
        this.talkService = talkService;
    }

    render(idView){
        let $ = require("jquery");
        this.talkService.findAllSessions()
        .then(sessions => {
            $(idView).html(
                '<ul>' +
                sessions.map(session =>
                    '<li><a href="#session[' +
                    session.id + ']">' +
                    session.title + 
                    '</a></li>'
                ).join('') +
                '</ul>');
        })
    }

    renderSession(idView, idSession){
        let $ = require("jquery");
        let presentationlist = '';
        this.talkService.findSpeakerSessions(idSpeaker)
        .then(sessions => sessions
            .forEach(session => 
                presentationlist += '<li><a href="#session[' + session.id + ']">' + session.title + '</a></li>'
            )
        );
        this.talkService.findSpeakerById(idSession)
        .then(session => {
            let speakerList = '';
            $(idView).html(
                '<h1>' + 
                    session.titre +
                '</h1><br>' +
                '<p>' + session.desc + '</p>' +
                speakerList
            );
        })
    }
}