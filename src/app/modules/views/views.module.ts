import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module'
import { MaterialModule } from '../material/material.module'
import { LoginComponent } from './login/login.component'


@NgModule({
  declarations: [LoginComponent],
  imports: [
    ComponentsModule,
    MaterialModule
  ],
  exports: [
    ComponentsModule,
    LoginComponent
  ]
})
export class ViewsModule { }
