import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { config } from "./config";

const connectionOptions = {
    type: "postgres",
    url: config.databaseUrl,
    synchronize: true,
    logging: false,
    entities: config.dbEntitiesPath,
    ssl: config.dbsslconn, // if not development, will use SSL
    extra: {}
};

// if (connectionOptions.ssl) {
//     connectionOptions.extra.ssl = {
//         rejectUnauthorized: false // Heroku uses self signed certificates
//     };
// }

export const MankindDataSource = new DataSource(connectionOptions as PostgresConnectionOptions);

