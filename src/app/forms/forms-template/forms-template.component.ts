import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forms-template',
  templateUrl: './forms-template.component.html',
  styleUrls: ['./forms-template.component.css']
})
export class FormsTemplateComponent implements OnInit {

  person: any = {
    name: null,
    email: null,
    cep: null,
    num: null,
    complement: null,
    street: null,
    district: null,
    city: null,
    state: null
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    alert('Provide the Brazilian zip code and the address will be automatically completed.');
  }

  onSubmit(f) {
    console.log(f);
    console.log(f.value);
    console.log(this.person);
  }

  checkValidTouched(field) {
    return !field.valid && field.touched;
  }

  setErrorCSS(field) {
    return {
      'has-error': this.checkValidTouched(field)
    };
  }

  SearchCep(cep, f) {
    const _cep = cep.replace(/\D/g, '');
    const validacep = /^[0-9]{8}$/;
    if (validacep.test(_cep)) {
      this.http.get(`//viacep.com.br/ws/${_cep}/json`).subscribe((response) => this.FillFormsAddress(f, response));
    }
  }

  FillFormsAddress(f, address) {
    f.form.patchValue({
      address: {
        street: address.logradouro,
        cep: address.cep,
        num: '',
        complement: address.complemento,
        district: address.bairro,
        city: address.localidade,
        state: address.uf
      }
    });
  }
}
