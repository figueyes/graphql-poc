import { IRead } from "../../../shared/domain/repositories/IRead";
import { Foo } from "../entities/Foo";
import { IWrite } from "../../../shared/domain/repositories/IWrite";

export interface IFooRepository extends IRead<Foo>, IWrite<Foo> {
}
