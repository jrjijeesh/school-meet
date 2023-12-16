import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './layout/container/container.component';
import { UserLoginComponent } from './user-access/user-login/user-login.component';
import { UserSignupComponent } from './user-access/user-signup/user-signup.component';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'signup', component: UserSignupComponent },
  {
    path: 'app',
    component: ContainerComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () =>
          import('./feature/profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
