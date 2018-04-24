import { PostService } from './../services/post.service';
import { Post } from './../post.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.css']
})

export class NewPostFormComponent implements OnInit {
//titre, contenu creation + ajout du post au service , redirection vers liste

  postForm: FormGroup;

  constructor(private postService : PostService,
              private formBuilder : FormBuilder,
              private router : Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['',Validators.required],
      content:['',Validators.required]
    });
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const newPost = new Post(title, content);
    this.postService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
