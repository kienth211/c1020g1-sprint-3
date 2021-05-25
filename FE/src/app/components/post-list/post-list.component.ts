import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/Post';
import {MatDialog} from '@angular/material/dialog';
import {PostDeleteModalComponent} from '../post-delete-modal/post-delete-modal.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public posts: Post[];
  public name: string;

  constructor(private postService: PostService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  openDialog(id) {
    this.postService.getPostById(id).subscribe(post => {
      const dialogRef = this.dialog.open(PostDeleteModalComponent, {
        width: '500px',
        disableClose: true,
        data: {data1: post}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }
}
