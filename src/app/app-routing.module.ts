import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'beverage-list',
    loadChildren: () => import('./beverage-list/beverage-list.module').then( m => m.BeverageListPageModule)
  },
  {
    path: 'beverage-cart',
    loadChildren: () => import('./beverage-cart/beverage-cart.module').then( m => m.BeverageCartPageModule)
  },
  {
    path: 'beverage-info',
    loadChildren: () => import('./beverage-info/beverage-info.module').then( m => m.BeverageInfoPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'adduserdetails',
    loadChildren: () => import('./adduserdetails/adduserdetails.module').then( m => m.AdduserdetailsPageModule)
  },
  {
    path: 'updateuserdetails',
    loadChildren: () => import('./updateuserdetails/updateuserdetails.module').then( m => m.UpdateuserdetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
