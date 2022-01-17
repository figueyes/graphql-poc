export interface IRead<T> {
  get: () => Promise<T[]>
}
