import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveTvComponent } from './components/live-tv/live-tv.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'en/live-tv', component: LiveTvComponent },
    { path: 'en/search', component: SearchComponent }
];


@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}