import { Observable } from 'rxjs/Rx';
import reactiveInput$ from '../reactiveInput'
import reactiveTimer$ from '../reactiveTimer'

const logData = (data) => console.log(data);
const formatCombinedData = ({ count }, text) => ({ count, text }):

const combinedTimerAndInput$ = reactiveTimer$
	.do(logData)
	.combineLatest(
		reactiveInput$.do(logData),
		formatCombinedData
	)
	.takeWhile(({ count }) => count <= 3)
	.filter(({ text, count }) => count === parseInt(text))
	.reduce((acc, curr) => acc + 1, 0)
	.repeat();

combinedTimerAndInput$
	.subscribe(
		(x) => console.log(x),
		(err) => console.log(err)
	);

