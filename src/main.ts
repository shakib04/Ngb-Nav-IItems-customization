import './polyfills';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {NgbdNavVerticalModule} from './app/nav-vertical.module';

platformBrowserDynamic()
    .bootstrapModule(NgbdNavVerticalModule)
    .then(ref => {
      // Ensure Angular destroys itself on hot reloads.
      if (window['ngRef']) {
        window['ngRef'].destroy();
      }
      window['ngRef'] = ref;

      // Otherwise, log the boot error
    })
    .catch(err => console.error(err));
