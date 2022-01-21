import {Application} from 'express';
import {ApolloServer} from 'apollo-server-express';

import {CONTEXT_APP} from '../../../../domain/constants';
import Base from "./type-defs/Base";
import Foo from '../../../../../foos/infrastructure/http/graphql/type-defs';
import { fooResolver } from '../../../../../foos/infrastructure/http/graphql/resolvers/Foo';
import { IResolvers } from "@graphql-tools/utils";
import { DocumentNode } from "graphql";

export class Graphql {
  public apolloServer: ApolloServer;


  constructor() {
    this.apolloServer = new ApolloServer({
      resolvers: Graphql.getResolvers(),
      typeDefs: Graphql.getTypeDefs(),
    });
  }

  private static getTypeDefs(): DocumentNode | Array<DocumentNode> {
    // add every types defined into system
    return [Base, Foo];
  }

  private static getResolvers(): IResolvers | Array<IResolvers> {
    // add every resolvers defined into system
    return [fooResolver];
  }

  public async route(app: Application): Promise<void> {
    await this.apolloServer.start().then(() => {
      this.apolloServer.applyMiddleware({
        path: `/graphql/${CONTEXT_APP}`,
        app,
      });
    });
  }
}
