import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ViewchildCmpComponent } from './viewchild-cmp/viewchild-cmp.component';
import { LifeCycleComponent } from './lifecycle/lifecycle.component';
import { DataBindingComponent } from './data-binding.component';

const dataBindingRoutes: Routes = [
    { path: '', component: DataBindingComponent },
];


@NgModule({
    imports: [
        RouterModule.forChild(dataBindingRoutes)
    ],
    exports: [RouterModule]
})
export class DataBindingRoutingModule {
}
