import { Component, OnInit, forwardRef } from "@angular/core";

import {
  ControlContainer,
  FormGroupDirective,
  FormBuilder,
  FormGroup
} from "@angular/forms";

import { Subject } from "rxjs";

@Component({
  selector: "app-objective",
  templateUrl: "./objective.component.html",
  styleUrls: ["./objective.component.scss"],

  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class ObjectiveComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
