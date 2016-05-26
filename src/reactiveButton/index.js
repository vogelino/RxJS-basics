import { Observable } from 'rxjs/Rx';

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

const start$ = Observable.fromEvent(startButton, 'click');
const interval$ = Observable.interval(500);
const stop$ = Observable.fromEvent(stopButton, 'click');
const intervalThatStops$ = interval$.takeUntil(stop$);
const startInterval$ = start$.switchMapTo(intervalThatStops$);
const data = { count: 0 };
const incrementingInterval$ = startInterval$
	.startWith(data)
	.scan((acc) => Object.assign(acc, { count: acc.count + 1 }));

incrementingInterval$.subscribe(({ count }) => console.log(count));
