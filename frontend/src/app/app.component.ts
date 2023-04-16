import { Component } from '@angular/core';
import { LabSeqService } from 'src/services/lab-seq-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LabSeq Frontend';
  index2Compute: string = "";
  result: string = "";
  loading: boolean = false;
  errorMessage: string = "";

  constructor(private labSeqService: LabSeqService) {
  }
  public getResult() {

    this.loading = true;
    this.errorMessage = "";

    this.labSeqService.getIndexValue(this.index2Compute).subscribe({
      next: (response) => {
        console.log('response received'+response);
        this.result = response;
        this.loading = false;
      },
      error: (error) => console.error(error),
      complete: () => {
        console.info('request complete');
      }
    });
  }
}
