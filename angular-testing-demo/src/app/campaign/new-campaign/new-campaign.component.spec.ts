import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { NewCampaignComponent } from './new-campaign.component';

fdescribe('NewCampaignComponent', () => {
  let spectator: Spectator<NewCampaignComponent>;
  const createComponent = createComponentFactory({
    component: NewCampaignComponent,
  });

  beforeEach(async () => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it(`should have a campaign name field`, () => {
    const campaignNameField = spectator.query(
      'input[type="text"].campaign-name'
    );
    expect(campaignNameField).toBeTruthy();
  });

  it(`should have a start date field`, () => {
    const startDateField = spectator.query('input[type="date"].start-date');
    expect(startDateField).toBeTruthy();
  });

  it(`should have an end date field`, () => {
    const endDateField = spectator.query('input[type="date"].end-date');
    expect(endDateField).toBeTruthy();
  });

  it(`should have a dugeon master field`, () => {
    const dmField = spectator.query('input[type="text"].dungeon-master');
    expect(dmField).toBeTruthy();
  });

  // it(`should have a players field`, () => {
  //   const playersField = spectator.query('input.players');
  //   expect(playersField).toBeTruthy();
  // });
});

//  campaignID: number;
//  campaignName: string;
//  campaignStartDate: Date;
//  campaignEndDate: Date;
//  dungeonMaster: string;
//  players: IPlayer[];
