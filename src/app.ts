import { ServerApp } from "./presentation/server";


const main = async () => {
    ServerApp.start();
}

( async () => {
    await main();
})();
