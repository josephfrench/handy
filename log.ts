/***
* @param label
* Pipeable operator to add within a .pipe() chain to console log the latest emission
* Optionally takes a label that will be logged preceding the data
* Not recommended to leave in production code - convience method for debugging
* Example usage: 
*     myObservable.pipe(
*        logIt()
*     )
* 
* Replaces: ... tap(a => console.log(a)) ...
*/
export const log  = (label: string | number = '') => pipe(
   tap((value) => console.log(label, value))
);
