import { Component, OnInit } from "@angular/core";
import { $ } from "protractor";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //  var imgs = [];
    //var imgsArray = document.querySelectorAll(".carouselImages");
    //console.log(imgsArray.length);
    //for (var i = 0; i < imgsArray.length; i++) {
    //imgs.push(imgsArray[i]);
    //var leftString = getComputedStyle(imgs[i]);
    //console.log(leftString.top);
    //var leftPos = parseInt(leftString, 10);
    //console.log(leftPos);

    /*setInterval(function() {
        var pos = parseInt(leftPos, 10);
        console.log(pos);
        pos++;
        imgs[i].style.left = pos + "px";
      }, 10);*/
    //}

    var sliderImages = document.getElementById("sliderImages");
    var siLeft = parseInt(getComputedStyle(sliderImages).left, 10);

    function leftDecrease() {
      siLeft--;
      sliderImages.style.left = siLeft + "px";
    }

    function leftIncrease() {
      siLeft++;
      sliderImages.style.left = siLeft + "px";
    }

    var clear = setInterval(leftDecrease, 10);

    setTimeout(function() {
      clearInterval(clear);
    }, 23000);
  }
}
