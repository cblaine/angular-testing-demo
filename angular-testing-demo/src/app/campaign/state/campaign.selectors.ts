import { Dictionary } from '@ngrx/entity';
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { ICampaign } from '../interfaces/campaign.type';
import {
  campaignEntityAdapter,
  campaignFeatureKey,
  ICampaignState,
} from './campaign.reducer';

export const selectCampaignState =
  createFeatureSelector<ICampaignState>(campaignFeatureKey);

const { selectAll, selectEntities } = campaignEntityAdapter.getSelectors();

export const selectCampaignEntities: MemoizedSelector<
  ICampaignState,
  Dictionary<ICampaign>
> = createSelector(selectCampaignState, selectEntities);

export const selectCampaigns: MemoizedSelector<ICampaignState, ICampaign[]> =
  createSelector(selectCampaignState, selectAll);
