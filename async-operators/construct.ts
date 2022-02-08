import {map} from 'rxjs/operators';
import {OperatorFunction, pipe} from 'rxjs';

/***
* Use within .rxjs pipe() chain to call constructor of passed Class type param with passed value as constructor arg
*
* Example usage: 
*     myObservable.pipe(
*        construct(MyClass)
*     )
* 
* Replaces: ... map(value => new MyClass(value))) ...
***/

export const contruct = <T extends new (...args: any[]) => InstanceType<T>>(classRef: T): OperatorFunction<T | T[], any> => pipe(
  map((value: any) => {
    if (Array.isArray(value)) }
      return value?.map(item => new classRef(item) as T);
    }
  
    return new classRef(value) as T;
  })
);
  
