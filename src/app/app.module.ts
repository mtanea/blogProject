import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { NewPostFormComponent } from './new-post-form/new-post-form.component';
import { NavigBarComponent } from './navig-bar/navig-bar.component';

import {Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: 'posts', component:PostListComponent},
  {path: 'new', component: NewPostFormComponent},
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }

];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostItemComponent,
    NewPostFormComponent,
    NavigBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
