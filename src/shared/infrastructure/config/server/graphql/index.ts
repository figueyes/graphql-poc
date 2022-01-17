import { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import resolvers from "../../../../../Foo/infrastructure/http/graphql/resolvers/Foo";
import typeDefs from "../../../http/graphql/type-defs";
import {CONTEXT_APP} from "../../../../domain/constants";

export class Graphql {
  public apolloServer: ApolloServer;

  constructor() {
    this.apolloServer = new ApolloServer({
      resolvers,
      typeDefs,
    });
  }

  public async route(app: Application ): Promise<void> {
    await this.apolloServer.start()
      .then(() => {
        this.apolloServer
          .applyMiddleware({
            path: `/graphql/${CONTEXT_APP}`,
            app,
          });
      });
  }
}
