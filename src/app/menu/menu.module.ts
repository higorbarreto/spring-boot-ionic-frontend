import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'login',
        loadChildren: '../login/login.module#LoginPageModule'
      },
      {
        path: 'register',
        loadChildren: '../register/register.module#RegisterPageModule'
      },
      {
        path: 'categorias',
        loadChildren: '../categorias/categorias.module#CategoriasPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/login'
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})

export class MenuPageModule { }
