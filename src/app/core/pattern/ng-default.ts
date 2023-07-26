import { ActivatedRoute, Data } from '@angular/router';

export abstract class NgDefault {
  public hasClickSubmit: boolean = false;
  hasMobileMatches!: boolean;

  constructor(protected route?: ActivatedRoute) {
  }

  public getStyle(trueValue: any, falseValue: any): string {
    return this.hasMobileMatches ? trueValue : falseValue;
  }

  get dataResolved(): any {
    return this.route?.snapshot.data;
  }

  
}
