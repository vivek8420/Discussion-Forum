import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent} from './footer/footer.component';
import { HeaderComponent} from './header/header.component';
import { LoginComponent} from './login/login.component';
import { AddcommentsComponent} from './addcomments/addcomments.component';
import { BloglistComponent} from './bloglist/bloglist.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
{path:'footer', component:FooterComponent},
{path:'header', component:HeaderComponent},
{path:'login', component:LoginComponent},
{path:'addcomments/:id', component:AddcommentsComponent},
{path:'bloglist',component:BloglistComponent},
{path:'home',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'profile/:id',component:ProfileComponent},
{path:'userlist',component:UserlistComponent},
{path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
