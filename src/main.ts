// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { InfoComponent } from './app/MyComponents/info/info.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { InfoComponent } from './app/MyComponents/info/info.component';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(),]
})
.catch(err => console.error(err));


