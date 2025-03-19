import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router'; // Thêm router
import { routes } from './app/app.routes'; // File định nghĩa routes (sẽ tạo nếu chưa có)

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(routes), // Cung cấp router với các route
    // withComponentInputBinding() nếu bạn dùng input binding trong route (tùy chọn)
  ]
})
  .catch(err => console.error(err));