import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';

import { provideAntIcons } from '@ant-design/icons-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideZonelessChangeDetection(), provideAntIcons([]), provideHttpClient(withInterceptorsFromDi())]
};
