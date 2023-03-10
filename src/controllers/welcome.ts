import { BaseContext } from "koa";
import { description, request, summary, tagsAll } from "koa-swagger-decorator";

@tagsAll(["General"])
export default class WelcomeController {

    @request("get", "/")
    @summary("Welcome page")
    @description("A simple welcome message to verify the service is up and running.")
    public static async hello(ctx: BaseContext): Promise<void> {
        ctx.body = "Hello World!";
    }

}
