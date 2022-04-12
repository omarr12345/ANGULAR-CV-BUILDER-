import { Component, OnInit } from "@angular/core";
import { TemplatesComponent } from "../templates/templates.component";
import { SectionsComponent } from "../sections/sections.component";
import { LanguagesComponent } from "../languages/languages.component";
import { DataComponent } from "../data/data.component";
import { ObjectiveComponent } from "../objective/objective.component";
import { ExperienceComponent } from "../experience/experience.component";

import { FormGroup, FormBuilder } from "@angular/forms";
import { Data } from "../data";
import { EducationComponent } from "../education/education.component";
import { SkillsandlanguagesComponent } from "../skillsandlanguages/skillsandlanguages.component";
declare var jsPDF;
import * as $ from "jquery";

import html2canvas from "html2canvas";

@Component({
  selector: "app-create-cv",
  templateUrl: "./create-cv.component.html",
  styleUrls: ["./create-cv.component.scss"]
})
export class CreateCVComponent implements OnInit {
  DummyComponent = TemplatesComponent;

  constructor(private formBuilder: FormBuilder) {}

  personalDataForm: FormGroup = this.formBuilder.group({
    data: this.formBuilder.group({
      Fname: "",
      Email: "",
      Lname: "",
      Address: "",
      Phone: "",
      profileImg: ""
    }),

    Objective: this.formBuilder.group({
      Message: ""
    }),

    Experience: this.formBuilder.group({
      Place: "",
      Time: "",
      Typeofex: "",
      Title: ""
    }),

    Education: this.formBuilder.group({
      Place: "",
      Title: "",
      Discuss: ""
    }),

    SAL: this.formBuilder.group({
      Skill1: "",
      Skill2: "",
      Skill3: "",
      Skill4: "",
      Skill5: "",
      Lang1: "",
      Lang2: "",
      Lang3: "",
      Lang4: "",
      Lang5: ""
    })
  });

  ngOnInit() {
    var Plus = document.getElementById("Plus");
    var minus = document.getElementById("Minus");
    var Template = document.getElementById("Template");
    var Download = document.getElementById("Download");
    var currWidth = Template.clientWidth;
    var currHeight = Template.clientHeight;

    var print = this.personalDataForm.controls.data.get("profileImg");

    window.setInterval(function() {
      if (print.valueChanges) {
        //console.log(print.value);
      }
    }, 10000);

    /*
    Plus.onclick = function() {
      if (currWidth > 650) {
        console.log("it's 100%");
      } else {
        Template.style.width = currWidth + 50 + "px";

        currWidth = Template.clientWidth;
      }

      if (currHeight > 600) {
        console.log("it's 100%");
      } else {
        Template.style.height = currHeight + 50 + "px";

        currHeight = Template.clientHeight;
      }
    };

    minus.onclick = function() {
      if (currWidth >= 300) {
        Template.style.width = currWidth - 50 + "px";

        currWidth = Template.clientWidth;
      }

      if (currHeight >= 300) {
        Template.style.height = currHeight - 50 + "px";

        currHeight = Template.clientHeight;
      }
    };

    */

    Download.onclick = function() {
      var HTML_Width = $("#Template").width();
      var HTML_Height = $("#Template").height();
      var top_left_margin = 15;
      var PDF_Width = HTML_Width + top_left_margin * 2;
      var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
      var canvas_image_width = HTML_Width;
      var canvas_image_height = HTML_Height;

      var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

      html2canvas($("#Template")[0], { allowTaint: true }).then(function(
        canvas
      ) {
        canvas.getContext("2d");

        console.log(canvas.height + "  " + canvas.width);

        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
        pdf.addImage(
          imgData,
          "JPG",
          top_left_margin,
          top_left_margin,
          canvas_image_width,
          canvas_image_height
        );

        for (var i = 1; i <= totalPDFPages; i++) {
          pdf.addPage(PDF_Width, PDF_Height);
          pdf.addImage(
            imgData,
            "JPG",
            top_left_margin,
            -(PDF_Height * i) + top_left_margin * 4,
            canvas_image_width,
            canvas_image_height
          );
        }

        pdf.save("HTML-Document.pdf");
      });
    };
  }

  assignComponent(Component: string) {
    if (Component === "templates") {
      this.DummyComponent = TemplatesComponent;
      console.log("templates");
    } else if (Component === "sections") {
      this.DummyComponent = SectionsComponent;
      console.log("sections");
    } else if (Component === "languages") {
      this.DummyComponent = LanguagesComponent;
      console.log("Languages");
    } else if (Component === "data") {
      this.DummyComponent = DataComponent;
      console.log("Data");
    } else if (Component === "objective") {
      this.DummyComponent = ObjectiveComponent;
      console.log("Objective");
    } else if (Component === "experience") {
      this.DummyComponent = ExperienceComponent;
      console.log("Experience");
    } else if (Component === "education") {
      this.DummyComponent = EducationComponent;
      console.log("Education");
    } else if (Component === "skillsandlanguages") {
      this.DummyComponent = SkillsandlanguagesComponent;
      console.log("Skills and languages");
    }
  }
}
