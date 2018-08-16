import { Component, OnInit } from '@angular/core';

import { TagService } from './todos/tag/tag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  tags: any[] = []; 
  
  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    
      console.log("ngOnInit");
      this.tagService.listTags()
      .subscribe(tags => {
          console.log(tags);
          this.tags = tags;
      },
          err => {
        console.log("Error occured.");
      }
      );
  }
}
