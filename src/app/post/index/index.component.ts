import { Component, OnInit} from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditComponent } from '../edit/edit.component';
import { ViewComponent } from '../view/view.component';
import { FormsModule } from '@angular/forms';
import { PostPipe } from "../pipe.pipe";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule, ViewComponent, FormsModule, PostPipe, EditComponent],
  templateUrl: './index.component.html',
 
})
export class IndexComponent implements OnInit{
/*
todo:
Inject the required dependency
implement onInit interface
*/
place: string=""
posts: Post[]=[]
constructor(private service:PostService){

}
  ngOnInit(): void {
    this.service.getAll().subscribe((res: Post[])=>{
      this.posts=res;
    })
  }

  onDelete(id: number){
    const val=confirm("Do you really want to delete?");
    if(!val){
      return;
    }
    this.service.delete(id).subscribe(res=>{
      alert("record deleted successfully")
    });
  }
}
