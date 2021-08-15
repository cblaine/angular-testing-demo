import { createAction, props } from '@ngrx/store';
import { ICampaign } from '../interfaces/campaign.type';

export const AddCampaign = createAction(
  '[Campaign] Add campaign',
  props<{ campaign: ICampaign }>()
);
