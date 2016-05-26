import { Observable } from 'rxjs/Rx';

const buttons = {};
['start', 'half', 'quarter', 'stop', 'reset'].forEach((button) => {
	const domButton = document.getElementById(button);
	buttons[`${button}$`] = Observable.fromEvent(domButton, 'click');
});

const starters$ = Observable.merge(
	buttons.start$.mapTo(1000),
	buttons.half$.mapTo(500),
	buttons.quarter$.mapTo(250)
);

const data = { count: 0 };
const inc = (acc) => ({ count: acc.count + 1 });
const reset = () => data;

const intervalActions = (time) => Observable.merge(
	Observable.interval(time).takeUntil(buttons.stop$).mapTo(inc),
	buttons.reset$.mapTo(reset)
);

const incrementingInterval$ = starters$
	.switchMap(intervalActions)
	.startWith(data)
	.scan((acc, curr) => curr(acc));

incrementingInterval$.subscribe(({ count }) => console.log(count));

export default incrementingInterval$;
