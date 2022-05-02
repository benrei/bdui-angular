import { FormControl } from '@angular/forms';
import { Component, Input, ViewContainerRef, ViewChild } from '@angular/core';

/**
Editor for booleans

## Features
- Label
- Tooltip
- Angular forms [validators](https://angular.io/api/forms/Validators)

## Usage

***Module:** `import { DvEditorsModule } from '@devinco/ui;`

***Selector:** `bd-checkbox`
*/
@Component({
  selector: 'bd-checkbox',
  styleUrls: ['./checkbox.component.scss'],
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
  /** Label for checkbox value */
  @Input() label: string;
  /** A tooltip is often used to specify extra information about something when the user hover the editor */
  @Input() tooltip: string = '';
  /** Often part of a `FormGroup` in a parent component */
  @Input() control: FormControl;

  @ViewChild('checkbox', { read: ViewContainerRef }) checkbox: ViewContainerRef;
}
