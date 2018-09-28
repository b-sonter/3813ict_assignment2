import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelsComponent } from './channels/channels.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
