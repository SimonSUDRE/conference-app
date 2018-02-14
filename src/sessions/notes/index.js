import $ from 'jquery';

export default class Notes{
    constructor(){}
    render(idView, idSession){
        this.talkService.findSessionById(idSession)
        .then(session => {

        });
        $('#notesArea').html(localStorage.getItem(session.id));
        $("#enregistrer").click(() => {
            let notes = $('#notesArea').val();
            localStorage.setItem(session.id, notes);
        });
    }
}