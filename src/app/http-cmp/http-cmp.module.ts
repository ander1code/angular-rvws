import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpCmpRoutingModule } from './http-cmp.routing.module';
import { RouterModule } from '@angular/router';
import { HttpCmpComponent } from './http-cmp.component';
import { PeopleHttpService } from './peoplehttp.service';

@NgModule({
    imports: [
        CommonModule,
        HttpCmpRoutingModule,
        RouterModule
    ],
    declarations: [HttpCmpComponent],
    exports: [HttpCmpComponent],
    providers: [PeopleHttpService]
})
export class HttpCmpModule { }
