import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module'
import { LoginComponent } from './login/login.component'


@NgModule({
  declarations: [LoginComponent],
  imports: [
    ComponentsModule
  ],
  exports: [
    ComponentsModule,
    LoginComponent
  ]
})
export class ViewsModule { }
