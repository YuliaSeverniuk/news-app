import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { PaginationModule } from "../pagination/pagination.module";


@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    PaginationModule
  ]
})
export class NewsModule { }
