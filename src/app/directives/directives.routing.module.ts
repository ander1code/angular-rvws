import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives.component';

const directivesRoutes: Routes = [
    { path: '', component: DirectivesComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(directivesRoutes)
    ],
    exports: [RouterModule]
})
export class DirectivesRoutingModule {
}
