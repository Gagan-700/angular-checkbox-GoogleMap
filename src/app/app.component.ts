import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  isRedChecked = true;
  isGreenChecked = true;
  isAmberChecked = true;
  resultArr: any[] = [];

  mapData = [
    { exchangeCode: 'hb1', exchangeName: 'Red', ragStatus: 'Red' },
    { exchangeCode: 'hb2', exchangeName: 'Green', ragStatus: 'Green' },
    { exchangeCode: 'hb3', exchangeName: 'Amber', ragStatus: 'Amber' },
    { exchangeCode: 'hb4', exchangeName: 'Empty', ragStatus: '' },
    { exchangeCode: 'hb5', exchangeName: 'Red', ragStatus: 'Red' },
    { exchangeCode: 'hb6', exchangeName: 'Amber', ragStatus: 'Amber' },
    { exchangeCode: 'hb7', exchangeName: 'Green', ragStatus: 'Green' },
    { exchangeCode: 'hb8', exchangeName: 'Empty', ragStatus: '' },
    { exchangeCode: 'hb9', exchangeName: 'Red', ragStatus: 'Red' },
  ];

  ngOnInit() {
    this.resultArr = JSON.parse(JSON.stringify(this.mapData));
  }

  onChange(event) {
    this.resultArr = [];
    if (this.isRedChecked && this.isGreenChecked && this.isAmberChecked) {
      this.resultArr = JSON.parse(JSON.stringify(this.mapData));
    } else {
      this.mapData.map((data) => {
        if (
          (data.ragStatus == 'Red' && this.isRedChecked) ||
          (data.ragStatus == 'Green' && this.isGreenChecked) ||
          (data.ragStatus == 'Amber' && this.isAmberChecked)
        ) {
          this.resultArr.push(data);
        }
      });
    }
  }
}
