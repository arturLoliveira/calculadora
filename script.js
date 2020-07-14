function calcular(tipo, valor){
    
    var valor_visor = document.getElementById('visor').value

    if(tipo === 'acao'){

        if(valor === 'c'){
            document.getElementById('visor').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('visor').value += valor 
        }

        if(valor === '='){
            document.getElementById('visor').value = eval(valor_visor)
            
        }

    } else if(tipo === 'valor'){
        document.getElementById('visor').value = valor_visor + valor
    }

}