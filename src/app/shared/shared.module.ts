import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "./material/material.module";
import { NgInputErrorComponent } from "./components/ng-input-error/ng-input-error.component";
import { TableHeaderComponent } from "./components/table-header/table-header.component";
import { TableComponent } from "./components/ng-table/ng-table.component";
import { MatIconModule } from "@angular/material/icon";
import { SafeHtmlPipe } from "./pipes/safeHtml.pipe";
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    MatIconModule,
    // DinamicFormInputsModule,
    // MatAutocompleteModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    NgInputErrorComponent,
    TableComponent,
    TableHeaderComponent,
    SafeHtmlPipe,
  ],
  exports: [
    NgInputErrorComponent,
    MaterialModule,
    ReactiveFormsModule,
    TableComponent,
    TableHeaderComponent,
    MatIconModule,
    SafeHtmlPipe,
  ],
})
export class SharedModule {}
