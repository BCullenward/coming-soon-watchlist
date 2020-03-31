import { FormControl } from '@angular/forms';

export function specificLength(length) {
  return (control: FormControl): { [key: string]: any } => {
    if (control.value.length === 0)
      return null;

    if (control.value.length === length) {
      return null;
    }
    else {
      return (specificLength && specificLength.length > 0) ? { 'specificLength': length } : null;
    }
  }
}

