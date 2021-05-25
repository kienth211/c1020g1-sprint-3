import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  formCreate = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    postType: new FormControl('', [Validators.required]),
  });

  constructor(
    public postService: PostService,
    public router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  createPostComponent() {
    this.postService.createPost(this.formCreate.value).subscribe(data => {
      this.router.navigateByUrl('');
    });
  }
}
