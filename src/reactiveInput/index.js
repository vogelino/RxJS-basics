import { Observable } from 'rxjs/Rx';

const domInput = document.getElementById('textInput');
const input$ = Observable.fromEvent(domInput, 'input');

input$
	.map(({ target }) => target.value)
	.subscribe((value) => console.log(value));
