import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { ApplicantsService } from "../applicants.service";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { $ } from "protractor";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  user: User[];

  constructor(
    private applicantsService: ApplicantsService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.fb.group({
      Email: ["", [Validators.required, Validators.maxLength(30)]],
      Password: ["", [Validators.required, Validators.maxLength(12)]]
    });

    this.applicantsService.getApplicants().subscribe((data: User[]) => {
      this.user = data;
      console.log(this.user[0].email);
    });

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passformat = /^[A-Za-z][A-Za-z]\w{6,13}$/;
    var Mail = this.addForm.get("Email");
    var Pass = this.addForm.get("Password");
    var m = document.getElementById("email");
    var p = document.getElementById("pass");
    var subButton = document.getElementById("subButton");

    function ValidateEmail() {
      if (Mail.value.match(mailformat)) {
        m.style.border = "solid 1px green";
        return true;
      } else {
        m.style.border = "solid 1px red";
        return false;
      }
    }

    function validatePass() {
      if (Pass.value.match(passformat)) {
        p.style.border = "solid 1px green";

        return true;
      } else {
        p.style.border = "solid 1px red";

        return false;
      }
    }

    m.onblur = function() {
      ValidateEmail();
    };
    p.onblur = function() {
      validatePass();
    };

    setInterval(function() {
      if (m.style.borderColor != "green" || p.style.borderColor != "green") {
        subButton.setAttribute("disabled", "true");
      } else {
        subButton.removeAttribute("disabled");
      }
    }, 2);
  }

  onSubmit() {
    this.applicantsService.createUser(this.addForm.value).subscribe(data => {});
    this.router.navigate(["createcv"]);
  }
}
