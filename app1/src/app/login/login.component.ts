import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { ApplicantsService } from "../applicants.service";
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup
} from "@angular/forms";
import { Router } from "@angular/router";
import { from } from "rxjs";

var msg = document.getElementById("msg");

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: User[];
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private applicationservice: ApplicantsService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      Email: ["", [Validators.required, Validators.maxLength(30)]],
      Password: ["", [Validators.required, Validators.maxLength(12)]]
    });

    this.applicationservice.getApplicants().subscribe((data: User[]) => {
      this.user = data;
    });
  }

  onSubmit() {
    for (var i = 0; i < this.user.length; i++) {
      if (
        this.user[i].email == this.loginForm.get("Email").value &&
        this.user[i].password == this.loginForm.get("Password").value
      ) {
        this.router.navigate(["createcv"]);
        break;
      } else {
        alert("Wrong Email OR Password");
      }
    }

    /*if ((this.user)[0].name.value == this.loginForm.get("Email").value) {
      console.log("true");
    }
    */
  }
}
