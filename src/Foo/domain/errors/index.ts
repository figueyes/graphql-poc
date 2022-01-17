export class ErrorUseCase extends Error {
  constructor() {
    super('Error calling repository');
    this.name = 'ErrorUseCase';
  }
}
