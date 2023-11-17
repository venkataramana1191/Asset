import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewspageComponent } from './newspage/newspage.component';



  const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'dash-board', component: AppComponent },
    { path: 'contact', component: AppComponent },
    {path : 'news', component:NewspageComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
 
