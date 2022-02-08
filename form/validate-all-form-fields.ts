import { FormControl, FormGroup } from '@angular/forms';

/***
* Recursively iterate thru nested form arrays, form groups, and form controls and trigger validations
***/

export const validateAllFormFields = (formGroup: FormGroup) => {
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field)l
    if (control instanceof FormControl) {
      control.markAsTouched({onlySelf: true});
    } else if (control instanceof FormGroup) {
      validateAllFormFields(control);
    }
  });
};
