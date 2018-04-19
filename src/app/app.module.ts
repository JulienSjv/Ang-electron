import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import {DndModule} from 'ng2-dnd';
import { ColorPickerModule } from 'ngx-color-picker';
import { ModalModule } from 'ngx-bootstrap/modal';


import { NgxElectronModule } from 'ngx-electron';


//SERVICES
import { FeedService } from './services/feed.service';

//COMPONENTS
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { LoaderComponent } from './loader/loader.component';


//COMPONENTS FEED
import { FeedGroupComponent } from './feed-group/feed-group.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { FeedComponent } from './feed/feed.component';

import { FeedNxiComponent } from './feed-nxi/feed-nxi.component';
import { FeedUnivfComponent } from './feed-univf/feed-univf.component';
import { FeedKrbComponent } from './feed-krb/feed-krb.component';
import { FeedGoogleComponent } from './feed-google/feed-google.component';

import { FeedDetailsModalComponent } from './feed-details-modal/feed-details-modal.component';
import { FeedConfigModalComponent } from './feed-config-modal/feed-config-modal.component';




//PIPES
import { RoundPipe } from './pipe/round.pipe';
import { MeteoIcon } from './pipe/meteo-icon.pipe';
import { DateTimeFormatPipe } from './pipe/date-time.pipe';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { DegwindPipe } from './pipe/degwind.pipe';
//import { AsyncPipe } from '@angular/common';
import { TimeAgoPipe } from 'time-ago-pipe';



@NgModule({
  declarations: [
    //COMPONENTS
    AppComponent,
    PanelComponent,
    LoaderComponent,
    FeedGroupComponent,
    FeedCardComponent,
    FeedComponent,
    FeedNxiComponent,
    FeedUnivfComponent,
    FeedKrbComponent,
    FeedGoogleComponent,
    FeedDetailsModalComponent,
    FeedConfigModalComponent,
    //PIPES
    RoundPipe,
    MeteoIcon,
    DateTimeFormatPipe,
    StripHtmlTagsPipe,
    CapitalizePipe,
    DegwindPipe,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxElectronModule,
    ColorPickerModule,
    ModalModule.forRoot(),
    DndModule.forRoot()
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
