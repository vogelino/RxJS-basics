import { Observable } from 'rxjs/Rx';

const startButton = document.getElementById('start');

Observable.fromEvent(startButton, 'click')
	.subscribe((event) => console.log(event));

Observable.interval(1000)
	.subscribe((count) => console.log(count));

