import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {times} from "./times.model";

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.scss']
})
export class ClassFormComponent implements OnInit {

  aulaId: number;
  times = times;
  srcResult: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.aulaId = +params.get('aulaId');
    });
  }

  get isEditMode(): boolean {
    return this.aulaId !== undefined && this.aulaId !== null && this.aulaId !== 0;
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

}
