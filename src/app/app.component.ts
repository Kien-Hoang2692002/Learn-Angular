import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    HeaderLayoutComponent, 
    FormsModule,
   ],
  // template: `
  //   <main>
  //     <header class="brand-name">
  //       <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
  //     </header>
  //     <section class="content">
  //       <app-home></app-home>
  //     </section>
  //   </main>
  // `,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // title = {
  //   name: 'Test',
  //   old: 2024,
  // };

  // // Properties
  // isDisable = false;

  // // Attributes
  // contentImage = 'Hello Welcome';

  

}
