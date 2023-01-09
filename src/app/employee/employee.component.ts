import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empser:EmpserviceService,private route:Router) { }

  ngOnInit(): void {
    this.getemp()
  }
  emp:any
  getemp(){

    this.empser.empdata().subscribe(
      (data)=>{
        console.log(data)
        this.emp = data
      })
  }
  delus(id:any){
    this.empser.onDeluser(id).subscribe(
      (msg)=>{console.log(msg)}
    )
  }
  update(id:any){
    this.route.navigate(['/upemp',id])
  }

}
