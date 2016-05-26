import { Observable } from 'rxjs/Rx';
import reactiveInput$ from '../reactiveInput'
import reactiveTimer$ from '../reactiveTimer'

const input = document.getElementById('textInput');
const logData = (data) => console.log(data);

const renderScore = (score) => {
	const domScore = document.getElementById('score');
	domScore.innerText = score;
};

const runningGame$ = reactiveTimer$
	.do(logData)
	.takeWhile(({ count }) => count <= 3)
	.withLatestFrom(
		reactiveInput$.do(logData),
		({ count }, text) => ({ count, text })
	)
	.share();

runningGame$
	.repeat()
	.subscribe(() => input.value = '')

runningGame$
	.filter(({ text, count }) => count === parseInt(text))
	.reduce((acc, curr) => acc + 1, 0)
	.repeat()
	.subscribe(
		renderScore,
		(err) => console.log(err)
	);
