import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customers, CustomersRelations, Users} from '../models';
import {PostgresDbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UsersRepository} from './users.repository';

export class CustomersRepository extends DefaultCrudRepository<
  Customers,
  typeof Customers.prototype.id,
  CustomersRelations
> {

  public readonly users: HasManyRepositoryFactory<Users, typeof Customers.prototype.id>;

  constructor(
    @inject('datasources.postgresDb') dataSource: PostgresDbDataSource, @repository.getter('UsersRepository') protected usersRepositoryGetter: Getter<UsersRepository>,
  ) {
    super(Customers, dataSource);
    this.users = this.createHasManyRepositoryFactoryFor('users', usersRepositoryGetter,);
    this.registerInclusionResolver('users', this.users.inclusionResolver);
  }
}
