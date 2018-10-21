
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

testData : string [];

  ngOnInit() {

    this.httpService.get('./assets/test-data.json').subscribe(
      data => {
        this.testData = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.testData[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
