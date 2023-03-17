
function cambiar_dia(element){
    
    if(document.getElementById(element))
        box = document.getElementById(element);
        console.log(box.getAttribute("class")); 
        console.log("Elemento existe " + element + " " + document.getElementById(element).style.className);
        if(box.getAttribute("class")==='dia')
            box.setAttribute("class",'dia2');
         else
             box.setAttribute("class",'dia');
    
}

function irA(ruta)
{
 location.href= ruta;  
}

function mostrar_emergente(ancho,alto,x,y,url,parametro,titulo)
{
      
      var w = window.innerWidth;
      var h = window.innerHeight;
      
      y=Math.round((h/2)-150);
      x=Math.round((w/2)-150);
      
      //console.log(`Abriendo dialogo ${x} ${y}`);
      
      //alert("Ingresando: " + parametro);
      //showDiv('miModal');
      document.getElementById('miModal').innerHTML='';
      document.getElementById('miModal').innerHTML='<div class=emergente id="emergente2"><a href=\"#\"><span class=equis_cerrar>&times;</span></a><table width=' +ancho + 'height=' + alto + ' class=graficas><tr><td class=cab_graficas align=left>' + titulo + '</td></tr><tr><td class=graficas><object type=\"text/html\" data=\"'+ url+ '?'+ parametro + '\" class=emergente2 id=web_modal></object></td></tr></table></div>';
      divref = document.getElementById('web_modal').style;
      divref.height=alto;
      divref.width=ancho;
      emergente2=document.getElementById('emergente2').style;
      emergente2.left=x + "px"
      emergente2.top=y + "px"
       //console.log(`Abriendo Ventana ${emergente2.left}`);
      //hideDiv('izq2');
      
}
function ocultar_emergente()
{
      document.getElementById('izq1').className="mostrar_menu";
      //alert("Ingresando");
      hideDiv('menu_oculto2');
      var etiqueta3 = document.getElementById('contenido').className="area_trabajo_derecha";
      
}

function ocultar_menu()
{
      //alert("Ingresando");
      document.getElementById('izq1').className="ocultar_menu";
      //document.getElementById('izq2').className="ocultar_menu";
      //hideDiv('izq2');
      showDiv('menu_oculto2');
      //var etiqueta3 = document.getElementById('contenido').style;
      var etiqueta3 = document.getElementById('contenido').className="area_trabajo_izquierda";
      //etiqueta3.left='10';
      //etiqueta3.position="fixed";
      console.log("Mostrando menu oculto")
      
}
function mostrar_menu()
{
      document.getElementById('izq1').className="mostrar_menu";
      //alert("Ingresando");
      hideDiv('menu_oculto2');
      var etiqueta3 = document.getElementById('contenido').className="area_trabajo_derecha";
      
}

function showDiv(divvar) 
	{
		//alert(divvar);  
		if (document.getElementById(divvar))
			{
			//alert(divvar);
			divref = document.getElementById(divvar).style;
			divref.visibility = 'visible';
			}
	}
function hideDiv(divvar)
{
		if (document.getElementById(divvar))
			{
			divref = document.getElementById(divvar).style;
			divref.visibility = 'hidden';
			}
}


//nuevo Menu

function SDMenu(id) {
	if (!document.getElementById || !document.getElementsByTagName)
		return false;
	this.menu = document.getElementById(id);
	this.submenus = this.menu.getElementsByTagName("div");
	this.remember = true;
	this.speed = 3;
	this.markCurrent = true;
	this.oneSmOnly = false;
}
SDMenu.prototype.init = function() {
	var mainInstance = this;
	for (var i = 0; i < this.submenus.length; i++)
		this.submenus[i].getElementsByTagName("span")[0].onclick = function() {
			mainInstance.toggleMenu(this.parentNode);
			
		};
	if (this.markCurrent) {
		var links = this.menu.getElementsByTagName("a");
		for (var i = 0; i < links.length; i++)
			if (links[i].href == document.location.href) {
				links[i].className = "current";
				links[i].onclick = function(){
					    links[i].className="menu2";
				}
				break;
			}
	}
	if (this.remember) {
		var regex = new RegExp("sdmenu_" + encodeURIComponent(this.menu.id) + "=([01]+)");
		var match = regex.exec(document.cookie);
		if (match) {
			var states = match[1].split("");
			for (var i = 0; i < states.length; i++)
				this.submenus[i].className = (states[i] == 0 ? "collapsed" : "");
		}
	}
	//collapseAll();
};
SDMenu.prototype.toggleMenu = function(submenu) {
	if (submenu.className == "collapsed")
		this.expandMenu(submenu);
	else
		this.collapseMenu(submenu);
};
SDMenu.prototype.expandMenu = function(submenu) {
	var fullHeight = submenu.getElementsByTagName("span")[0].offsetHeight;
	var links = submenu.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++)
		fullHeight += links[i].offsetHeight;
	var moveBy = Math.round(this.speed * links.length);
	
	var mainInstance = this;
	var intId = setInterval(function() {
		var curHeight = submenu.offsetHeight;
		var newHeight = curHeight + moveBy;
		if (newHeight < fullHeight)
			submenu.style.height = newHeight + "px";
		else {
			clearInterval(intId);
			submenu.style.height = "";
			submenu.className = "";
			mainInstance.memorize();
		}
	}, 30);
	this.collapseOthers(submenu);
};
SDMenu.prototype.collapseMenu = function(submenu) {
	var minHeight = submenu.getElementsByTagName("span")[0].offsetHeight;
	var moveBy = Math.round(this.speed * submenu.getElementsByTagName("a").length);
	var mainInstance = this;
	var intId = setInterval(function() {
		var curHeight = submenu.offsetHeight;
		var newHeight = curHeight - moveBy;
		if (newHeight > minHeight)
			submenu.style.height = newHeight + "px";
		else {
			clearInterval(intId);
			submenu.style.height = "";
			submenu.className = "collapsed";
			mainInstance.memorize();
		}
	}, 30);
};
SDMenu.prototype.collapseOthers = function(submenu) {
	if (this.oneSmOnly) {
		for (var i = 0; i < this.submenus.length; i++)
			if (this.submenus[i] != submenu && this.submenus[i].className != "collapsed")
				this.collapseMenu(this.submenus[i]);
	}
};
SDMenu.prototype.expandAll = function() {
	var oldOneSmOnly = this.oneSmOnly;
	this.oneSmOnly = false;
	for (var i = 0; i < this.submenus.length; i++)
		if (this.submenus[i].className == "collapsed")
			this.expandMenu(this.submenus[i]);
	this.oneSmOnly = oldOneSmOnly;
};
SDMenu.prototype.collapseAll = function() {
	for (var i = 0; i < this.submenus.length; i++)
		if (this.submenus[i].className != "collapsed")
			this.collapseMenu(this.submenus[i]);
};
SDMenu.prototype.memorize = function() {
	if (this.remember) {
		var states = new Array();
		for (var i = 0; i < this.submenus.length; i++)
			states.push(this.submenus[i].className == "collapsed" ? 0 : 1);
		var d = new Date();
		d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
		document.cookie = "sdmenu_" + encodeURIComponent(this.menu.id) + "=" + states.join("") + "; expires=" + d.toGMTString() + "; path=/";
	}
};

//Fin nuevo menu