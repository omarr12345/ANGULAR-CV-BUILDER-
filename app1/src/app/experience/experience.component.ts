import { Component, OnInit, forwardRef } from "@angular/core";

import {
  ControlContainer,
  FormGroupDirective,
  FormBuilder,
  FormGroup
} from "@angular/forms";

import { Subject } from "rxjs";
@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class ExperienceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
