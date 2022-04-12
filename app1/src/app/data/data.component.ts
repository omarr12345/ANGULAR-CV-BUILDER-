import { Component, forwardRef, OnInit } from "@angular/core";
import {
  ControlContainer,
  FormGroupDirective,
  FormBuilder,
  FormGroup
} from "@angular/forms";

import { Subject } from "rxjs";

declare var src;
declare var files;
@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styleUrls: ["./data.component.scss"],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class DataComponent implements OnInit {
  ngOnInit() {
    var uploadImg = document.getElementById("uploadImg");
    var profileImg = document.getElementById("profileImg");
    var roundPhoto = document.getElementById("roundPhoto");

    roundPhoto.onclick = function() {
      if (roundPhoto.innerHTML == "Round Photo") {
        profileImg.style.borderRadius = "50%";
        roundPhoto.innerHTML = "Reset Photo";
      } else {
        profileImg.style.borderRadius = "0% ";
        roundPhoto.innerHTML = "Round Photo";
      }
    };

    uploadImg.addEventListener("change", function(event) {
      var input = event.target;
      var reader = new FileReader();
      reader.onload = function() {
        var dataURL = reader.result;
       // profileImg.src = dataURL;
      };

     // if (uploadImg.files[0].size / 1024 / 1024 < 5) {
     //   reader.readAsDataURL(input.files[0]);
      //} 
      
     // else {
       // alert("please upload smaller image");
     // }
    });
  }
}
