import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './../routing/app-routing.module';
import { AppComponentTopic } from './../componants/app.topic';
import { AppComponentTopicMore } from './../componants/app.topic.more';
import { AppComponentTopicTagg } from './../componants/app.topic.tagg';
import {Ng2PaginationModule} from 'ng2-pagination';



@NgModule({
  declarations: [
    AppComponentTopic,
    AppComponentTopicMore,
    AppComponentTopicTagg,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponentTopic]
})
export class AppTopicModule { }
