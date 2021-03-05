import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CutomPipe} from './cutom.pipe';
import {SilverDirective} from './silver.directive';
import {MainInterceptor} from './serivices/interceptors/main.interceptor';
import { XxxComponent } from './xxx/xxx.component';

const routes: Routes = [
  {
    path: 'users', loadChildren: () => import('./user-module/user.module').then(m => m.UserModule)

  },
];

@NgModule({
  declarations: [
    AppComponent,
    CutomPipe,
    CutomPipe,
    SilverDirective,
    XxxComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
