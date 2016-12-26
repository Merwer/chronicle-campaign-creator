import { Card } from './../../model/card';
import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CardService {
    cardObservable: Observable<Card[]>;

    private cardsUrl: string = 'https://sheetsu.com/apis/v1.0/d67f77b28ffe?fields=id,name';

    constructor(private http: Http) {
    }

    init(): void {
        if(this.cardObservable === undefined) {
            this.refreshCards();
        }
    }

    getCards(): Observable<Card[]> {
        this.init();
        return this.cardObservable;
    }

    private refreshCards(): void {
        console.log("Retrieving cards from " + this.cardsUrl);
        this.cardObservable = this.http.get(this.cardsUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
  }
}