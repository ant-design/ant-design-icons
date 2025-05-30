import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';

import { provideAntIcons } from '@ant-design/icons-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideAntIcons([]), provideHttpClient(withInterceptorsFromDi())],
};
