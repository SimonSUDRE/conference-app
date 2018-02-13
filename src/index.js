import TalkService from './common/talk.service';
import Layout from './layout/index';
import SpeakerList from './speakers/list/index';
import SessionList from './sessions/list/index';

const talkService = new TalkService();
const layout = new Layout();
const speakerList = new SpeakerList(talkService);
const sessionList = new SessionList(talkService);
const idview = "#main-view";

layout.render();

var router = () => {
    if (location.hash == '#speakers-list') {
       speakerList.render(idview);
    } else if (location.hash == '#sessions-list') {
        sessionList.render(idview);
    } else {
        layout.render();
    }
}

window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});