import { Observable } from 'rxjs/Rx';
import reactiveInput$ from '../reactiveInput'
import reactiveTimer$ from '../reactiveTimer'

const combinedTimerAndInput$ = Observable.combineLatest(
	reactiveTimer$,
	reactiveInput$,
	({ count }, text) => ({ count, text })
);

combinedTimerAndInput$
	.subscribe((x) => console.log(x));

