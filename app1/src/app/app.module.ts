import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlContainer, FormGroupDirective } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { CreateCVComponent } from "./create-cv/create-cv.component";
import { FinalCVComponent } from "./final-cv/final-cv.component";
import { ApplicantsService } from "./applicants.service";
import { TemplatesComponent } from "./templates/templates.component";
import { SectionsComponent } from "./sections/sections.component";
import { LanguagesComponent } from "./languages/languages.component";
import { DataComponent } from "./data/data.component";
import { ObjectiveComponent } from "./objective/objective.component";
import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from "./education/education.component";
import { SkillsandlanguagesComponent } from "./skillsandlanguages/skillsandlanguages.component";
const appRoutes: Routes = [
  { path: "Login", component: LoginComponent },
  { path: "Signup", component: SignupComponent },
  { path: "home", component: HomeComponent },
  { path: "createcv", component: CreateCVComponent },
  { path: "", component: HomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CreateCVComponent,
    FinalCVComponent,
    TemplatesComponent,
    SectionsComponent,
    LanguagesComponent,
    DataComponent,
    ObjectiveComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsandlanguagesComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ApplicantsService],
  bootstrap: [AppComponent],
  entryComponents: [
    TemplatesComponent,
    SectionsComponent,
    LanguagesComponent,
    DataComponent,
    ObjectiveComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsandlanguagesComponent
  ]
})
export class AppModule {}
