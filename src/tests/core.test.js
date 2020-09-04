const createCore = require('../Controllers/core.js')

function createMok(){
    function start(){
        console.log('[mock] Start...')
    }

    function stop(){
        console.log('[mock] Stop...')
    }

    return {
        start,
        stop
    }
}

describe('Core quando importado', () => {
    test('deve ter o metodo #start e #stop', () => {
        const core = createCore()
        expect(core).toHaveProperty('start')
        expect(core).toHaveProperty('stop')
    });
});

describe('Core quando inicializar', () => {
    test('nao deve conter erros', () => {

        const databaseMock = createMok();
        const webserverMock = createMok();

        const core = createCore({
            database: databaseMock,
            webserver: webserverMock
        });
        expect(() => {
            core.start();
        }).not.toThrow();
    });
});