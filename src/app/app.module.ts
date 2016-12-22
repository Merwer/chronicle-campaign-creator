import { CampaignDeckComponent } from './campaign-deck/campaign-deck.component';
import { SharedModule } from './shared/sharedModule';
import { CampaignLevelComponent } from './campaign-level/campaign-level.component';
import { CampaignComponent } from './campaign/campaign.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CampaignComponent,
    CampaignLevelComponent,
    CampaignDeckComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
