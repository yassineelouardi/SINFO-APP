import { Component,OnInit,ViewEncapsulation  } from '@angular/core';
import { Topic } from './../topic';
import { TopicService } from './../services/topic.service';
import { Router } from '@angular/router';




@Component({
  templateUrl: './../html/app.topic.html',
  styleUrls: ['./../css/app.topic.css'],
  selector: 'app-topic',encapsulation: ViewEncapsulation.None,
  providers: [TopicService]
})
export class AppComponentTopic  implements OnInit{
  title = ' My Topics Stack Trace';
  icon="{{=:~~}}";
  error = "";
  topics = [];
  //print to the user the selected page
  currentSelectedPage:string="";
  //print to the user the total iterms per page
  currentItemsPerPage:string="";
  //the maximum buttons to show
  private size:number = 12;
  //the number of pages you want to print
  private totalPages:number = 0;
  //the current page
  private currentPage:number = 0;
  
  constructor(private _topicService: TopicService,private _router : Router){
      this._topicService = _topicService;
      _router.events.subscribe((url:any) => console.log(url));
      console.log(_router.url);  // to print only path eg:"/login"
  }
  

  getTopics(){
     
      this._topicService.getTopics()
       .subscribe(
          data => this.topics = data,
          error => this.error = " is invalid."
       );
  }
  
  getTopicsPagger(){
     
      this._topicService.getTopicsPagger(this.currentPage,this.size)
       .subscribe(
          data => this.topics = data,
          error => this.error = " is invalid."
       );
  }
  
  ngOnInit():any{
      this.getTopics();
      this.onSelect(this.selectedTopic);
   }
  
  
  routeIsActive(routePath: string) {
      return this._router.url == routePath;
  } 
  
  
  selectedTopic: Topic;
   
   onSelect(topic: Topic): void {
     this.selectedTopic = topic;
   }
   
   

}
