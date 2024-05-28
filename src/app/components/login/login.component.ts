
import { Component } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http'; 
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css'] 
}) 
export class LoginComponent { 
  user: User = new User();
  role:string = '';

  
  constructor(private userService: UserService, private router: Router, private snackBar: MatSnackBar) { }

  
  onSubmit(): void { 
    debugger;
    // console.log(this.userDetails);
    // this.userService.logIn({"user":{"email":this.user.emailId,"password": this.user.password}}).subscribe((data:any)=>{
      this.userService.logIn(this.user.emailId,this.user.password).subscribe((data:any)=>{
        this.user=data;
        console.log(data);
        localStorage.setItem('user',data.user.role);
        if (data.user.role ==='ADMIN'){
          localStorage.setItem('id',""+data.user.id);
          this.router.navigate(['/admin']);
        }
        else{
          localStorage.setItem('id',""+data.user.id);
          this.router.navigate(['/home']); 
        }
      },error => {
        // alert('Check your credentials once. If you are not registered, please register.');
        this.snackBar.open('Check your credentials once. If you are not registered, please register.', 'Close', {
          duration: 5000,
        });
      });
        

      
     
  }
}
