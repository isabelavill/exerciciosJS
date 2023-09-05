function informarvalores(){
    n1 = window.prompt("Informe um número: ")
    n2 = window.prompt("Informe outro valor:")
    li = [n1,n2]

    
    console.log(li[0])
    for(i=0;i<2;i++){
        console.log(`Número informado: ${li[i]}`)
        if((li[i])>=30 && (li[i])<=50){
            console.log(`Resposta no console: O número informado ${li[i]} está no intervalo [30,50].`)
        }else if((li[i])>=60 && (li[i])<=100){
            console.log(`Resposta no console: O número informado está no intervalo [60,100].`)
        }else{
            console.log(`Resposta no console: O número informado não está em nenhum dos dois intervalos.`)
        }
        }

}