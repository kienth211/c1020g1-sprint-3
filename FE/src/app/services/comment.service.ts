import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseUrl = 'http://localhost:8080/api/comment';

  constructor(private http: HttpClient,
              // private accountService: AccountService
  ) {
  }

  findAllCommentByProductId(productId: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/product/' + productId);
  }

  findCommentById(commentId: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/' + commentId);
    // return this.http.get<any>(this.baseUrl + '/' + commentId, this.accountService.httpOptions);
  }

  createNewComment(comment: Comment): Observable<any> {
    return this.http.post<any>(this.baseUrl, comment);
    // return this.http.post<any>(this.baseUrl, comment, this.accountService.httpOptions);
  }

  updateComment(comment: Comment): Observable<any> {
    return this.http.put(this.baseUrl + '/edit/' + comment.commentId, comment);
    // return this.http.put(this.baseUrl + '/edit/' + comment.commentId, comment, this.accountService.httpOptions);
  }

  deleteComment(commentId: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + commentId);
    // return this.http.delete(this.baseUrl + '/delete/' + commentId, this.accountService.httpOptions);
  }
}
