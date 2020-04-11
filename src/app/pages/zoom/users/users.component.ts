import { Component, OnInit, ViewChild } from '@angular/core';
import { ZuserService } from './zuser.service';
import { ZUserModel } from 'src/app/core/zoom-api/models/z-user.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email'];

  zUsers: any;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private zUserService: ZuserService) { }

  ngOnInit(): void {
    this.zUserService.findAll().subscribe((resp: ZUserModel[]) => {
      this.zUsers = new MatTableDataSource(resp);
      this.zUsers.sort = this.sort;
      console.log(this.zUsers);
    });
  }

  onRowClick(event) {
    console.log(event);
  }

}
