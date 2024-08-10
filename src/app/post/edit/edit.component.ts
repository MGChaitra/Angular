import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Post } from '../post';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  id: number =0;
  post : Post={} as Post;
constructor(private service: PostService, private route: ActivatedRoute, private router: Router){
  
}
  ngOnInit(): void {
   this.id=this.route.snapshot.params['id'];
   this.service.find(this.id).subscribe(res=>{
    this.post=res as Post;
  })
  }

  onSubmit(){
    this.service.update(this.id, this.post).subscribe(res=>{
      alert("Post is Updated");
      this.router.navigateByUrl('Post/index');
    })
  }
}
