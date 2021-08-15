import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCampaignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
