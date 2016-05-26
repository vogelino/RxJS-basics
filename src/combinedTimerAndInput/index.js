import { Observable } from 'rxjs/Rx';
import reactiveInput$ from '../reactiveInput'
import reactiveTimer$ from '../reactiveTimer'

reactiveInput$
	.subscribe((value) => console.log(value));

reactiveTimer$
	.subscribe((value) => console.log(value));
