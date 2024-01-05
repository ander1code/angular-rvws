import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dbinding', loadChildren: './data-binding/data-binding.module#DataBindingModule' },
    { path: 'directives', loadChildren: './directives/directives.module#DirectivesModule' },
    { path: 'pipes', loadChildren: './pipes/pipes.module#PipesModule' },
    { path: 'services', loadChildren: './courses/courses.module#CoursesModule' },
    { path: 'forms', loadChildren: './forms/forms.module#FormsTypeModule' },
    { path: 'http', loadChildren: './http-cmp/http-cmp.module#HttpCmpModule' },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', component: PageNotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor() {
    }
}
