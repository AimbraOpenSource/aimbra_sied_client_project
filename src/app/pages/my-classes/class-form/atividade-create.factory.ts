import { FormControl, Validators } from '@angular/forms';

export abstract class AtividadeCreateFactory {

  static getBody(): any {
    return {
      infoGroup: {
        titulo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(128)]),
        urlVideoGravado: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(1024)]),
        descricao: new FormControl('', [Validators.required, Validators.minLength(50), Validators.maxLength(10000)]),
        observacao: new FormControl('', [Validators.minLength(50), Validators.maxLength(10000)])
      },
      exercicioGroup: {
        titulo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]),
        descricao: new FormControl('', [Validators.required, Validators.minLength(40), Validators.maxLength(10000)]),
        alunoFazUpload: new FormControl('', [Validators.required]),
        respostaTemTexto: new FormControl('', [Validators.required])
      },
      zoomGroup: {
        temAulaAoVivo: new FormControl('', [Validators.required]),
        dataHoraInicio: new FormControl('', [Validators.required]),
        horario: new FormControl('', [Validators.required]),
        topico: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(64)]),
      },
      disqusGroup: {
        temDiscusao: new FormControl('', [Validators.required])
      },
      scheduleGroup: {
        liberadoEm: new FormControl(''),
        temAgendamento: new FormControl(''),
      }
    };
  }


}
