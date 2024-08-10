import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { Employee } from '../models/employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp-view',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emp-view.component.html',

})
export class EmpViewComponent {
   @Input() empObj={} as Employee;
   @Output() onUpdate: EventEmitter<Employee>=new EventEmitter<Employee>();
  @Output() onDelete: EventEmitter<Number>=new EventEmitter<Number>();

   onUpdateClick(){
    alert(JSON.stringify(this.empObj));
    this.onUpdate.emit(this.empObj)
   }
   
   onDeleteClick(){
    this.onDelete.emit(this.empObj.empId);
   }
}
