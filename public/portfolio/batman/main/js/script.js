function menu__open(){
document.getElementById("phone__menu-id").style.width="100%";
document.getElementById("phone__menu-id-body").style.overflow="hidden";
}

function menu__close(){
document.getElementById("phone__menu-id").style.width="0";
document.getElementById("phone__menu-id-body").style.overflow="visible";
}

function open__description(){
	document.getElementById('description').style.display='flex';
	document.getElementById('reviews').style.display='none';
	document.getElementById('premiere').style.display='none';
	document.getElementById('actor').style.display='none';
	document.getElementById('award').style.display='none';
	document.getElementById('fact').style.display='none';
	document.getElementById('site').style.display='none';
}

function open__reviews(){
	document.getElementById("description").style.display="none";
	document.getElementById("reviews").style.display="flex";
	document.getElementById("premiere").style.display="none";
	document.getElementById("actor").style.display="none";
	document.getElementById("award").style.display="none";
	document.getElementById("fact").style.display="none";
	document.getElementById("site").style.display="none";
}

function open__premiere(){
	document.getElementById("description").style.display="none";
	document.getElementById("reviews").style.display="none";
	document.getElementById("premiere").style.display="flex";
	document.getElementById("actor").style.display="none";
	document.getElementById("award").style.display="none";
	document.getElementById("fact").style.display="none";
	document.getElementById("site").style.display="none";
}

function open__actor(){
	document.getElementById("description").style.display="none";
	document.getElementById("reviews").style.display="none";
	document.getElementById("premiere").style.display="none";
	document.getElementById("actor").style.display="flex";
	document.getElementById("award").style.display="none";
	document.getElementById("fact").style.display="none";
	document.getElementById("site").style.display="none";
}

function open__award(){
	document.getElementById("description").style.display="none";
	document.getElementById("reviews").style.display="none";
	document.getElementById("premiere").style.display="none";
	document.getElementById("actor").style.display="none";
	document.getElementById("award").style.display="flex";
	document.getElementById("fact").style.display="none";
	document.getElementById("site").style.display="none";
}

function open__fact(){
	document.getElementById("description").style.display="none";
	document.getElementById("reviews").style.display="none";
	document.getElementById("premiere").style.display="none";
	document.getElementById("actor").style.display="none";
	document.getElementById("award").style.display="none";
	document.getElementById("fact").style.display="flex";
	document.getElementById("site").style.display="none";
}

function open__site(){
	document.getElementById("description").style.display="none";
	document.getElementById("reviews").style.display="none";
	document.getElementById("premiere").style.display="none";
	document.getElementById("actor").style.display="none";
	document.getElementById("award").style.display="none";
	document.getElementById("fact").style.display="none";
	document.getElementById("site").style.display="flex";
}