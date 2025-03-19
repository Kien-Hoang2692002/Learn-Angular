import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OHFormModule } from '@onehealth/ui/form';
import { OHInputModule } from '@onehealth/ui/input';
import { OHButtonModule } from '@onehealth/ui/button';
import { AuthService } from '../../services/AuthService';
import { Router } from '@angular/router';
import { AuthUser } from '../shared/types/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    OHFormModule,
    OHInputModule,
    OHButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Sửa đúng 'styleUrls'
})
export class LoginComponent {

  validateForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required), 
    remember: new FormControl(true)
  });

  constructor( private authService: AuthService, private router:Router) {
    }

  // Hàm xử lý submit form
  submitForm(): void {
    if (this.validateForm.valid) {
      const loginData: AuthUser = {
        username: String(this.validateForm.value.username),
        password: String(this.validateForm.value.password),
      };
      this.authService.login(loginData)
        .subscribe(({data}:any) => {
          const token = data.id;
          if (token) {
            // this.authService.storeToken(token);
            this.router.navigate(['/']);
            console.log('Đăng nhập thành công!');
          } else {
            console.log('Token không có trong phản hồi');
          }
        })

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty(); 
          control.updateValueAndValidity({ onlySelf: true }); 
        }
      });
    }
  }
}
