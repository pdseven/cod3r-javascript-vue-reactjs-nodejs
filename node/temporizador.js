const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 4', function() {
    /*
     *'/5 - a cada 5 segundos
     *  qualquer dia
     15 hora
     * qualquer minuto
     * qualquer segundo
     4 quita-feira (começa contando domingo 0)
    */
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 15
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2!', new Date().getSeconds())
})