import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-select-user-role',
  templateUrl: './select-user-role.component.html',
  styleUrls: ['./select-user-role.component.scss']
})
export class SelectUserRoleComponent implements OnInit {

  constructor(private btnSheetRef: MatBottomSheetRef<SelectUserRoleComponent>) { }

  ngOnInit(): void {
  }

  openLink(event): void {
    const currentTarget = event.currentTarget;
    this.btnSheetRef.dismiss(currentTarget.attributes.value.value);
    event.preventDefault();
  }

}
