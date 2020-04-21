import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecursoService } from 'src/app/core/services/recurso.service';
import { RecursoModel } from 'src/app/core/models/recurso.model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-resource-class-widget',
  templateUrl: './resource-class-widget.component.html',
  styleUrls: ['./resource-class-widget.component.scss']
})
export class ResourceClassWidgetComponent implements OnInit {

  @Input()
  aulaId: number;

  @Input()
  recursos: RecursoModel[];

  @Output()
  hasRecurso: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private recursoService: RecursoService) { }

  ngOnInit(): void {
    this.findAllById();

  }

  findAllById() {
    this.recursoService.findAllByAulaId(this.aulaId).subscribe((recursos: RecursoModel[]) => {
      this.recursos = recursos;
      console.log(this.recursos);
      this.emit();
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });
  }

  emit() {
    this.hasRecurso.emit(this.recursos.length > 0);
  }

  download(recurso: RecursoModel) {
    console.log(recurso);
  }
}
