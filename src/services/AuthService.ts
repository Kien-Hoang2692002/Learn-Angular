import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResponseData } from "../app/shared/types/responseData";
import { Observable } from "rxjs";
import { AuthUser } from "../app/shared/types/auth";


@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private http: HttpClient){
    }

    login(data: AuthUser): Observable<ResponseData<AuthUser[]>> {
        return this.http.post<any>(`https://ninedev-api.vercel.app/account/login`, data);
    }

    // Hàm để lưu token vào localStorage sau khi đăng nhập
  storeToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Hàm để lấy token từ localStorage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Hàm để kiểm tra xem người dùng đã đăng nhập chưa
  isAuthenticated(): boolean {
    return !!this.getToken();  // Kiểm tra xem có token hay không
  }
    
}