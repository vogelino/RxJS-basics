import { Observable } from 'rxjs/Rx';

const domInput = document.getElementById('textInput');
const input$ = Observable.fromEvent(domInput, 'input');

input$
	.subscribe(({ target }) => console.log(target.value));
