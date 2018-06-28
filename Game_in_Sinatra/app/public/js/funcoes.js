var num = new Array(9); //criando vetor global
$(document).ready(function(){ //quando a página estiver pronta
	inicial() //chamando função inicial
	logica() //chamando a lógica do jogo
	$('#zerar').click(function(){ //ao clicar no botão Iniciar
		randomiza(); //chama função que destribui os números aleatoriamente
		$(this).html('Recomeçar') //altera botao Iniciar para Recomeçar
	})
})
function inicial(){ //função inicial
	for(var q=0;q&lt;num.length;q++){ //laço para percorrer o vetor
		num[q]=q+1;				//atribui os númetos às posições do vetor
	}
	num[8]=0; //atribui 0 a ultima posição
	destribui(); //chama a função destribui
}
function randomiza(){ //função de preenchimento aleatório
	for(var i=0;i&lt;9;i++){ //laço para percorrer todo o vetor
		var randomico = Math.floor(Math.random()*9)+0; //gerando número aleatório
		var existe=false; //para saver se o numero existe ou não no vetor
		for(var cont=0;cont&lt;i;cont++){ //função que percorre o vetor até onde já tenha sido preenchido
			if(num[cont]==randomico){ //verifica se o item no vetor é igual ao gerado 
				existe=true; //se é igual a variavel existe recebe verdadeiro
				break; //e o laço de verificação é interrompido
			}else{//se não é igual
				existe=false; //existe recebe falso
			}
		} //fim do laço que verifica a existencia
		if(!existe){ //se existe é igual a false
			num[i]=randomico; //o indice do vetor recebe o número gerado
		}else{ //se é verdadeiro
			i--; //o indice é decrementado para que haja um novo teste
		}
	} // fim do laço que percorre todo o vetor
	destribui(); //chama função destribui
}			
function destribui(){ //função destribui
	$('.tudo').remove(); //remove os itens já existentes no html
	for(var i=0;i&lt;num.length;i++){ //laço para percorrer o vetor
		if(num[i]==0){ //se é igual a zero
			$('#puzzle').append('');

/**
 * @author Jayr
 */
var num = new Array(9); //criando vetor global
$(document).ready(function(){ //quando a página estiver pronta
	inicial() //chamando função inicial
	logica() //chamando a lógica do jogo
	$('#zerar').click(function(){ //ao clicar no botão Iniciar
		randomiza(); //chama função que destribui os números aleatoriamente
		$(this).html('Recomeçar') //altera botao Iniciar para Recomeçar
	})
})
function inicial(){ //função inicial
	for(var q=0;q&lt;num.length;q++){ //laço para percorrer o vetor
		num[q]=q+1;				//atribui os númetos às posições do vetor
	}
	num[8]=0; //atribui 0 a ultima posição
	destribui(); //chama a função destribui
}
function randomiza(){ //função de preenchimento aleatório
	for(var i=0;i&lt;9;i++){ //laço para percorrer todo o vetor
		var randomico = Math.floor(Math.random()*9)+0; //gerando número aleatório
		var existe=false; //para saver se o numero existe ou não no vetor
		for(var cont=0;cont&lt;i;cont++){ //função que percorre o vetor até onde já tenha sido preenchido
			if(num[cont]==randomico){ //verifica se o item no vetor é igual ao gerado 
				existe=true; //se é igual a variavel existe recebe verdadeiro
				break; //e o laço de verificação é interrompido
			}else{//se não é igual
				existe=false; //existe recebe falso
			}
		} //fim do laço que verifica a existencia
		if(!existe){ //se existe é igual a false
			num[i]=randomico; //o indice do vetor recebe o número gerado
		}else{ //se é verdadeiro
			i--; //o indice é decrementado para que haja um novo teste
		}
	} // fim do laço que percorre todo o vetor
	destribui(); //chama função destribui
}			
function destribui(){ //função destribui
	$('.tudo').remove(); //remove os itens já existentes no html
	for(var i=0;i&lt;num.length;i++){ //laço para percorrer o vetor
		if(num[i]==0){ //se é igual a zero
			$('#puzzle').append('');


		}else{ 
			$('#puzzle').append('');
1
2
3

		}else{ 
			$('#puzzle').append('');
‘+num[i]+’


		}
	}
	logica();
}
function logica(){ //função lógia
	$('#peca0').click(function(){
		if(num[1]==0){
			num[1]=num[0];
			num[0]=0;
		}else if(num[3]==0){
			num[3]=num[0];
			num[0]=0;
		}
		destribui();
	})
	$('#peca1').click(function(){
		if(num[0]==0){
			num[0]=num[1];
			num[1]=0;
		}else if(num[2]==0){
			num[2]=num[1];
			num[1]=0;
		}else if(num[4]==0){
			num[4]=num[1];
			num[1]=0;
		}
		destribui();
	})
	$('#peca2').click(function(){
		if(num[1]==0){
			num[1]=num[2];
			num[2]=0;
		}else if(num[5]==0){
			num[5]=num[2];
			num[2]=0;
		}
		destribui();
	})
	$('#peca3').click(function(){
		if(num[0]==0){
			num[0]=num[3];
			num[3]=0;
		}else if(num[4]==0){
			num[4]=num[3];
			num[3]=0;
		}else if(num[6]==0){
			num[6]=num[3];
			num[3]=0;
		}
		destribui();
	})
	$('#peca4').click(function(){
		if(num[1]==0){
			num[1]=num[4];
			num[4]=0;
		}else if(num[3]==0){
			num[3]=num[4];
			num[4]=0;
		}else if(num[5]==0){
			num[5]=num[4];
			num[4]=0;
		}else if(num[7]==0){
			num[7]=num[4];
			num[4]=0;
		}
		destribui();
	})
	$('#peca5').click(function(){
		if(num[2]==0){
			num[2]=num[5];
			num[5]=0;
		}else if(num[4]==0){
			num[4]=num[5];
			num[5]=0;
		}else if(num[8]==0){
			num[8]=num[5];
			num[5]=0;
		}
		destribui();
	})
	$('#peca6').click(function(){
		if(num[3]==0){
			num[3]=num[6];
			num[6]=0;
		}else if(num[7]==0){
			num[7]=num[6];
			num[6]=0;
		}
		destribui();
	})
	$('#peca7').click(function(){
		if(num[4]==0){
			num[4]=num[7];
			num[7]=0;
		}else if(num[6]==0){
			num[6]=num[7];
			num[7]=0;
		}else if(num[8]==0){
			num[8]=num[7];
			num[7]=0;
		}
		destribui();
	})
	$('#peca8').click(function(){
		if(num[5]==0){
			num[5]=num[8];
			num[8]=0;
		}else if(num[7]==0){
			num[7]=num[8];
			num[8]=0;
		}
		destribui();
	})
	$('.pecas').click(function(){
		testafim();
	})
}
function testafim(){
	for(var a=0;a&lt;num.length;a++){
		if(a&lt;8){
			if((a+1)!=num[a]){
				break;
			}
		}
		if(a==8){
			alert('Você ganhou!')
		}
	}
}

		}
	}
	logica();
}
function logica(){ //função lógia
	$('#peca0').click(function(){
		if(num[1]==0){
			num[1]=num[0];
			num[0]=0;
		}else if(num[3]==0){
			num[3]=num[0];
			num[0]=0;
		}
		destribui();
	})
	$('#peca1').click(function(){
		if(num[0]==0){
			num[0]=num[1];
			num[1]=0;
		}else if(num[2]==0){
			num[2]=num[1];
			num[1]=0;
		}else if(num[4]==0){
			num[4]=num[1];
			num[1]=0;
		}
		destribui();
	})
	$('#peca2').click(function(){
		if(num[1]==0){
			num[1]=num[2];
			num[2]=0;
		}else if(num[5]==0){
			num[5]=num[2];
			num[2]=0;
		}
		destribui();
	})
	$('#peca3').click(function(){
		if(num[0]==0){
			num[0]=num[3];
			num[3]=0;
		}else if(num[4]==0){
			num[4]=num[3];
			num[3]=0;
		}else if(num[6]==0){
			num[6]=num[3];
			num[3]=0;
		}
		destribui();
	})
	$('#peca4').click(function(){
		if(num[1]==0){
			num[1]=num[4];
			num[4]=0;
		}else if(num[3]==0){
			num[3]=num[4];
			num[4]=0;
		}else if(num[5]==0){
			num[5]=num[4];
			num[4]=0;
		}else if(num[7]==0){
			num[7]=num[4];
			num[4]=0;
		}
		destribui();
	})
	$('#peca5').click(function(){
		if(num[2]==0){
			num[2]=num[5];
			num[5]=0;
		}else if(num[4]==0){
			num[4]=num[5];
			num[5]=0;
		}else if(num[8]==0){
			num[8]=num[5];
			num[5]=0;
		}
		destribui();
	})
	$('#peca6').click(function(){
		if(num[3]==0){
			num[3]=num[6];
			num[6]=0;
		}else if(num[7]==0){
			num[7]=num[6];
			num[6]=0;
		}
		destribui();
	})
	$('#peca7').click(function(){
		if(num[4]==0){
			num[4]=num[7];
			num[7]=0;
		}else if(num[6]==0){
			num[6]=num[7];
			num[7]=0;
		}else if(num[8]==0){
			num[8]=num[7];
			num[7]=0;
		}
		destribui();
	})
	$('#peca8').click(function(){
		if(num[5]==0){
			num[5]=num[8];
			num[8]=0;
		}else if(num[7]==0){
			num[7]=num[8];
			num[8]=0;
		}
		destribui();
	})
	$('.pecas').click(function(){
		testafim();
	})
}
function testafim(){
	for(var a=0;a&lt;num.length;a++){
		if(a&lt;8){
			if((a+1)!=num[a]){
				break;
			}
		}
		if(a==8){
			alert('Você ganhou!')
		}
	}
}
