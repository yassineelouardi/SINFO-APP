import { Component, Input, OnInit } from '@angular/core';
import { Topic } from './../topic';
import { TopicService } from './../services/topic.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './../html/app.topic.more.html',
  styleUrls: ['./../css/app.topic.css'],
  selector: 'app-topic'
})
export class AppComponentTopicMore{
    
    topic: any;
    constructor(private _topicService: TopicService, private route: ActivatedRoute){
        this._topicService = _topicService;
    }
    
    getTopicById(){

     // Subscribe to route params
        this.topic = this.route.params.subscribe(params => {

          let idtopic = params['topic'];
          
         // Retrieve Pet with Id route param
          this._topicService.getTopicsById(idtopic).subscribe(topic => this.topic = topic);
      });

    }
   
    ngOnInit():any{
        this.getTopicById();
     }
    
    routeIsActive(routePath: string) {
        console.log(this.route.snapshot.url[0].path)  // array of states
        console.log(routePath);
        console.log(this.route.snapshot.url[0].path == routePath);
        return this.route.snapshot.url[0].path == routePath;
    } 
    
}
