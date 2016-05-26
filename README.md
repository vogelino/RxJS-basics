# RxJS-basics
An API for asynchronous programming with observable streams

## [Observable](http://reactivex.io/documentation/observable.html)
An observable is a time line abstraction that emits events.
Transformations can be applied to an observable to filter, change map aso. the events this observable emits.
When a transformation is applied to an observable, another observable is created.

The goal of defining observables is to anticipate how to react on events that may be emitted over time and to enable asynchronous execution.
Contrary to the normal one by one behavior, reactive programming allows to define first how things should depending on what event react and then let this happen in any order.

#### `fromEvent`
Creates an observable based on a javascript event like for instance 'click'.

#### `interval`
Creates an observable based on a javascript interval timer. Similar as `setInerval` but as method of an Observable.

## [Observers](http://www.introtorx.com/Content/v1.0.10621.0/02_KeyTypes.html#IObserver)
An observer is a function or an abstraction that subscribes to an observable and will be executed when the observable emits an event.
