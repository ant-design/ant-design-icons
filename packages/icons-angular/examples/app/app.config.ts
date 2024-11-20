import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';

import { AppInterceptor } from './app-interceptor';
import { provideAntIcons } from '@ant-design/icons-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AppInterceptor,
        multi: true
    },
    provideAntIcons([]),
    provideHttpClient(withInterceptorsFromDi())
  ]
};
