import {
  Component,
  OnInit,
  Renderer2,
  Inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { AppController } from 'src/app/core/appController';
import { inject } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'ng-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditDialogComponent implements OnInit {
  public stateAnswersContainer: string = 'overflowDisabled';
  hasClosed: boolean = false;
  value = 'Clear me';

  constructor(
    private dialogRef: MatDialogRef<EditDialogComponent>,
    protected formBuilder: FormBuilder,
    public appController: AppController,
    protected dialog: MatDialog,
    protected renderer: Renderer2,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.filteredOptions = this.inputAutoComplete.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._filter(name as string) : this.options.slice();
        }),
      );
  }

  keywords = ['angular', 'how-to', 'tutorial', 'accessibility'];
  formControl = new FormControl(['angular']);


  beforeSubmit() {
    this.submit();
  }


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.keywords.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  close(data?: any) {
    this.dialogRef.close(data);
    this.hasClosed = true;
  }

  submit(hasSpinner: boolean = false, payload?: any): void {
    this.close(payload ? payload : undefined);
  }

  inputAutoComplete = new FormControl('');
  inputFirst = new FormControl('');
  options: any[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions!: Observable<any[]>;


  displayFn(user: any): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
