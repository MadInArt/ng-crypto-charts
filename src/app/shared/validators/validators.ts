import {FormControl} from '@angular/forms';

export class CustomValidators{

    static matchPasswords(toMatchControlName : string){
        let thisControl: FormControl;
        let toMatchControl: FormControl;
      
        return function matchOtherValidate (control: FormControl) {
      
          if (!control.parent) {
            return null;
          }
          if (!thisControl) {
            thisControl = control;
            toMatchControl = control.parent.get(toMatchControlName) as FormControl;
            if (!toMatchControl) {
              throw new Error('matchOtherValidator(): other control is not found in parent group');
            }
            toMatchControl.valueChanges.subscribe(() => {
              thisControl.updateValueAndValidity();
            });
          }
      
          if (!toMatchControl) {
            return null;
          }
      
          if (toMatchControl.value !== thisControl.value) {
            return {
              matchOther: true
            };
          }
      
          return null;
      
        }
    }

}