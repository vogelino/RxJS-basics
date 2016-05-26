# RxJS-basics
An API for asynchronous programming with observable streams

## [Observable](http://reactivex.io/documentation/observable.html)
An observable is a time line abstraction that emits events.
Transformations can be applied to an observable to filter, change map aso. the events this observable emits.
When a transformation is applied to an observable, another observable is created.

The goal of defining observables is to anticipate how to react on events that may be emitted over time and to enable asynchronous execution.
Contrary to the normal one by one behavior, reactive programming allows to define first how things should depending on what event react and then let this happen in any order.

#### `subscribe`
Subscribes to an observables to call three different function on different event types:

1. On every event
2. On error events
3. On the final success event

#### `fromEvent`
Creates an observable based on a javascript event like for instance 'click'.

#### `interval`
Creates an observable based on a javascript interval timer. Similar as `setInerval` but as method of an Observable.

#### `switchMap`
Switches from an observable to another when an event is emitted. For instance, if I click on a button, start a timer (we define two observables, subscribe to the first and `switchMap` to the second).

##### `switchMapTo`
Switches from an observable to another too, but accepts an observable to switch to instead of a callback function.

#### `takeUtil`
Runs an observable until an given observable emits an event.

#### `scan`
Similar to reduce in javascript. Takes a function and an initial value. The function is called with the accumulator and the current value and reaches it further.

#### `startWidth`
Defines the data to start with and runs the observable once at the beginning. Replaces the second argument of `scan`.

#### `mapTo`
A method to tell the observable to map its data given a map function.

#### `merge`
Allows an observable to switch to other multiple observables, that map data with other map functions.

#### `map`
Takes the results of the Observable, call it as a parameter of a callback function and what is returned in it will reach further.

#### `combineLatest`
Creates an Observable stream with combined results of other Observable streams. **Important**: This waits for at least one event of each combined Observable stream to reach informations further.

#### `withLatestFrom`
Combines an Observable stream with another as combineLatest would but waits only for the combined Observable.

#### `filter`
Similar to map, filters the results of the Observable events and reach them further.

#### `takeWhile`
Similar to filter in its parameters but stops the stream when the condition defined in it does not pass anymore.

#### `reduce`
Similar to a javascript reduce, this will accumulate through the iterations an will reach its results further. This prevents the first function passed to subscribe to be called at every iteration and calls it once completed only with the result of the reduce.

#### `do`
Allows to trigger a side effect at each iteration.

#### `repeat`
Resets the initial data of an Observable and allows it to restart. When used, the stream never completes.

#### `share`
Shares a stream among multiple subscriptions.

## [Observers](http://www.introtorx.com/Content/v1.0.10621.0/02_KeyTypes.html#IObserver)
An observer is a function or an abstraction that subscribes to an observable and will be executed when the observable emits an event.
