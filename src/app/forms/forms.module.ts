import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsDebugComponent } from './forms-template/forms-debug/forms-debug.component';
import { FormsErrorsComponent } from './forms-template/forms-errors/forms-errors.component';
import { FormsComponent } from './forms.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';
import { FormsTemplateComponent } from './forms-template/forms-template.component';
import { FormsTypeRoutingModule } from './forms.routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FormsTypeRoutingModule,
        RouterModule,
        ReactiveFormsModule
    ],
    declarations: [
        FormsReactiveComponent,
        FormsDebugComponent,
        FormsErrorsComponent,
        FormsTemplateComponent,
        FormsComponent,
    ],
    exports: [
        FormsComponent
    ],
    providers: []
})
export class FormsTypeModule { }
