import { Observable } from 'rxjs/Rx';
import reactiveInput$ from '../reactiveInput'
import reactiveTimer$ from '../reactiveTimer'

const combinedTimerAndInput$ = Observable.combineLatest(
	reactiveTimer$,
	reactiveInput$,
	({ count }, text) => ({ count, text }))
	.do((data) => console.log(data))
	.takeWhile(({ count }) => count <= 3)
	.filter(({ text, count }) => count === parseInt(text))
	.reduce((acc, curr) => acc + 1, 0);

combinedTimerAndInput$
	.subscribe(
		(x) => console.log(x),
		(err) => console.log(err),
		() => console.log('complete')
	);

