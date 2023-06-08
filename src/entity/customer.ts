/**
  Entidade Anêmica de Cliente pois nao tem regras de negocio
  DTO - Data Transfer Object
  ORM - Object Relational Mapping (Database)

@note Complexidade de negocio (resolvendo as regras do negocio)
Domain
- Entity
customer. ts (regra de negocio)
sem relacao com database
sem get e sets

@note Complexidade acidental - Resolvendo como vai armazenar os dados
infra - Mundo externo
- Entity / Model
- customer-ts (get, set)
*/

export class Customer {
  _id: string;
  _name: string;
  _address: string;
  _active: boolean = false;

  constructor(id: string, name: string, address: string) {
    this._id = id;
    this._name = name;
    this._address = address;
    this.validate();
  }

  validate() {
    if(this._name.length === 0) {
      throw new Error('Name is required');
    }
    if(this._id.length === 0) {
      throw new Error('Id is required');
    }
  }
  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  activate() {
    if(this._address.length === 0) {
      throw new Error('Address is required');
    }else {
      this._active = true;
    }
  }

  deactivate() {
    this._active = false;
  }
  
}