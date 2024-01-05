import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { PipesRoutingModule } from './pipes.routing.module';
import { SettingsService } from './settings.service';
import { FilterArrayImpurePipe } from './filterarray-impure.pipe';
import { FilterArrayPurePipe } from './filterarray-pure.pipe';
import { MySqrtPipe } from './mysqrt.pipe';
import { UpperPipe } from './upper.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        PipesRoutingModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        PipesComponent,
        PipesComponent,
        FilterArrayImpurePipe,
        FilterArrayPurePipe,
        MySqrtPipe,
        UpperPipe
    ],
    exports: [PipesComponent],
    providers: [
        SettingsService,
        {
            provide: LOCALE_ID,
            deps: [SettingsService],
            useFactory: (settingsService) => settingsService.getLocale()
        }
    ]
})
export class PipesModule { }
