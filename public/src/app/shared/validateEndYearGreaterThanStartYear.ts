import {AbstractControl} from '@angular/forms';

export class SessionYearsValidator {
  validateEndYearGreaterThanStartYear(form : AbstractControl): {[key: string] : boolean} {
    let startYear = form.get('sessionStartYear').value;
    let endYear = form.get('sessionEndYear').value;
    if(parseInt(endYear) <= parseInt(startYear) || (parseInt(endYear) - parseInt(startYear)) > 1) {
      return {'startYearGreater': true};
    }
    return null;
  }
}

