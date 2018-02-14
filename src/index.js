import TalkService from './common/talk.service';
import Layout from './layout/index';
import SpeakerList from './speakers/list';
import SessionList from './sessions/list';
//import Notes from "./pages/sessions/notes";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'webpack-material-design-icons';

const talkService = new TalkService();
const layout = new Layout();
const speakerList = new SpeakerList(talkService);
const sessionList = new SessionList(talkService);
const idview = "#main-view";

let routeTable = new Map();
routeTable.set(/#/, () => layout.render());
routeTable.set(/#speakers-list/, () => speakerList.render(idview));
routeTable.set(/#sessions-list/, () => sessionList.render(idview));
routeTable.set(/#session\[.*\]/, () => {
    let idSession = location.hash.substring(location.hash.lastIndexOf('[')+1, location.hash.lastIndexOf(']'));
    sessionList.renderSession(idview, idSession);
});
routeTable.set(/#speaker\[.*\]/, () => {
    let idSpeaker = location.hash.substring(location.hash.lastIndexOf('[')+1, location.hash.lastIndexOf(']'));
    speakerList.renderSpeaker(idview, idSpeaker);
});
routeTable.set(/#notes/, () => {
    /*let id = location.hash.substring(location.hash.lastIndexOf('[') + 1, location.hash.lastIndexOf(']'));
    ts.findOneSession(id).then(session => {
        notesSession.render("main-view", session);
    });*/
});

var router = () => {
    if (
        !Array.from(routeTable.keys())
        .some( key => {
            if (location.hash.match(key)) {
                tableRoutage.get(key)();
                return true;
            }
            return false;
        })
    ) { }
    layout.render();
}

window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});