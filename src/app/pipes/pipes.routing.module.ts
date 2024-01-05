
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes.component';

const pipesRoutes: Routes = [
    { path: '', component: PipesComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(pipesRoutes)
    ],
    exports: [RouterModule]
})
export class PipesRoutingModule {
}
