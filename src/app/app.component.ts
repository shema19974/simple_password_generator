import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  canAddLetters = false;
  canAddNumbers = false;
  canAddSymbols = false;
  value: string = '';
  password: string = '';
  isValueString = false

  length!: number;

  onAddLetterChange() {
    this.canAddLetters = !this.canAddLetters;
  }

  onButtonSubmit() {
    let parseValue = parseInt(this.value);
    if (isNaN(parseValue)) {
      this.isValueString = true
    }
    length = parseValue;
    let numbers = '1234567890';
    let letters = 'abcdefjhigklmnopqrstuvwxyz';
    let symbols = '!@#$%^&*()';

    let randomValue = '';

    if (this.canAddNumbers) {
      randomValue += numbers;
    }
    if (this.canAddLetters) {
      randomValue += letters;
    }
    if (this.canAddSymbols) {
      randomValue += symbols;
    }
    let result = '';
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * randomValue.length);
      result += randomValue[index];
    }
    this.password = result;
  }

  onAddNumberChange() {
    this.canAddNumbers = !this.canAddNumbers;
  }

  onAddSymbolChange() {
    this.canAddSymbols = !this.canAddSymbols;
  }
}
