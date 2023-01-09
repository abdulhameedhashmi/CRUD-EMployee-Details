import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpserviceService } from '../empservice.service';


@Component({
  selector: 'app-upemp',
  templateUrl: './upemp.component.html',
  styleUrls: ['./upemp.component.css']
})
export class UpempComponent implements OnInit {

  constructor(private empser:EmpserviceService, private acr:ActivatedRoute) { }

  ngOnInit(): void {
  
  this.acr.params.subscribe(
    (data)=>{this.curr_id=data['id']}
  )
}

curr_id:any

newempReg=new FormGroup({
  stnm:new FormControl(''),
  dept:new FormControl(''),
  location:new FormControl(''),
  email:new FormControl(''),
  contact:new FormControl(''),
  cgpa:new FormControl('')
})
upemp(){
console.log(this.newempReg.value);
this.empser.onUpdate(this.curr_id,this.newempReg.value).subscribe(
  (info)=>{console.log(info)}
)}
}
