import { Level } from './model/level';
import { Campaign } from './model/campaign';
import { Component } from '@angular/core';

declare let JSZip: any;
declare let saveAs: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  campaign: Campaign;
  levels: Level[];

  constructor() {
    this.title = 'Campaign Creator';
    this.campaign = new Campaign();
    this.levels = [];
  }

  createCampaignFile = function () {
      let zip = new JSZip();
      let campaign = this.campaign;
      let file = zip.file("campaign.json", JSON.stringify(campaign));
      this.levels.forEach(level => {
        zip.file(level.name + ".json", JSON.stringify(level));
      });
      zip.generateAsync({type:"blob"})
          .then(function(content) {
              saveAs(content, campaign.name + ".zip");
          });
  }

  addLevel = function () {
    this.levels.push(new Level());
  }
}
