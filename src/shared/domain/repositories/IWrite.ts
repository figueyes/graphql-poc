export interface IWrite<T> {
  add: (entity: T) => Promise<T>;
}
