import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Feed } from '../model/feed';

@Injectable()
export class FeedService {

  private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';
  private urlFeeds: string = 'http://localhost:8080/feeds'

  constructor(
    private http: Http
  ) { }

  getFeeds() {
    return this.http.get(this.urlFeeds)
      .map(res => res.json());
  }

  updateFeeds(allFeeds) {
    const httpOptions = {
      headers: new Headers({ 'Content-Type': 'application/json' })
    };

    let url = this.urlFeeds;

    return this.http
      .put(url, JSON.stringify(allFeeds), httpOptions)
      .map(res => res.json());
      // .then(res => <any[]>res.json().data)
      // .then(data => { return data; });
  }

  getFeedContent(url: string): Observable<Feed> {
    return this.http.get(this.rssToJsonServiceBaseUrl + url)
      .map(this.extractFeeds)
      .catch(this.handleError);
  }

  private extractFeeds(res: Response): Feed {
    let feed = res.json().items;
    // console.log(feed);
    return feed || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}