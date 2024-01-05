import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';

const formsRoutes: Routes = [
    { path: '', component: FormsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(formsRoutes)
    ],
    exports: [RouterModule]
})
export class FormsTypeRoutingModule {
}
