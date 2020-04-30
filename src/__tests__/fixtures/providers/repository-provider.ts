import {CustomersRepository, RolesRepository, UsersRepository} from '../../../repositories';
import {TestdbDataSource} from '../../fixtures/datasources/testdb.datasource';

export const testDb = new TestdbDataSource;

export class RepositoryProvider {
  customerRepository: CustomersRepository;
  empRoleRepository: RolesRepository;
  userRepository: UsersRepository;
  static instance: RepositoryProvider;
  constructor() {}
  static getRepositoryInstance() {
    if (!this.instance) {
      this.instance = new RepositoryProvider();
      this.instance.createRepository();
    }
    return this.instance;
  }
  private createRepository() {
    this.userRepository = new UsersRepository(
      testDb,
      async () => this.customerRepository,
      async () => this.empRoleRepository,
    );
    this.customerRepository = new CustomersRepository(
      testDb,
      async () => this.userRepository,
    );
    this.empRoleRepository = new RolesRepository(
      testDb,
      async () => this.userRepository,
    );
  }
}
