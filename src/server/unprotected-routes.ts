import Router from "@koa/router";
import { welcome } from "../controllers";

const unprotectedRouter = new Router();

// Hello World route
unprotectedRouter.get("/", welcome.hello);

export { unprotectedRouter };
