import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Offers } from 'src/app/offers';
import { RegistrationService } from 'src/app/registration.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-updateoffers',
  templateUrl: './updateoffers.component.html',
  styleUrls: ['./updateoffers.component.css']
})
export class UpdateoffersComponent implements OnInit {
  mes:string;
  use=new Offers;
  offers=new Offers;
  stuent;
  id:number;
  id1:number;
 id2:number;
  msg="";
  constructor(private _service:RegistrationService,private _data:DataService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id= this._activatedRoute.snapshot.paramMap.get('id');
    this.mes=id;

    this.stuent=new FormGroup({
     
      email:new FormControl("",Validators.compose(
        [
          Validators.required,
          // Validators.pattern('^[a-zA-Z0-9_]+@gmail+.com+$')
        ]
      )),
      password:new FormControl("",Validators.compose(
        [
          Validators.required,
          // Validators.minLength(2),
          // Validators.maxLength(10)
         
        ]
      )),
      id:new FormControl("",Validators.compose(
        [
          Validators.required
          // Validators.pattern("^[0-9]{6}$")
        ]
      )),
      firstName:new FormControl("",Validators.compose(
        [
          Validators.required,
          // Validators.minLength(2),
          // Validators.maxLength(10),
          // Validators.pattern('^[a-zA-Z]+$')
        ]
      )),
      lastName:new FormControl("",Validators.compose(
        [
          Validators.required,
          // Validators.minLength(2),
          // Validators.maxLength(10),
          // Validators.pattern('^[a-zA-Z]+$')
         
        ]
      )),
      PhoneNo:new FormControl("",Validators.compose(
        [
          Validators.required,
          
          // Validators.pattern("^[0-9]{10}$")
         
        ]
      )),
     
      city:new FormControl("",Validators.compose(
        [
          Validators.required,
          // Validators.pattern('^[a-zA-Z]+$')
         
        ]
      )),
      // pincode:new FormControl("",Validators.compose(
      //   [
      //     Validators.required,
      //     // Validators.pattern("^[0-9]{6}$")
      //   ]
      // ))
    })
  }
  upOffer(obj){
    console.log("ReactiveForms Module");
    console.log(obj);
    this._service.updateOfferFromRemote(this.id1,this.offers).subscribe(
      data=>{console.log("response received");
    this.msg="Updated Successfully";
    },
      error=>{console.log("exception occured");
      this.msg="some error occured";},
    )
    }
    gotooffers(){
      this._router.navigate(['/offers'])
    }
    gotouserdata(){
      this._router.navigate(['/userdata'])
    }
    gotomodify(){
      this._router.navigate(['/updateprofile',this.mes])
    }
    gotoview(){
      this._router.navigate(['/viewuser',this.mes])
    }
    gotomain(){
      this._router.navigate(['/main'])
    }
    gotochat(){
      this._router.navigate(['/chat'])
    }

    
    
}
