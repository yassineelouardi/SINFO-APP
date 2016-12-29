import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponentTopic } from './../componants/app.topic';
import { AppComponentTopicMore } from './../componants/app.topic.more';
import { AppComponentTopicTagg } from './../componants/app.topic.tagg';

//Route Configuration
const appRoutes: Routes = [
  {
    path: 'topic',
    component: AppComponentTopic // Remember to import the Home Component
  },
  { path: 'topics/:tag', component: AppComponentTopicTagg },
  { path: 'topicmore/:topic', component: AppComponentTopicMore },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}