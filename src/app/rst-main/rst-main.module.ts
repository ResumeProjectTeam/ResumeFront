import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const CORE_COMPONENTS = [NavbarComponent, SidebarComponent, FooterComponent, MainDashboardComponent, PageNotFoundComponent];
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: CORE_COMPONENTS,
  exports: CORE_COMPONENTS
})
export class RstMainModule { }
