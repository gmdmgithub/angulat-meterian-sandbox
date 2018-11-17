import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular material sandbox";
  favoriteCar: string;
  isChecked = true;
  value = 2;
  cars = ["tesla", "ford", "toyota"];

  countries = new FormControl();
  countryList = [
    {code: "PL", name: "Poland"},
    { code: "GB", name: "Great Britan" },
    { code: "GE", name: "Germany" }
  ];

  minDate = new Date();
  maxDate = new Date('2020-01-01');

  onChange(event: MatCheckboxChange) {
    console.log(event.source.value);
  }
}
