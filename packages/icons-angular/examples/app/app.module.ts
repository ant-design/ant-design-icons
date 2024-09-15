import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppInterceptor } from './app-interceptor.module';
import { IconModule } from '@ant-design/icons-angular';
import { AppComponent } from './app.component';

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [CommonModule,
        FormsModule,
        BrowserModule,
        IconModule], providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AppInterceptor,
            multi: true
        },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule { }
