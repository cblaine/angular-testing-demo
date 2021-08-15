import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent } from './campaign.component';
import { NewCampaignComponent } from './new-campaign/new-campaign.component';
import * as fromCampaign from './state/campaign.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [CampaignComponent, NewCampaignComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCampaign.campaignFeatureKey,
      fromCampaign.reducer
    ),
    CampaignRoutingModule,
  ],
})
export class CampaignModule {}
