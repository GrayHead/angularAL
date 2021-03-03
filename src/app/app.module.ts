import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CutomPipe } from './cutom.pipe';
import { SilverDirective } from './silver.directive';

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
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
