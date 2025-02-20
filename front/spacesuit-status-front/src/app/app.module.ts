import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, MatButtonModule, MatIconModule],
  declarations: [],
  bootstrap: [],
  providers: [provideHttpClient()],
})
export class AppModule {}
