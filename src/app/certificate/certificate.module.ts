import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateManagementComponent } from './certificate-management/certificate-management.component';
import { CertificateRoutingModule } from './certificate-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CertificateRoutingModule
  ],
  declarations: [CertificateManagementComponent]
})
export class CertificateModule { }
