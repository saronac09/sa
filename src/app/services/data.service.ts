import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  userdetails:any={     
    1000:{acno:1000,username:'saron',password:1234,balance:0},
    2000:{acno:2000,username:'sayon',password:6789,balance:0},
    3000:{acno:1000,username:'amal',password:5624,balance:0}
  }
  register(acno:any,uname:any,psw:any){
    var userdetails=this.userdetails
    if(acno in userdetails){
      return false

    }
    else{
      userdetails[acno]={acno,username:uname,password:psw,balance:0}
      return true
    }

  }
  login(acno:any,psw:any){
    
    var userdetails=this.userdetails
    if(acno in userdetails){
      if(psw == userdetails[acno]["password"]){
        return true

      }
      else{
        return false

      }

    }
    else{
      return false
    }
  }
deposit(acno:any,password:any,amount:any){
  var userdetails=this.userdetails
  var amnt=parseInt(amount)
  if (acno in userdetails){
    if(password==userdetails[acno]["password"]){
      userdetails[acno]["balance"]+=amnt
      return userdetails[acno]["balance"]

    }
    else{
      return false
    }
  }
    else{
      return false
    }

  }

  withdraw(acno:any,password:any,amount:any){
    var userdetails=this.userdetails
    var amnt=parseInt(amount)
    if (acno in userdetails){
      if(password==userdetails[acno]["password"]){
        if(amnt<=userdetails[acno]['balance']){
          userdetails[acno]["balance"]-=amnt
          return userdetails[acno]['balance']


        }
        else{
          alert('insufficient balance')
          return false
        }
      }
      else{
        alert('incorrect password')
        return false

      }
    }
    else{
      alert('incorrect ac no')
      return false
    }

  }

}


