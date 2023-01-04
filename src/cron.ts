import { CronJob } from "cron";
import { TestTask } from "./tasks/test.task";

export const TestCron = new CronJob("0 * * * *", () => {
    new TestTask().execute();
});

