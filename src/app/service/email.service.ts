import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl:string="http://localhost:9595"

  constructor(private http:HttpClient) { }

  sendEmail(data) {
    return this.http.post(`${this.baseUrl}/sendemail`,data);
  }
}
