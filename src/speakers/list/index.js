export default class SpeakerList {
    
    constructor(talkService){
        this.talkService = talkService;
    }

    render(idView){
        let $ = require("jquery");
        this.talkService.findAllSpeakers()
        .then(speakers => {
            $(idView).html('<ul>' + speakers.map(Speaker => '<li>' + Speaker.firstname + '</li>').join('') + '</ul>');
        })
    }
}