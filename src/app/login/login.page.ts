import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public router: Router, public menu: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menu.swipeGesture(false);
  }
  
  ionViewDidLeave(){
    this.menu.swipeGesture(true);
  }

  login(){
    this.router.navigate(['/menu/home']);
  }

}
