import { Observable } from 'rxjs/Rx';

const domInput = document.getElementById('textInput');
const input$ = Observable.fromEvent(domInput, 'input');
const inputChange$ = input$.map(({ target }) => target.value);

inputChange$
	.subscribe((value) => console.log(value));

export default inputChange$;
