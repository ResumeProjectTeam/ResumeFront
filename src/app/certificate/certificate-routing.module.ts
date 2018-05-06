import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CertificateManagementComponent } from "./certificate-management/certificate-management.component";

const routes: Routes = [ { path : 'certificate-list', component: CertificateManagementComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CertificateRoutingModule {}