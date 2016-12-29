import {Injectable} from "@angular/core"
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
 
@Injectable()
export class TopicService{
 
   endpoint_url:string = "http://localhost:9002/topics";

    http:Http;
   constructor(http: Http){
       this.http = http;
   }
 
   getTopics (){
       return  this.http.get(this.endpoint_url).map((res:Response) => res.json())
       //...errors if any
       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

   }
   getTopicsPagger (page: number, size: number ){
       return  this.http.get(this.endpoint_url+"/"+page+"/"+size).map((res:Response) => res.json())
       //...errors if any
       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

   }
   getTopicsByTag (tag:string){
       return  this.http.get(this.endpoint_url+"/"+tag).map((res:Response) => res.json())
       //...errors if any
       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }
   getTopicsById (id:string){
       return  this.http.get(this.endpoint_url+"/more/"+id).map((res:Response) => res.json())
       //...errors if any
       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }
}