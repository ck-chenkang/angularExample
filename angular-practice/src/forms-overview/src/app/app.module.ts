import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 引入 FormsModule
import { FormsModule } from '@angular/forms';

// 引入 ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { HeroValidateDirective } from './direactives/hero-validate.directive';
import { CrossFieldValidateDirective } from './direactives/cross-field/cross-field-validate.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent,
    HeroValidateDirective,
    CrossFieldValidateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // 添加到应用模块中
    ReactiveFormsModule // 添加到应用模块中
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
