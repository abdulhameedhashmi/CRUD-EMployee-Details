import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor(private http:HttpClient) { }

empdata(){
  return this.http.get("http://localhost:4110/Students")
          }

          
saveemp(formdata:any){
  return this.http.post('http://localhost:4110/createstd',formdata)
}
onDeluser(id:any){
  return this.http.delete(`http://localhost:4110/deluser/${id}`)
}
onUpdate(id:any,formdata:any)
{
  return this.http.put(`http://localhost:4110/edituser/${id}`,formdata)
}
}