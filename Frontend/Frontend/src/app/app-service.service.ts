import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';	
import { Observable, forkJoin } from 'rxjs';	
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map } from 'rxjs/operators';

import { tableRow } from './tableRow';
import { reviews } from './reviews';
import { detailRest } from './detailRest';

@Injectable({
    providedIn: 'root'
  })

export class AppServiceService {
    constructor(private http : HttpClient) {
	}

    getAutocompleteData() {
		return this.http.get('http://localhost:8888/autocomplete/p');
	}

    getSearchResults(){
        return this.http.get<tableRow>('http://localhost:8888/search/pizza/34.0223519/-118.285117/all/10');
        // return this.http.get('http://localhost:8888/search/pizza/34.0223519/-118.285117/all/10');
    }

    getReviews(){
        return this.http.get<reviews>('http://localhost:8888/reviews/WavvLdfdP6g8aZTtbBQHTw');
    }

    getDetailsPage(){
        return this.http.get<detailRest>('http://localhost:8888/business/WavvLdfdP6g8aZTtbBQHTw');
    }
}