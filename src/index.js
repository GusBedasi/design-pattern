import createCore from './Controllers/core.js'

const core = createCore();

try {
    core.start()
    core.stop()
} catch (error) {
    console.log('[index] Uncaught Error!')
    console.error(error)
}