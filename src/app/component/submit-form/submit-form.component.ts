import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../../reusableComponent/alert/alert.component';
import { MyButtonComponent } from '../../reusableComponent/my-button/my-button.component';
 
@Component({
  selector: 'app-submit-form',
  standalone: true,
  imports: [FormsModule,JsonPipe,AlertComponent,MyButtonComponent],
  templateUrl: './submit-form.component.html',
  styleUrl: './submit-form.component.css'
})
export class SubmitFormComponent implements OnInit{

  deptObj: any = {

    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  };
  deptList:any[]=[];
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getDepartment();
  }
  onSave(){
    this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/AddNewDepartment",this.deptObj).subscribe((res:any)=>{

      if(res.result){
        alert("Department created Successfully!");
        this.getDepartment();
      } else{
        alert(res.message)
      }
    })
  }

  getDepartment(){
    this.http.get("https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment").subscribe((res:any)=>{
      this.deptList=res.data ;
    })
  }

  onEdit(data:any){
    this.deptObj=data;
  }

  onUpdate(){

    this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/UpdateDepartment",this.deptObj).subscribe((res:any)=>{

      if(res.result){
        alert("Department Updated Successfully!");
        this.getDepartment();
      } else{
        alert(res.message)
      }
    })

  }

  onDelete(id:number){
    const isDelete =confirm("Are you sure want to delete?");

    if(isDelete){
      this.http.delete("https://projectapi.gerasim.in/api/EmployeeManagement/DeletedepartmentBydepartmentId?departmentId=" + id).subscribe((res:any)=>{

        if(res.result){
          alert("Department Deleted Successfully!");
          this.getDepartment();
        } else{
          alert(res.message)
        }
      })

    }
   

  }
  getData(daata: any) {
    debugger;
  }

}
