import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileManagementComponent]
})
export class ProfileModule { }
