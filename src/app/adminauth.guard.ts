import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminauthGuard: CanActivateFn = (route, state) => {
  let access = localStorage.getItem('user');
  if(access==='ADMIN'){
  return true;
  }
  inject(Router).navigate(['']);
  return false;
};