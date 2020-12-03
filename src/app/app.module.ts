import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './modules/components/components.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


// used to create fake backend
import { fakeBackendProvider } from './modules/helpers';
import { BasicAuthInterceptor, ErrorInterceptor } from './modules/helpers';
import { LoginComponent } from './modules/views/login';
import { HomeComponent } from './modules/views/home';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ComponentsModule,
    MaterialModule
  ],
exports: [
    ComponentsModule,
    LoginComponent
  ],

  providers: [
	{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
