import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, Component } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HomeLoanSbi';
}



export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()),provideClientHydration()]
};