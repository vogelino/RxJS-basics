import { Observable } from 'rxjs/Rx';

const startButton = document.getElementById('start');

Observable.fromEvent(startButton, 'click')
	.switchMap(() => Observable.interval(1000))
	.subscribe((count) => console.log(count));
