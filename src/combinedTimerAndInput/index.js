import { Observable } from 'rxjs/Rx';
import reactiveInput$ from '../reactiveInput'
import reactiveTimer$ from '../reactiveTimer'

const combinedTimerAndInput$ = Observable.combineLatest(
	reactiveTimer$,
	reactiveInput$,
	({ count }, text) => ({ count, text }))
	.takeWhile(({ count }) => count < 10)
	.filter(({ text, count }) => count === parseInt(text));

combinedTimerAndInput$
	.subscribe((x) => console.log(x));

