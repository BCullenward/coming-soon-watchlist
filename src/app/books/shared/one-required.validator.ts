import { FormGroup } from '@angular/forms';

export function oneRequired() {
  return (controlGroup: FormGroup) => {
    let controls = controlGroup.controls;
    if (controls) {
      let theOne = Object.keys(controls).find(key => controls[key].valid);
      if (!theOne) {
        return {
          oneRequired: {
            text: "At least one should be filled out"
          }
        }
      }
    }
  }
}
