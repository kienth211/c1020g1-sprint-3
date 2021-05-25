import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
// import {AuctionSubmit} from '../../model/auction-bidding.model';
// import {TokenStorageService} from '../authentication/token-storage';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public API_POST = 'http://localhost:8080/api/post';
  public API_USER = 'http://localhost:8080/api/user';
  public httpOptions: any;

  constructor(public http: HttpClient) { }

  public getPosts(): Observable<any> {
    return this.http.get(this.API_POST);
  }

  public createPost(post): Observable<any> {
    return this.http.post(this.API_POST + '/create', post);
  }

  public getPostById(id): Observable<any> {
    return this.http.get(this.API_POST + '/' + id);
  }

  public editPost(post): Observable<any> {
    return this.http.put(this.API_POST, post);
  }

  public deletePost(id): Observable<any> {
    return this.http.delete(this.API_POST + '?id=' + id);
  }
}
