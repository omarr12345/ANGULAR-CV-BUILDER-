import { Component, OnInit, forwardRef } from "@angular/core";

import {
  ControlContainer,
  FormGroupDirective,
  FormBuilder,
  FormGroup
} from "@angular/forms";

import { Subject } from "rxjs";
@Component({
  selector: "app-skillsandlanguages",
  templateUrl: "./skillsandlanguages.component.html",
  styleUrls: ["./skillsandlanguages.component.scss"],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class SkillsandlanguagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
