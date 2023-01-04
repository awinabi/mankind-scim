import { SwaggerRouter } from "koa-swagger-decorator";
import { user } from "../controllers";

const protectedRouter = new SwaggerRouter();

// USER ROUTES
protectedRouter.get("/users", user.getUsers);
protectedRouter.get("/users/:id", user.getUser);
protectedRouter.post("/users", user.createUser);
protectedRouter.put("/users/:id", user.updateUser);
protectedRouter.delete("/users/:id", user.deleteUser);
protectedRouter.delete("/testusers", user.deleteTestUsers);

// Swagger endpoint, at http://localhost:3000/swagger-html
protectedRouter.swagger({
    title: "mankind-scim",
    description: "SCIM Implementation",
    version: "0.0.1",
    prefix: "scim/v2"
});

// mapDir will scan the input dir, and automatically call router.map to all Router Class
protectedRouter.mapDir(__dirname);

export { protectedRouter };
