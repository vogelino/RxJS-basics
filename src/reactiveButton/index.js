import { Observable } from 'rxjs/Rx';

const startButton = document.getElementById('start');

const buttonClick$ = Observable.fromEvent(startButton, 'click');
const interval$ = Observable.interval(1000);
const startInterval$ = buttonClick$.switchMapTo(interval$);

startInterval$.subscribe((count) => console.log(count));
