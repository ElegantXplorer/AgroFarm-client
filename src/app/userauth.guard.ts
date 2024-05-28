import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const userauthGuard: CanActivateFn = (route, state) => {

  let access = localStorage.getItem('user');
  if(access=='USER'){
  return true;
  }
  inject(Router).navigate(['']);
  return false;
};
