import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { CommonModule } from '@angular/common';
import { EmpViewComponent } from '../emp-view/emp-view.component';

@Component({
  selector: 'app-emp-list',
  standalone: true,
  imports: [CommonModule,EmpViewComponent],
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent implements OnInit{
  ngOnInit(): void {
   // constructor are used for di operation
   this.empList.push({empId:1, empName:"Chaitra", empAddress:"Gokarna", empSalary:3244, empImage:"Image1.jpg"});
   this.empList.push({empId:1, empName:"Chaitra", empAddress:"Gokarna", empSalary:3244, empImage:"Image2.jpg"});
   this.empList.push({empId:1, empName:"Chaitra", empAddress:"Gokarna", empSalary:3244, empImage:"Image3.png"});
   this.empList.push({empId:1, empName:"Chaitra", empAddress:"Gokarna", empSalary:3244, empImage:"Image4.png"});
   this.empList.push({empId:1, empName:"Chaitra", empAddress:"Gokarna", empSalary:3244, empImage:"Image1.jpg"});
   this.empList.push({empId:1, empName:"Chaitra", empAddress:"Gokarna", empSalary:3244, empImage:"Image2.jpg"});
  }

  onDataUpdated(modifiedData: Employee){ debugger
    const index= this.empList.findIndex(e=>e.empId==modifiedData.empId);
    if(index<0){
      alert("Not available to update");

    }else{
      this.empList.splice(index, 1, modifiedData)
    }
  }
  onDataDeleted(empId:Number){
    const index = this.empList.findIndex(e =>e.empId == empId);
    if(index < 0){
      alert("Not available to delete");
    }else{
      this.empList.splice(index, 1);
      alert("Employee deleted successfully")
    }
  }
  empList: Employee[]=[];
}
