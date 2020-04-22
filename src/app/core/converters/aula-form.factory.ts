import { AulaFormModel } from 'src/app/pages/my-classes/class-form/aula-form.model';

export abstract class AulaFormFactory {
  static create(): AulaFormModel {
    return new AulaFormModel();
  }
}
