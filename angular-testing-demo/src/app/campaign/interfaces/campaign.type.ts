import { IPlayer } from "./player.type";

export interface ICampaign{
   campaignID: number;
   campaignName: string;
   campaignStartDate: Date;
   campaignEndDate: Date;
   dungeonMaster: string;
   players: IPlayer[];
}
