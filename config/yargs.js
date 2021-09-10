const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type: 'number',
                    demandOption: true,
                    describe:'esla base de la tabla'

                })

                .option('l',{
                    alias:'listar',
                    type: 'boolean',
                    default: false,
                    describe:'Muestra la tabla'
                })

                .option('h',{
                    alias:'hasta',
                    type: 'number',
                    default: 10,
                    describe:'Largo de la tabla'

                })

                .check( (argv,option)=> {
                    if( isNaN(argv.b) || isNaN(argv.h)  ){
                        
                        throw 'No se han enviado bien los numero de base o de de limite'
                        
                    }
                    return true;
                })

                
                .argv;

module.exports = argv;