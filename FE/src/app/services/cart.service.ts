import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';
// import {AuctionSubmit} from '../../model/auction-bidding.model';
// import {TokenStorageService} from '../authentication/token-storage';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public API_POST = 'http://localhost:8080/api/post';
  public API_USER = 'http://localhost:8080/api/user';
  public httpOptions: any;
  user: User;

  constructor(public http: HttpClient) {
  }

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

  public getUser() {
    return this.user;
  }

  public createUser() {
    this.user = new User(1, 'kien');
    console.log(this.user);
    if ( typeof(Storage) !== 'undefined') {
      // Khởi tạo sesionStorage
      sessionStorage.setItem('name', 'Ted Mosby');
      // get sessionStorage
      sessionStorage.getItem('name');
      console.log(sessionStorage);
      // lấy ra số lượng session đã lưu trữ
      // sessionStorage.length;
      // xóa 1 item localStorage
      // sessionStorage.removeItem('name');
      // xóa tất cả item trong sessionStorage
      // sessionStorage.clear();
    } else {
      alert('Trình duyệt của bạn không hỗ trợ!');
    }
  }
}
