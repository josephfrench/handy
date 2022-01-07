/***
* @param label
* Pipeable operator to add within a .pipe() chain to console log the latest emission
* Operationally takes a label that will be logged preceding the data
* Example usage: 
*     myObservable.pipe(
*        logIt()
*     )
* 
* Replaces: ... tap(a => console.log(a)) ...
*/
export const logIt  = (label: string | number = '') => pipe(
   tap((value) => console.log(label, value))
);
