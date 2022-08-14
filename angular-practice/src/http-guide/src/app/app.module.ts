import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 添加对于 HttpClientModule 模块的引用
import { HttpClientModule } from '@angular/common/http';
import { AntiMotivationalQuotesComponent } from './anti-motivational-quotes/anti-motivational-quotes.component';

// 添加自定义拦截器
import { HttpInterceptorProviders } from './http-interceptors/http-interceptor-providers';

@NgModule({
  declarations: [
    AppComponent,
    AntiMotivationalQuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // 添加到根应用模块中
  ],
  providers: [
    HttpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
