import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Adjust the import path if necessary
import { AppComponent } from './app/app.component'; // Adjust the import path if necessary

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
