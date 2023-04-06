import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';	
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map } from 'rxjs/operators';	

import { AppServiceService } from 'src/app/app-service.service';

import { tableRow } from 'src/app/tableRow';

import { reviews } from 'src/app/reviews';
import { detailRest } from 'src/app/detailRest';

import { FormControl, NgForm } from "@angular/forms";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  autoCompleteList: any = [];
  tableContents: tableRow = {};
  reviewsList: reviews = {};
  detailList: detailRest = {};
  open_now: string = '';
  twitter_url: string = '';
  facebook_url: string = '';
  keyword: string = '';

  constructor( private service: AppServiceService) { }

  ngOnInit(): void {
    this.service.getAutocompleteData().subscribe((response)=> (this.autoCompleteList = response));
    // console.log(this.autoCompleteList);

    this.service.getSearchResults().subscribe((response)=> (this.tableContents = response));

    this.service.getReviews().subscribe((response) => (this.reviewsList = response));

    this.service.getDetailsPage().subscribe((response) => {
      this.detailList = response;
      var len = response.categories?.length;
      console.log(len);
      if(this.detailList.hours![0].is_open_now == false){
        this.open_now = 'Closed';
      }
      else{
        this.open_now = 'Open';
      }
      this.twitter_url = 'https://twitter.com/intent/tweet?text=Check%20'+ this.detailList.name+ '%20on%20Yelp!&url=' + this.detailList.url;
      this.facebook_url = 'https://www.facebook.com/sharer/sharer.php?u='+ this.detailList.url+'&quote=Check%20'+this.detailList.name+'%20on%20Yelp!';
    });
  }

  
  
  
  

}
