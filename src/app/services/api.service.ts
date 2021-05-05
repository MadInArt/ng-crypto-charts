import { HttpClient, HttpHeaders} from '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      mode: 'no-cors'
    })
  }
  constructor(private httpClient: HttpClient) { }

  get(url: string,): Observable<any>{
       return this.httpClient.get<any>(url)
  }
  delete(url: string, params = {}): Observable<any>{
      // this.httpOptions["params"] = params
      return this.httpClient.delete(url, 
        //  this.httpOptions
         )
  }
  post(url: string, body: any ){
      return this.httpClient.post(url, body,
          // this.httpOptions
          )
  }
  put(url: string, body: any ){
      return this.httpClient.put(url, body,
        //  this.httpOptions
         )
  }
}
