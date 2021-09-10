
const fs = require('fs');

const crearArchivo = async( base = 5, listar, limite) => {

    try {
        console.log("==================")
        console.log("   Tabla del ",base)
        console.log("==================")

        let salida='';

        for(var i = 1; i<=limite; i++) {
            
            salida +=`${base} x ${i} = ${base*i}\n`;

        }
        if (listar){
            console.log(salida);

        }
        

        fs.writeFileSync( './salida/tabla-5.txt', salida) ;

        return `tabla${base}`;
        
    } catch (err) {
        throw err;
        
    }



    

}


module.exports = {
    crearArchivo
}
