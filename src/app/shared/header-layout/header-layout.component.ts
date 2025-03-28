import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/AuthService';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header-layout',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.css'
})
export class HeaderLayoutComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // this.isLoggedIn = this.authService.isAuthenticated(); 
  }

  onLogin() {
    console.log('Login button clicked');
    // alert("Thực hiện logic đăng nhập tại đây")
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.isLoggedIn = false;
    console.log('Đăng xuất thành công!');
  }

}
