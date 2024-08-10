import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { ViewComponent } from './post/view/view.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { EmpListComponent } from './employee/emp-list/emp-list.component';

//Here we shall define the possible URls for our application and map rach URL eith the copnonent 
export const routes: Routes = [
    { path:"", redirectTo:'Post/index', pathMatch:'full'},
    { path:"Post/index", component:IndexComponent},
    { path:"Post/:id/view", component:ViewComponent},
    { path:"Post/create", component:CreateComponent},
    {path: "Post/:id/edit", component:EditComponent},
    {path: "EmployeeList", component:EmpListComponent}

];
