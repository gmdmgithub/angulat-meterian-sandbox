import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

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

  onChange(event: MatCheckboxChange) {
    console.log(event.source.value);
  }
}
