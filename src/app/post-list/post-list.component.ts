import { Router } from '@angular/router';
import { PostService } from './../services/post.service';
import { Post } from './../post.model';
import { PostItemComponent } from './../post-item/post-item.component';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostService,
               private router: Router) {}

  ngOnInit (){
    this.postsSubscription = this.postsService.postSubject.subscribe(
      (posts:Post[]) => {
        this.posts = posts;
      }
    );

    //emitPosts already called in getPosts ?
    // this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  onFetch() {

    this.postsService.getPosts();
}
  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }


}
