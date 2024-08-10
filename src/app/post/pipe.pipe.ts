import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post';

@Pipe({
    name: 'post',
  standalone: true
})

  export class PostPipe implements PipeTransform {
 
    transform(input: Post[], ...args: string[]): Post[] {
      const searchCriteria = args[0];
      return input.filter(post => post.stockName.includes(searchCriteria));
    }
   
  }