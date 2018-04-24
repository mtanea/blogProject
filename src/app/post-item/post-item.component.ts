import { Post } from './../post.model';
import { PostService } from './../services/post.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() postTitle : string;
  @Input() postContent : string;
  @Input() loveIts : number;
  @Input() created_at : Date;
  @Input() index : number;
  constructor(private postService : PostService) { }




  ngOnInit() {
  }

  onDelete() {
    this.postService.deletePost(this.index);
  }

  onLike() {
    this.postService.lovePost(this.index);
  }

  onNotLike() {
    this.postService.notlovePost(this.index);
  }
}
