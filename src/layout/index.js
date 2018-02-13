import template from './layout.html';

export default class Layout {

    render() {
        let $ = require("jquery");
        $(document).ready(function(){
            $('body').html(template);
        });
    }
}