import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesRoutingModule } from './directives.routing.module';
import { DirectivesComponent } from './directives.component';
import { CaptextDirective } from './directives/captext.directive';
import { HighlightMouseDirective } from './directives/highlight-mouse.directive';
import { NgContentComponent } from './ng-content/ng-content.component';
import { PropertyDirectiveComponent } from './property-directive/property-directive.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        DirectivesRoutingModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        DirectivesComponent,
        CaptextDirective,
        HighlightMouseDirective,
        NgContentComponent,
        PropertyDirectiveComponent,
        HighlightDirective
    ],
    exports: [DirectivesComponent],
})
export class DirectivesModule { }
