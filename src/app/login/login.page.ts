import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  new_user_form:FormGroup
  db = firebase.firestore()
  current_user : any = []

  constructor(private router:Router,
    public formBuilder:FormBuilder) { }

  ngOnInit() {
    this.new_user_form = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  signUp() {
    this.router.navigate(['/signup'])
  }
  
  login(user) {
    let self = this
    let email = user.email
    let password = user.password
    let newUser:string = "false"
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      //catches errors from login method
      let errorCode = error.code
      let errorMessage = error.message
      console.log("Error code: ", errorCode)
      console.log("Error message: ", errorMessage)
      //pushes alerts to user based on error
      if(errorCode === "auth/wrong-password") {
        alert("Wrong password.")
      } else if(errorCode === "auth/user-not-found") {
        alert("User does not exist or wrong email.")
      }
      console.log(error)
    }
    ).then(function(result) {
      let user = firebase.auth().currentUser
      self.db.collection("users").where("uid", "==", user.uid).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(doc.id, "=>", doc.data())
          let firstName = doc.data().firstName
          //this.newUser = doc.data().new
          console.log("First Name:", firstName)
          
        })
      }).catch(function(error) {
        console.log("Error getting documents: ", error)
        alert("Login failed, try again.")
      })
      //need to remove new tag from user account after first log in
      /*
      if(newUser == "true") {
        console.log("New User, must fill in details")
        alert("Please fill out the user details")
        this.router.navigate(['adduserdetails'])
      
      }
      */
      console.log("Login successful")
      alert("Login successful")
      self.router.navigate(['/home'])
    })
  }
  
  loginGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')
    firebase.auth().signInWithPopup(provider).then(function(result) {
      let token = result.credential.providerId
      let user = result.user
      this.router.navigate(['/home'])
    })
  }
}
