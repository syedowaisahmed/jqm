import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { PortalsComponent } from './portals/portals.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: MemberDashboardComponent,
      },
      {
        path: 'portals',
        component: PortalsComponent
      },
      {
        path: 'books',
        component: MyBooksComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
