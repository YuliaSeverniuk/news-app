import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  api_key = 'f1e1f7f87ac34ccc8ad2d5f1125c08d6';

  constructor(private http: HttpClient) { }

  getArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
   }

}
