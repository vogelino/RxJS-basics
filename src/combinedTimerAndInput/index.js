import { Observable } from 'rxjs/Rx';
import reactiveInput$ from '../reactiveInput'
import reactiveTimer$ from '../reactiveTimer'

const logData = (data) => console.log(data);

const combinedTimerAndInput$ = reactiveTimer$
	.do(logData)
	.combineLatest(
		reactiveInput$.do(logData),
		({ count }, text) => ({ count, text })
	)
	.takeWhile(({ count }) => count <= 3)
	.filter(({ text, count }) => count === parseInt(text))
	.reduce((acc, curr) => acc + 1, 0)
	.repeat();

const renderScore = (score) => {
	const domScore = document.getElementById('score');
	domScore.innerText = score;
};

combinedTimerAndInput$
	.subscribe(
		renderScore,
		(err) => console.log(err)
	);

