import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/AuthService';
import { HisHeaderModule } from '@onehealth/ui/his-header';
import { NgIf } from '@angular/common';
import { OHDropDownModule } from '@onehealth/ui/dropdown';

@Component({
  selector: 'app-header-layout',
  standalone: true,
  imports: [RouterLink, HisHeaderModule, NgIf, OHDropDownModule],
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.css'
})
export class HeaderLayoutComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated(); 
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
