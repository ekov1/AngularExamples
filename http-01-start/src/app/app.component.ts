import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
        console.log('loadedPosts : ');
        console.log(this.loadedPosts);
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.http.post<{ [key: string]: Post }>('https://ng-db-820c9-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http.get('https://ng-db-820c9-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
      .pipe(map((responseData: { [key: string]: Post }) => {
    //this.http.get<{ [key: string]: Post }>('https://ng-db-820c9-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
      //.pipe(map(responseData => {
        console.log('get responseData before pipe : ' + responseData);
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      }))
      .subscribe(posts => {
        console.log(posts);
        console.log(posts[0].content)
        this.loadedPosts = posts;
        console.log('loadedPosts : ');
        console.log(this.loadedPosts);
      });
  }
}