function cambiarDolares(){
    let dolarHoy=102.5

    let ingresoPesos=document.getElementById("pesos").value
    let ingresado= ingresoPesos*1
    let resultado= ingresoPesos / dolarHoy  
    let impuestopais= ingresoPesos * 0.30
    let retencion= ingresoPesos * 0.35
    
    let total= ingresado + impuestopais + retencion

    if(resultado<=0){
        alert('El monto ingresado no se puede calcular')

    }else if (resultado>6000){
        alert('No se puede convertir un monto superior a 6000 dólares')

    }else{

        alert('Los dólares obtenidos al cambio serán: $'+ resultado.toFixed(2) + "\n" + 'Impuesto país (pesos arg): $'+ impuestopais.toFixed(2) + "\n" + 'Retención de 35% de Ganancias (pesos arg): $'+ retencion.toFixed(2) + "\n" + 'Total de su pago en pesos: $' + total.toFixed(2))
    } 

}