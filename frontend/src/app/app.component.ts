import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LabSeqService } from 'src/services/lab-seq-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'LabSeq Frontend';
  index2Compute: string = "";
  result: string = "";
  aForm!: FormGroup;

  constructor(private labSeqService: LabSeqService) {
  }
  ngOnInit(): void {
    this.aForm = new FormGroup({
      index2Compute: new FormControl(this.index2Compute, [
        Validators.required,
        Validators.min(0),
        Validators.max(20000)
      ])
    });
  }


  // public getResult() {

  //   this.labSeqService.getIndexValue(this.index2Compute).subscribe({
  //     next: (response) => {
  //       // console.log('response received' + response);
  //       this.result = response;
  //     },
  //     error: (error) => {
  //       console.error(error);
  //     },
  //     complete: () => {
  //       // console.info('request complete');
  //     }
  //   });
  // }

  public postResult() {

    this.labSeqService.postIndexValue(this.index2Compute).subscribe({
      next: (response) => {
        // console.log('response received' + response);
        this.result = response;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        // console.info('request complete');
      }
    });
  }
}
