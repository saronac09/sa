import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  // aim="hai saron"
  data="A/C no"
  acno=''
  psw=''
  userdetails:any={     
    1000:{acno:1000,username:'saron',password:1234,balance:0},
    2000:{acno:2000,username:'sayon',password:6789,balance:0},
    3000:{acno:1000,username:'amal',password:5624,balance:0}
  }
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    
    var acno=this.acno
    var psw=this.psw
    var userdetails=this.userdetails
    const result=this.ds.login(acno,psw)
    if(result){
      alert('login successfully')
      this.router.navigateByUrl('dashboard')

    }
    else{
      alert('incorrect username or password')
    }


  // login(a:any,b:any){
  //   this.acno=a.value
  //   this.psw=b.value 
    
  //   var acno=this.acno
  //   var psw=this.psw
  //   var userdetails=this.userdetails
  //   if(acno in userdetails){
  //     if(psw == userdetails[acno]["password"]){
  //       alert("login successfully")

  //     }
  //     else{
  //       alert("incoorect password")
  //     }

  //   }
  //   else{
  //     alert("incorrect acno")
  //   }
  // }

  // acnochange(event:any){
  //   // console.log(event.target.value);
  //   this.acno=event.target.value
    

  // }
  // pswchange(event:any){

  //   this.psw=event.target.value

  // }
}
}
