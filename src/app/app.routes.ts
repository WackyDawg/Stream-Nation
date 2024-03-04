import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveTvComponent } from './pages/live-tv/live-tv.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { OnDemandComponent } from './pages/on-demand/on-demand.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'en/live-tv', component: LiveTvComponent },
    { path: 'en/search', component: SearchComponent },
    { path: 'en/on-demand', component: OnDemandComponent },
];


@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}