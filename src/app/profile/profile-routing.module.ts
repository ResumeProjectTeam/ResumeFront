import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { ProfileManagementComponent } from "./profile-management/profile-management.component";

const routes: Routes = [ { path: 'profile-list', component: ProfileManagementComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }