export class ErrorRepository extends Error {
  constructor() {
    super('Error executing repository');
    this.name = 'ErrorRepository';
  }
}
