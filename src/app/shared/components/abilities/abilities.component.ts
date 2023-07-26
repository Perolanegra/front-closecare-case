import { Component, Input, Output } from "@angular/core";

@Component({
    selector: 'ng-abilities',
    templateUrl: './abilities.component.html',
})
export class NgAbilitiesComponent {

    @Input() abilities!: any;

    constructor() { }

   
}