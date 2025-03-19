import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseData } from '../app/shared/types/responseData';
import { AuthUser } from '../app/shared/types/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: AuthUser): Observable<ResponseData<AuthUser[]>> {
    return this.http.post<any>(`https://ninedev-api.vercel.app/account/login`, data);
  }

  // Hàm để lưu token vào localStorage nếu đang ở client-side
  // storeToken(token: string): void {
  //   if (typeof window !== 'undefined' && window.localStorage) {
  //     localStorage.setItem('authToken', token); // Lưu vào localStorage
  //   }
  // }

  // // Hàm để lấy token từ localStorage
  // getToken(): string | null {
  //   if (typeof window !== 'undefined' && window.localStorage) {
  //     return localStorage.getItem('authToken'); // Lấy từ localStorage
  //   }
  //   return null;
  // }

  // // Hàm kiểm tra xem người dùng đã đăng nhập chưa
  // isAuthenticated(): boolean {
  //   return !!this.getToken(); // Kiểm tra token trong localStorage
  // }
}
