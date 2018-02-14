import $ from 'jquery';

export default class TalkService {

    findAllSpeakers() {
        return $.get('http://localhost:3000/speakers');
    }
    
    findSpeakerById(idSpeaker) {
        return $.get('http://localhost:3000/speakers/' + idSpeaker);
    }

    findAllSessions() {
        return $.get('http://localhost:3000/sessions');
    }

    findSessionById(idSession) {
        return $.get('http://localhost:3000/sessions' + idSession);
    }

    findSpeakerSessions(idSpeaker){
        return $.get("http://localhost:3000/sessions?speakers_like=" + idSpeaker);
    }

    findSessionSpeakers(titleSession){
        return $.get("http://localhost:3000/speakers?category.title=" + titleSession);
    }
}