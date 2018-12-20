import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service'

export class MonUser{
 email:string;
 nom:string;
 mot_de_passe:string;
 confirmPassword:string;
 confirmMail:string;
}

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {
  monUser: MonUser;

  constructor(private _servUser: UsersService, private routerCol : Router) { }

  submit(){
    this._servUser.ajouterUnUser(this.monUser.email,this.monUser.nom,this.monUser.mot_de_passe)
  }
  ngOnInit() {
  }

}
