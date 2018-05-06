import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RstMainModule } from './rst-main/rst-main.module';

import { ProfileModule } from './profile/profile.module';
import { CertificateModule } from './certificate/certificate.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule,

    AppRoutingModule,

    RstMainModule,
    ProfileModule,
    CertificateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
