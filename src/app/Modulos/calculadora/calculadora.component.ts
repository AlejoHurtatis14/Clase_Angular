import { Component, OnInit } from '@angular/core';
import { RxFormGroup, RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  formCalculator: RxFormGroup;
  resultOperation: number;
  arrayOperations: Array<Object> = [{
    value: 1, viewValue: 'Suma'
  }, {
    value: 2, viewValue: 'Resta'
  }, {
    value: 3, viewValue: 'Multiplicacion'
  }, {
    value: 4, viewValue: 'Division'
  }];

  constructor(private formBuilder: RxFormBuilder) { }

  ngOnInit(): void {
    this.configForm();
  }

  configForm() {
    this.formCalculator = <RxFormGroup>this.formBuilder.group({
      operacion: ['', RxwebValidators.required()],
      numeroUno: ['', RxwebValidators.required()],
      numeroDos: ['', RxwebValidators.required()]
    });
  }

  executeOperation() {
    if (this.formCalculator.valid) {
      const numUno: number = this.formCalculator.get('numeroUno').value;
      const numDos: number = this.formCalculator.get('numeroDos').value;
      const opcion: number = this.formCalculator.get('operacion').value;
      switch (opcion) {
        case 1:
          this.resultOperation = numUno + numDos;
          break;
        case 2:
          this.resultOperation = numUno - numDos;
          break;
        case 3:
          this.resultOperation = numUno * numDos;
          break;
        case 4:
          this.resultOperation = numUno / numDos;
          break;
      }
    }
  }

  clearForm() {
    this.formCalculator.reset();
  }

}
