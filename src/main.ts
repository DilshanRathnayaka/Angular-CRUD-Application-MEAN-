import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { NewModule } from './app/new/new.module';
import { SecondModule } from './app/second/second.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  platformBrowserDynamic().bootstrapModule(NewModule)
  .catch(err => console.error(err));
  platformBrowserDynamic().bootstrapModule(SecondModule)
  .catch(err => console.error(err));