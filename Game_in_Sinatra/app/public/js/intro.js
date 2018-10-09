function preparar() {
	$("#header").hide();
	$("#subheader").hide();
	$("#form").hide();
	$("footer").hide();
}

function inicio() {
	$(".intro").hide();
	$("#header").show();
	$("#subheader").show();
	$("#form").show();
	$("footer").show();

	var music0 = document.getElementById('music0');
	var music1 = document.getElementById('music1');
	var music2 = document.getElementById('music2');
	var n = Math.floor((Math.random() * 3));
	musica = n;
	
	if (musica == 0) {
		music0.play();
	}
	if (musica == 1) {
		music1.play();
	}
	if (musica == 2) {
		music2.play();
	}
}