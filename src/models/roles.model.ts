import {Entity, model, property, hasMany} from '@loopback/repository';
import {Users} from './users.model';

@model()
export class Roles extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  roleName: string;

  @property({
    type: 'date',
    required: true,
  })
  createdOn: string;

  @hasMany(() => Users)
  users: Users[];

  constructor(data?: Partial<Roles>) {
    super(data);
  }
}

export interface RolesRelations {
  // describe navigational properties here
}

export type RolesWithRelations = Roles & RolesRelations;
