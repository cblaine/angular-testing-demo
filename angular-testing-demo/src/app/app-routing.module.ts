import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignModule } from './campaign/campaign.module';

const routes: Routes = [
  { path: '', redirectTo: 'campaigns', pathMatch: 'full' },
  { path: 'campaigns', component: CampaignComponent },
  // { path: 'campaigns', loadChildren: () => import('./campaign/campaign.module').then(m => m.CampaignModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CampaignModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
