import { ICampaign } from "../interfaces/campaign.type";

export const makeFakeCampaign = (overrides?: Partial<ICampaign>) => {
  return {
   campaignID: 1,
   campaignName: 'FAKE CAMPAIGN',
   campaignStartDate: new Date('1/1/2021'),
   campaignEndDate: new Date('1/1/2023'),
   dungeonMaster: 'FAKE DM',
   players: [],
    ...overrides
  }
}
