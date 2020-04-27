import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AulaFormConfigService {

  atividadeFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}



}
