import { IRead } from '../../../shared/contracts/IRead';
import { Foo } from '../entities/Foo';
import { IWrite } from '../../../shared/contracts/IWrite';

export interface IFooRepository extends IRead<Foo>, IWrite<Foo> {}
