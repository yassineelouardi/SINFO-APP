import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { Topic } from './../topic';
import { TopicService } from './../services/topic.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  templateUrl: './../html/app.topic.tag.html',
  styleUrls: ['./../css/app.topic.css'],
  providers: [TopicService],
  selector: 'app-topic'
  
})
export class AppComponentTopicTagg  implements OnInit{
  title = ' Topics Stack Trace';
  icon="{{=:~~}}";
  error = "";
  topics = [];
   sub:any;
  
  
  constructor(private _topicService: TopicService,private route: ActivatedRoute){
      this._topicService = _topicService;
  }
  
  getTopicsByTag(){

   // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {

        let tag = params['tag'];
        this.title=this.title + "For "+tag;

       // Retrieve Pet with Id route param
        this._topicService.getTopicsByTag(tag).subscribe(topics => this.topics = topics);
    });

  }
 
  ngOnInit():any{
      this.getTopicsByTag();
   }
  
  ngOnDestroy() {
      // Clean sub to avoid memory leak
      this.sub.unsubscribe();
    }
  
  routeIsActive(routePath: string) {
      console.log(this.route.snapshot.url[0].path)  // array of states
      console.log(routePath);
      console.log(this.route.snapshot.url[0].path == routePath);
      return this.route.snapshot.url[0].path == routePath;
  } 
}