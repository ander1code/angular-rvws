import { NgModule } from '@angular/core';
import { DataBindingComponent } from './data-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ViewchildCmpComponent } from './viewchild-cmp/viewchild-cmp.component';
import { LifeCycleComponent } from './lifecycle/lifecycle.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataBindingRoutingModule } from './data-binding.routing.module';
import { RouterModule } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { OutputPropertyIntoComponent } from './output-property/output-property-into/output-property-into.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataBindingRoutingModule,
        RouterModule
    ],
    declarations: [
        DataBindingComponent,
        InterpolationComponent,
        ClassBindingComponent,
        EventBindingComponent,
        InputPropertyComponent,
        OutputPropertyComponent,
        OutputPropertyIntoComponent,
        PropertyBindingComponent,
        TwoWayBindingComponent,
        ViewchildCmpComponent,
        LifeCycleComponent
    ],
    exports: [DataBindingComponent]
})
export class DataBindingModule { }
