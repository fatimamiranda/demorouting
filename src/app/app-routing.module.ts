import { NgModule } from '@angular/core';
//Tenemos que importar el objeto Routes
import { Routes, RouterModule } from '@angular/router';

import { Compo1Component } from './components/compo1/compo1.component';
import { Compo2Component } from './components/compo2/compo2.component';
import { Compo3Component } from './components/compo3/compo3.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
    {path:'' , redirectTo: 'home', pathMatch:'full'},
    {path:'home' , component: HomeComponent},
    {path:'compo1' , component: Compo1Component},
    {path:'compo2' , component: Compo2Component},
    {path:'compo3' , component: Compo3Component},
    {path:'footer' , component: FooterComponent},
    {path:'**' , component: HomeComponent}

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) //"importo" y configuro este modulo 
  ],
  exports: [
    RouterModule //"ofrezco" este modulo al modulo principal
  ]
})
export class AppRoutingModule { }
