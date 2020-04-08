import { FormGroup, AbstractControl, FormControl } from '@angular/forms';

export function oneRequired(controls) {
  return (control: FormGroup): { [key: string]: any } => {
    if (!controls)
      return null;

    let recs: number = controls.length;
    let blanks: number = 0;

    Object.keys(control.controls).forEach((cntrl: string) => {
      if (control.controls[cntrl].value === '') {
        blanks = blanks + 1;
      };
    });

    //if (recs !== 0 && recs === blanks) {
    //  //console.log("ALL BLANK");
    //  return { 'oneRequired': "At least one identifier required" };
    //}
    //return null;

    return (recs !== 0 && recs === blanks) ? { 'oneRequired': "At least one required" } : null;
  }
}
