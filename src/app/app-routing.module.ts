import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrushComponent} from './componentes/crush/crush.component';
import {ConfigComponent} from './componentes/config/config.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/config',
    pathMatch:'full'
  },{
  path: 'config',
  component: ConfigComponent
},
{
path: 'crush/:genero/:url/:mensaje',
component: CrushComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
