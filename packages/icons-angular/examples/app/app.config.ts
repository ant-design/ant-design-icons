import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import { provideAntIcons } from '@ant-design/icons-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection(), provideAntIcons([]), provideHttpClient(withInterceptorsFromDi())]
};
