import {NgModule} from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {HelpComponent} from "./help/help.component";
import {PageNotFoundComponent} from "./error/page-not-found/page-not-found.component";
import {SignUpComponent} from "./user/sign-up/sign-up.component";
import {SignInComponent} from "./user/sign-in/sign-in.component";

const routes: Routes = [
  {
    path: '' ,
    component: HomeComponent
  } ,
  {
    path: 'home' ,
    redirectTo: '' ,
    pathMatch: 'full'
  } ,
  {
    path: 'about' ,
    component: AboutComponent
  } ,
  {
    path: 'help' ,
    component: HelpComponent
  } ,
  {path: 'sign-in' , component: SignInComponent} ,
  {path: 'sign-up' , component: SignUpComponent},
  {
    path: '**' ,
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [RouterModule]
})
export class AppRoutingModule {
}
