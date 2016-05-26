import { Observable } from 'rxjs/Rx';
import reactiveInput$ from '../reactiveInput'
import reactiveTimer$ from '../reactiveTimer'

Observable.combineLatest(reactiveTimer$, reactiveInput$)
	.subscribe((x) => console.log(x));

