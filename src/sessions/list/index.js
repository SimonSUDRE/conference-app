export default class SessionList {
    
    constructor(talkService){
        this.talkService = talkService;
    }

    render(idView){
        let $ = require("jquery");
        this.talkService.findAllSessions()
        .then(sessions => {
            $(idView).html('<ul>' + sessions.map(session => '<li>' + session.title + '</li>').join('') + '</ul>');
        })
    }
}