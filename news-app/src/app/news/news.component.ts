import { Component, OnInit } from '@angular/core';
import { NewsService } from './service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList: any;
  public current = 1;
  public newsToDisplay = [] as  any;
  public perPage = 5;
  public total!: number;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getArticles().subscribe((data: any) => {
      this.newsList = [...data.articles];
      this.total = Math.ceil(this.newsList.length / this.perPage);
      this.newsToDisplay = this.paginate(this.current, this.perPage);
    });

  }

  public onGoTo(page: number): void {
    this.current = page;
    this.newsToDisplay = this.paginate(this.current, this.perPage);
  }

  public onNext(page: number): void {
    this.current = page + 1;
    this.newsToDisplay = this.paginate(this.current, this.perPage);
  }

  public onPrevious(page: number): void {
    this.current = page - 1;
    this.newsToDisplay = this.paginate(this.current, this.perPage);
  }

  public paginate(current: number, perPage: number): string[] {
    return [...this.newsList.slice((current - 1) * perPage).slice(0, perPage)];
  }

}
