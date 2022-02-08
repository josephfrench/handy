/***
* @param label
* Pipeable operator to add within a .pipe() chain to update a subject to the value of the latest emission
* Operationally takes an alternate value that will be passed to .next() in place of latest emission
* Example usage: 
*     myObservable.pipe(
*        setSubject(this.mySubject)
*     )
* 
* Replaces: ... tap(a => this.mySubject.next(a)) ...
*/
export const setSubject = <T extends unknown>(subject: BehaviorSubject<T>, alternateValue?: T) => pipe(
   tap((value: T) => subject.next(alternateValue || value))
);
