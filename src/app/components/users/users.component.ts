import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private shared: SharedService
  ) { }

  users: any[];

  ngOnInit(): void {
    this.shared.get('users').subscribe({
      next: ((response: any) => {
        this.users = response?.users; 
        console.log(this.users);
      })
    })
  }

  showDialog(id: String, isEditing: boolean){

  }

  delete(id: String){

  }

}