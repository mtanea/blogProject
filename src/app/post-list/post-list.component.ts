import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() postTitle : string;
  @Input() postContent : string;
  @Input() loveIts : number;
  @Input() created_at : Date;


  onLike() {
    this.loveIts++;
  }
  onNotLike() {
    this.loveIts--;
  }
  constructor() { }

  ngOnInit() {
  }

}
