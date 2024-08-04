import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  url: string =
    "https://play-lh.googleusercontent.com/wiLKNn9tyY-SiNWg_Pib1stLmZU9lYuadq-Y4ASfi7OtJzLDmDknUFcqejQjw4Sqjg"
  height: number = 150
  weight: number = 50
  bmi: number = 0
  indocator: String = ''
  constructor() { }

  calculateBMI() {
    this.bmi = Math.round(this.weight / Math.pow((this.height / 100), 2))
    if (this.bmi < 18.5) {
      this.indocator = "Underweight"
    }
    else if (this.bmi < 25) {
      this.indocator = "Overweight"
    }
    else if (this.bmi < 30) {
      this.indocator = "Overweight"
    }
    else if (this.bmi < 40) {
      this.indocator = "Obese"
    }
    else if (this.bmi > 40) {
      this.indocator = "Morbidly Obese"
    }
  }

}
