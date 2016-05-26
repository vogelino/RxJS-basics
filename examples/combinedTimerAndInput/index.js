import { Observable } from 'rxjs/Rx';
import reactiveInput$ from '../reactiveInput'
import { starters$, reactiveTimer$ } from '../reactiveTimer'

const input = document.getElementById('textInput');
const domScore = document.getElementById('score');
const logData = (data) => console.log(data);
const setInputValue = (value = '') => input.value = value;
const renderScore = (score = '') => domScore.innerText = score;

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
	.subscribe(() => setInputValue(''))

runningGame$
	.filter(({ text, count }) => count === parseInt(text))
	.reduce((acc, curr) => acc + 1, 0)
	.repeat()
	.subscribe(
		renderScore,
		(err) => console.log(err)
	);

starters$
	.subscribe(() => {
		input.focus()
		renderScore('');
		setInputValue('');
	});
