import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifeCycleComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() initialValue = 10;
  @Input() deleteCicle = false;

  constructor() {
  }

  ngOnChanges() {
      console.log('ngOnChanges - Quando uma ou mais propriedades de entrada ligadas a dados forem alteradas.');
  }

  ngOnInit() {
      console.log('ngOnInit - Inicialize a diretiva/componente.');
  }

  ngDoCheck() {
      console.log('ngDoCheck - Detecte e aja de acordo com mudanças que o Angular não pode ou não detectará sozinho.');
  }

  ngAfterContentInit() {
      console.log('ngAfterContentInit - Depois que conteudo externo ao angular e exibido no componente.');
  }

  ngAfterContentChecked() {
      console.log('ngAfterContentChecked - Responda após Angular verificar o conteúdo projetado na diretiva / componente.');
  }

  ngAfterViewInit() {
      console.log('ngAfterViewInit - Após Angular inicializa as exibições do componente');
  }

  ngAfterViewChecked() {
      console.log('ngAfterViewChecked - Após Angular verificar as exibições do componente.');
  }

  ngOnDestroy() {
      console.log(`ngOnDestroy - Limpeza logo antes do Angular destruir a diretiva / componente.
      Cancelar assinatura Observáveis ​​e desanexar manipuladores de eventos para evitar vazamentos
      de memória.`);
  }
}
