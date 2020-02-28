import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Users } from '../users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login(user: Users){

  }

  register(user: Users){
    return this.afa.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    
  }

  getAuth(){
    return this.afa.auth;
  }
}
