import { Component, OnInit, forwardRef } from "@angular/core";

import {
  ControlContainer,
  FormGroupDirective,
  FormBuilder,
  FormGroup
} from "@angular/forms";

import { Subject } from "rxjs";
@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss"],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class EducationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
