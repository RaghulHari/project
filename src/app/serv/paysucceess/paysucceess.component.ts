import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Offers } from 'src/app/offers';
import { RegistrationService } from 'src/app/registration.service';
import { Services } from 'src/app/services';
import { User } from 'src/app/user';

@Component({
  selector: 'app-paysucceess',
  templateUrl: './paysucceess.component.html',
  styleUrls: ['./paysucceess.component.css']
})
export class PaysucceessComponent implements OnInit {
  plan:string;
  planid:string;
  use=new User;
  pla = new Offers;
  services= new Services;
  msg="";
  mail:string;
  constructor(private _service:RegistrationService,private _data:DataService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id= this._activatedRoute.snapshot.paramMap.get('id');
    this.plan=id;
    let id1= this._activatedRoute.snapshot.paramMap.get('em');
    this.mail=id1;
    this._service.getByIdFromRemote(this.mail).subscribe(
      data=>this.use=data)
    this._service.getByOfferIdFromRemote(this.plan).subscribe(
      
      data=>{
        this.pla=data
        console.log("plans response received");
      
      },
        error=>{console.log("exception occured");
        this.msg="some error occured";},
      
    )
  }

}
