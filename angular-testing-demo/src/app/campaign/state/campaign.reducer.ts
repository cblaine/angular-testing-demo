import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ICampaign } from '../interfaces/campaign.type';
import { AddCampaign } from './campaign.actions';

export const campaignFeatureKey: string = 'campaign';

export interface ICampaignState extends EntityState<ICampaign> {
  loaded: boolean;
  loading: boolean;
}

export const campaignEntityAdapter: EntityAdapter<ICampaign> = createEntityAdapter<ICampaign>({
  selectId: (campaign: ICampaign) => campaign.campaignID,
});

export const campaignInitialState: ICampaignState =
  campaignEntityAdapter.getInitialState({ loaded: false, loading: false });

const campaignReducer = createReducer(
  campaignInitialState,
  on(AddCampaign, (state, { campaign }) => {
    return campaignEntityAdapter.addOne(campaign, state);
  })
);

export function reducer(state: ICampaignState | undefined, action: Action) {
  return campaignReducer(state, action);
}
