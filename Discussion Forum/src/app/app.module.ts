import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';    
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { UserService } from './services/user.service';
import { BlogService } from './services/blog.service';
import { CommentsService } from './services/comments.service';
import { AuthService } from './services/auth.service';
import { AddcommentsComponent } from './addcomments/addcomments.component';
import { HomeComponent } from './home/home.component';
import {RichTextEditorModule} from '@syncfusion/ej2-angular-richtexteditor';
import { AuthGuard } from './_guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    BloglistComponent,
    AddcommentsComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    UserlistComponent
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RichTextEditorModule
    , ReactiveFormsModule 
  ],
  
  providers: [UserService,BlogService,CommentsService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
