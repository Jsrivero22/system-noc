import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class ServerApp {

    public static start() {

        console.log('Server is running!');

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://www.google.com';
                new CheckService(
                    () => console.log(`${url} is ok!`),
                    ( error ) => console.log( error )
                ).execute( url );
                // new CheckService().execute( 'http://localhost:3000' );
            }
        );
    }

}