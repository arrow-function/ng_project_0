import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL, endpoints } from 'src/constants';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}
  create = (data: SignUpForm) =>
    this.httpClient.post(
      SERVER_URL + endpoints.CREATE_USER,
      data as SignUpForm
    );

 login = (data: SignUpForm) => {
    this.httpClient.post(
        SERVER_URL + endpoints.CREATE_USER,
        data as SignUpForm
      );
 }
}
