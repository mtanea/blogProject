import { Post } from './../post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {
  constructor (private httpClient: HttpClient) {}

  //private posts : Post[];
  postSubject = new Subject<Post[]>();
   posts : Post[] = [
    //new Post('Mon premier post','my content2' )
   ];

  emitPosts() {
    this.postSubject.next(this.posts);
    //console.log('Emitted ! : ' + this.posts.slice());
  }

  savePosts() {
    this.httpClient
    .put('https://blogproject-f02c6.firebaseio.com/posts.json', this.posts)
    .subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  deletePost(index:number){
/*
    const indexToRemove = this.posts.findIndex(
      (elem) => {
        if(elem === post) {
          return true;
        }
      }
    ); */
    this.posts.splice(index, 1);
    this.savePosts();
    this.emitPosts();
  }

  getPosts() {
    this.httpClient
    .get<any[]>('https://blogproject-f02c6.firebaseio.com/posts.json')
    .subscribe(
      (response) => {
       // console.log('response from get method ! : ' + response);
       // if(response != null) {
          this.posts = response ? response : [];
          this.emitPosts();
        //}
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  createNewPost ( newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  lovePost(i:number) {
    this.posts[i].loveIts = this.posts[i].loveIts + 1;
    console.log('returned index '+ i + "number of loveits " + this.posts[i].loveIts);

    this.savePosts();
    this.emitPosts();

  }

  notlovePost(i:number) {
    this.posts[i].loveIts = this.posts[i].loveIts - 1;
    console.log('returned index '+ i + "number of loveits " + this.posts[i].loveIts);

    this.savePosts();
    this.emitPosts();

  }
}
