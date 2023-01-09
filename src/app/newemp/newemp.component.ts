import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-newemp',
  templateUrl: './newemp.component.html',
  styleUrls: ['./newemp.component.css']
})
export class NewempComponent implements OnInit {

  constructor(private emp:EmpserviceService) { }

  ngOnInit(): void {
  }
  newempReg = new FormGroup({
    stnm:new FormControl(''),
    dept:new FormControl(''),
    location:new FormControl(''),
    email:new FormControl(''),
    contact:new FormControl(''),
    cgpa:new FormControl('')
  })
regemp(){
  console.log(this.newempReg.value);
  this.emp.saveemp(this.newempReg.value).subscribe(
    (info)=>{console.log(info)}
  )

}
}


