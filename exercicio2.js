function tratadorDeCliqueExercicio2() {

    hora = new Date()
    
    if(hora.getHours()>=12){
         window.alert(`Horário: ${hora.getHours()} PM : ${hora.getMinutes()}m : ${hora.getSeconds()}s`)
    }else{
        window.alert(`Horário: ${hora.getHours()}AM ${hora.getMinutes()}m ${hora.getSeconds()}s`)

    }
   
    // atualize esta função para
    // exibir um alerta com a hora 
    // atual no seguinte formato:
    // Horário: 8 PM : 40m : 28s
    console.log('adicionar código na função tratadorDeCliqueExercicio2() em ./js/exercicio2.js')
}