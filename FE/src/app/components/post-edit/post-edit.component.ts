import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/Post';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  post: Post;
  id: number;

  formEdit = new FormGroup({
    id: new FormControl(''),
    ask: new FormControl(''),
    answer: new FormControl(''),
    postTime: new FormControl(''),
    contentAnswer: new FormControl(''),
    status: new FormControl(''),
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    postType: new FormControl('', [Validators.required]),
  });

  constructor(
    private postService: PostService,
    public router: Router,
    public activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      this.id = data.id;
      this.postService.getPostById(data.id).subscribe(data1 => {
        this.formEdit.patchValue(data1);
      });
    });
  }

  editPost() {
    this.postService.editPost(this.formEdit.value).subscribe(data => {
      this.router.navigateByUrl('post-list');
    });
  }
}
