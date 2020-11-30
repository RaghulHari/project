import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';
import { Subject } from 'rxjs';
import { Services } from 'src/app/services';

@Component({
  selector: 'app-historyadd',
  templateUrl: './historyadd.component.html',
  styleUrls: ['./historyadd.component.css']
})
export class HistoryaddComponent implements OnInit {

  user=new User;
  use=new User;
  users=new User;
  id:number;
  id1:number;
  id2:number;
  em:String;
  msg="";
  mes="";
  servs=new Services;
  dtTrigger: Subject<any>= new Subject(); 
  constructor(private _service:RegistrationService,private _data:DataService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id= this._activatedRoute.snapshot.paramMap.get('id');
    this.mes=id;
    this.getUser();

    let resp = this._service.getServicesFromRemote();
    resp.subscribe((data)=>this.servs=data);
   this._service.getServicesFromRemote().subscribe(
     data=>{this.servs=data;
      console.log("response occured");
      this.dtTrigger.next();
    },
    error=>{console.log("exception occured");
    this.msg="some error occured";}
   )
  }
  gotomain(){
    this._router.navigate(['/main'])
  }
  getUser(){
    this._service.getByIdFromRemote(this.mes).subscribe(
      data=>this.use=data
    )
  }
  gotofaqs(){
    this._router.navigate(['/faqs',this.mes])
  }
  gotoviewplan(plid:string){
    this._router.navigate(['/viewplan',plid])
  }
  gotorecharge()
      {
        this._router.navigate(['/recharge',this.mes])
      }
  getAll(){
    let resp = this._service.getUsersFromRemote();
resp.subscribe((data)=>this.users=data);        
  }
upprof(){
  this._router.navigate(['/forget',this.mes])
}
  gotomodify(){
    this._router.navigate(['/updateprofile',this.mes])
  }
  gotoview(){
    this._router.navigate(['/viewuser',this.mes])
  }
  gotoserv(id:string){
    this._router.navigate(['/serv',id])
  }
  gotomanage(mail:string){
    this._router.navigate(['/manage',mail])
  }
  gotoaddon(){
    this._router.navigate(['/addon',this.mes])
  }
  gotohistory(pli:string){
    this._router.navigate(['/history',pli])
  }
}
