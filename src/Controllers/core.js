import createDatabaseConnection from '../Controllers/database.js'
import createWebServer from '../Controllers/webserver.js'

function createCore(configurations = {}){

    const database = configurations.database || createDatabaseConnection()
    const webserver = configurations.webserver || createWebServer()

    function start() {
        console.log('> [core] Starting...')
        database.start()
        webserver.start()
        console.log('> [core] Starting done system ready!')
    }

    function stop() {
        console.log('> [core] Stopping...')
        webserver.stop()
        database.stop()
        console.log('> [core] Stopping done!')
    }

    return {
        start,
        stop
    }
}

export default createCore