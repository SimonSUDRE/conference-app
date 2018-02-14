import template from './layout.html';
import $ from 'jquery';

export default class Layout {

    render() {
        $(document).ready(function(){
            $('body').html(template);
        });
    }
}