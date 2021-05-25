import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-delete-modal',
  templateUrl: './post-delete-modal.component.html',
  styleUrls: ['./post-delete-modal.component.css']
})
export class PostDeleteModalComponent implements OnInit {
  public id: number;

  constructor(public dialogRef: MatDialogRef<PostDeleteModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public  postService: PostService) {
  }

  ngOnInit(): void {
    this.id = this.data.data1.id;
    console.log(this.id);
  }

  deletePost() {
    console.log('test');
    this.postService.deletePost(this.id).subscribe(data => {
      this.dialogRef.close();
    });
  }
}
