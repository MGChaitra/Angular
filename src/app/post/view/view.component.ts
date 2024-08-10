import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './view.component.html',
 
})
export class ViewComponent implements OnInit{

  id:number=0;
  post:Post={} as Post;
 
  /**
   *
   */
  constructor(private service : PostService, private router: Router, private route : ActivatedRoute) {
   
   
  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.find(this.id).subscribe(res=>{
      this.post = res as Post;
    })
  }
  onSubmit(){
    
  }

}
