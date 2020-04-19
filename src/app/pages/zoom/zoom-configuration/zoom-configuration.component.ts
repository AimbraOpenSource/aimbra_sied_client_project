import { Component, OnInit } from '@angular/core';
import {ZAppConfigurationModel} from "../../../core/zoom-api/models/z-app-configuration.model";
import {ZoomConfigurationService} from "../../../core/zoom-api/services/zoom-configuration.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-zoom-configuration',
  templateUrl: './zoom-configuration.component.html',
  styleUrls: ['./zoom-configuration.component.scss']
})
export class ZoomConfigurationComponent implements OnInit {

  configuration: ZAppConfigurationModel;

  constructor(private configurationService: ZoomConfigurationService, private snack: MatSnackBar) {
    this.configuration = new ZAppConfigurationModel();
  }

  ngOnInit(): void {
    this.findById();
  }

  findById() {
    this.configurationService.findByUserLoggedIn().subscribe((conf: ZAppConfigurationModel) => {
      this.configuration = conf;
    }, (err: HttpErrorResponse) => {
      this.snack.open(err.error.message, 'Ok', {
        duration: 6000,
        verticalPosition: 'top'
      });
    });
  }

  save() {
    this.configurationService.save(this.configuration).subscribe((conf: ZAppConfigurationModel) => {
      this.configuration = conf;
      this.snack.open('Sucesso ao cadastrar', 'Ok', {
        duration: 6000,
        verticalPosition: 'top'
      })
    }, (err: HttpErrorResponse) => {
      this.snack.open(err.error.message, 'Ok', {
        duration: 6000,
        verticalPosition: 'top'
      });
    })
  }

}
