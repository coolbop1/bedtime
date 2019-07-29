const opennav = (tok) => {

let toks = tok || "big";
let menu = document.getElementById("menu");
	let menus = document.getElementById("menulist");
	let adjusthead = document.getElementById("mainheader");
	let ulist = document.getElementById("ulist");
		let transmid = document.getElementById("mid");
		let fcros = document.getElementById("fcros");
		let scros = document.getElementById("scros");
		
menu.classList.replace("big",toks);
		
if(menu.classList.contains("big")){
	return;
}else if(transmid.classList.contains("mid")){
fcros.classList.replace("cros","cross");
scros.classList.replace("cro","crosss");	
menus.classList.replace("splace","shownav");
	menus.classList.replace("fright","fnone");
	transmid.classList.replace("mid","mids");

	adjusthead.style.height = "120%";
	menus.style.width = "100%";
	
	ulist.classList.replace("splace","listout");
	}else{
		fcros.classList.replace("cross","cros");
scros.classList.replace("crosss","cro");	menus.classList.replace("shownav","splace");
	menus.classList.replace("fnone","fright");
	transmid.classList.replace("mids","mid");

	adjusthead.style.height = "70px";
	menus.style.width = "100%";
	
	ulist.classList.replace("listout","splace");
	}
}


const opentab = (theid) => {

	opennav();
	
	let newclicked = theid.replace("tab","");
	let oldclicked;
	let homepage = document.getElementById("content");
	let aboutpage = document.getElementById("about");
	let signinpage = document.getElementById("login");
	let signuppage = document.getElementById("reg");
	if(homepage.classList.contains("jumpin")){
		oldclicked = "content";
	}else if(signinpage.classList.contains("jumpin")){
		oldclicked = "login";
	}else if(signuppage.classList.contains("jumpin")){
		oldclicked = "reg";
	}else{
		oldclicked = "about";
	}
	
	if(newclicked != oldclicked){
		
		let newclic = document.getElementById(newclicked+"tab");
		let oldclic = document.getElementById(oldclicked+"tab");
		let newclick = document.getElementById(newclicked);
		let oldclick = document.getElementById(oldclicked);
		newclick.classList.replace("jumpout","jumpin");
		newclic.classList.replace("splace","presenttab");
		oldclick.classList.replace("jumpin","jumpout");
		oldclic.classList.replace("presenttab","splace");
	}
	
}