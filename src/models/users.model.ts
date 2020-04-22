import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Customers} from './customers.model';
import {Roles} from './roles.model';

@model()
export class Users extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      pattern: '^[A-z]{1,10}$'
    }
  })
  firstName: string;

  @property({
    type: 'string',
  })
  middleName?: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      pattern: '^[A-z]{1,10}$'
    }
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
    format: 'email',
  })
  email: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      pattern: '^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$'
    }
  })
  phone: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'date',
  })
  createdOn?: string;

  @property({
    type: 'date',
  })
  modifiedOn?: string;

  @belongsTo(() => Customers)
  customersId: number;

  @belongsTo(() => Roles)
  rolesId: number;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
