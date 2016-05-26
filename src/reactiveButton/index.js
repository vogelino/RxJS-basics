import { Observable } from 'rxjs/Rx';

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

const start$ = Observable.fromEvent(startButton, 'click');
const stop$ = Observable.fromEvent(stopButton, 'click');
const reset$ = Observable.fromEvent(resetButton, 'click');
const interval$ = Observable.interval(500);
const intervalThatStops$ = interval$.takeUntil(stop$);

const data = { count: 0 };
const inc = (acc) => ({ count: acc.count + 1 });
const reset = () => data;

const incOrReset$ = Observable.merge(
	intervalThatStops$.mapTo(inc),
	reset$.mapTo(reset));

const startInterval$ = start$.switchMapTo(incOrReset$);

const incrementingInterval$ = startInterval$
	.startWith(data)
	.scan((acc, curr) => curr(acc));

incrementingInterval$.subscribe(({ count }) => console.log(count));
