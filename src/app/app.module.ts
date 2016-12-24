import { CampaignCardPredicateComponent } from './campaign-card-predicate/campaign-card-predicate.component';
import { CampaignChallengeComponent } from './campaign-challenge/campaign-challenge.component';
import { CampaignPageTemplateComponent } from './campaign-page-template/campaign-page-template.component';
import { CampaignCardComponent } from './campaign-card/campaign-card.component';
import { CardService } from './shared/services/card.service';
import { CampaignLegendComponent } from './campaign-legend/campaign-legend.component';
import { CampaignDeckComponent } from './campaign-deck/campaign-deck.component';
import { CampaignPlayerDeckComponent } from './campaign-player-deck/campaign-player-deck.component';
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
    CampaignCardComponent,
    CampaignDeckComponent,
    CampaignLegendComponent,
    CampaignPlayerDeckComponent,
    CampaignPageTemplateComponent,
    CampaignChallengeComponent,
    CampaignCardPredicateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
