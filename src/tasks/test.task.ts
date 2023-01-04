import { Task } from "./task";

export class TestTask implements Task {
    execute(): void {
        console.log("hello task");
    }
}
