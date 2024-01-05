import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpCmpComponent } from './http-cmp.component';

const httpRoutes: Routes = [
    { path: '', component: HttpCmpComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(httpRoutes)
    ],
    exports: [RouterModule]
})
export class HttpCmpRoutingModule {
}
