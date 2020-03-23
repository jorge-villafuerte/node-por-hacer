const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de una tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como compleado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza estado de una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}