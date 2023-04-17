import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiSettings } from 'src/environments/api-settings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabSeqService {

  private baseUrl = `${apiSettings.endpoint}/labseq`;

  constructor(private httpClient: HttpClient) { }

  getIndexValue(index2Compute: string): Observable<any> {
    // const requestUrl = `${this.baseUrl}/${index2Compute}`;
    return this.httpClient.get(this.baseUrl+'/'+index2Compute);
  }

  postIndexValue(index2Compute: string): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    // const body=JSON.stringify(index2Compute);
    // console.log(body)
    return this.httpClient.post(this.baseUrl + '/'+index2Compute,index2Compute ,{'headers':headers})
  }
}
