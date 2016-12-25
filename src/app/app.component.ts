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
    console.log("Test");
    /*
      var forms = document.querySelectorAll('form');
      var campaignForm = forms[0];
      var levelForm = forms[1];
      var serializeOptions = { 'includeEmpty': false, 'encodes': { 'checkbox': true, 'number': true } };
      var campaign = $(campaignForm).serializeObject(serializeOptions); // This is the only usage of jQuery.
      var level = $(levelForm).serializeObject(serializeOptions); // This is the only usage of jQuery.
      console.log("Campaign", campaign);
      console.log("Level", level);
      return false;
      */
      var zip = new JSZip();
      var file = zip.file("campaign.json", "Hello World");
      zip.generateAsync({type:"blob"})
          .then(function(content) {
              // see FileSaver.js
              saveAs(content, "example.zip");
          });
  }

  addLevel = function () {
    this.levels.push(new Level());
  }
}
