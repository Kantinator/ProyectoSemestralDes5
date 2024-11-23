//Funcion Buscar monstruo
async function buscarMonstruo(){

  //Se vacia el div de resultados para una nueva busqueda.
  document.getElementById("resultados").innerHTML = "";
  let nombre = document.getElementById("Nombre");
  let txt = '';

  //Dependiendo del radio button elegido, el fetch es diferente.
  if (document.getElementById("todos").checked == true) {
    txt = 'https://mhw-db.com/monsters?q={"name":{"$like":"%'+nombre.value+'%"}}';
  } else if (document.getElementById("large").checked == true) {
    txt = 'https://mhw-db.com/monsters?q={"name":{"$like":"%'+nombre.value+'%"},"type":"large"}';
  } else if (document.getElementById("small").checked == true) {
    txt = 'https://mhw-db.com/monsters?q={"name":{"$like":"%'+nombre.value+'%"},"type":"small"}';
  }

  //Variables donde se almacenan los datos obtenidos a traves del fetch.
  let longitud;
  let num = [];
  let monstruo = [];
  let especie = [];
  let descripcion = [];

  //Se realiza el fetch y se almacenan los datos en un loop.
  try{
    const busqueda = await fetch(txt);
    if(!busqueda.ok)
      throw new Error("No encontrado");
    else    
    { const datos = await busqueda.json();
      console.log(datos);
      longitud = datos.length;
      for (let i = 0; i < longitud; i++){
        num[i] = datos[i].id;
        monstruo[i] = datos[i].name;
        monstruo[i] = monstruo[i].toLowerCase();
        especie[i] = datos[i].species;
        descripcion[i] = datos[i].description;
        }
    }
  }catch(error){
    console.log(error)
    alerta("Hubo un error en la busqueda.")
  }
  //Se crea un div por cada resultado adquirido para mostrarlos en la pagina.
  for (let i = 0; i < longitud; i++){
    //Propiedades de div
    var div = document.createElement("div");
    div.style.borderWidth = "2px";
    div.style.margin = "30px";
    div.style.borderRadius = "10px";
    div.style.borderStyle = "solid";
    div.style.borderColor = "black";
    div.style.color = "white";
    div.style.backgroundColor = "gray";

    //Se crea una tabla para organizar mejor los datos.
    var table = document.createElement("table");
    var fila = table.insertRow(0);
    var imagen = fila.insertCell(0);
    var texto = fila.insertCell(1);
    table.cellPadding = "15px";

    //Foto del monstruo y sus propriedades.
    let foto = document.createElement("img");
    foto.width = 250;
    foto.style.margin="auto";
    foto.src= "./monstruos/"+num[i]+".png";
    foto.style.display = "block";

    //Titulo del monstruo.
    let titulo = document.createElement("h1");
    titulo.innerHTML = "nombre: "+monstruo[i];
    titulo.style.fontSize = "30px"

    //Especie del monstruo.
    let especieMonstruo = document.createElement("h3");
    especieMonstruo.innerHTML = "especie: "+especie[i];

    //Descripcion del monstruo.
    var descripcionMonstruo = document.createElement("p");
    descripcionMonstruo.innerHTML = descripcion[i];
    descripcionMonstruo.style.fontFamily = "Verdana";

    //Se usa append para añadir los elementos al div de resultados.
    document.getElementById("resultados").append(div);
    div.append(table);
    imagen.append(foto);
    texto.append(titulo);
    texto.append(especieMonstruo);
    texto.append(descripcionMonstruo);
  }
}

//Funcion Buscar Arma.
async function buscarArma(){
  //Se vacia el div de resultados para una nueva busqueda.
  document.getElementById("resultados").innerHTML = "";
  let nombre = document.getElementById("Nombre");
  let txt = '';

  //Dependiendo del radio button elegido, el fetch es diferente.
  if (document.getElementById("todos").checked == true) {
    txt = 'https://mhw-db.com/weapons?q={"name":{"$like":"%'+nombre.value+'%"}}';
  } else if (document.getElementById("great").checked == true) {
    txt = 'https://mhw-db.com/weapons?q={"name":{"$like":"%'+nombre.value+'%"},"type":"great-sword"}';
  } else if (document.getElementById("dual").checked == true) {
    txt = 'https://mhw-db.com/weapons?q={"name":{"$like":"%'+nombre.value+'%"},"type":"dual-blades"}';
  } else if (document.getElementById("lance").checked == true) {
    txt = 'https://mhw-db.com/weapons?q={"name":{"$like":"%'+nombre.value+'%"},"type":"lance"}';
  } else if (document.getElementById("charge").checked == true) {
    txt = 'https://mhw-db.com/weapons?q={"name":{"$like":"%'+nombre.value+'%"},"type":"charge-blade"}';
  } else if (document.getElementById("heavyb").checked == true) {
    txt = 'https://mhw-db.com/weapons?q={"name":{"$like":"%'+nombre.value+'%"},"type":"heavy-bowgun"}';
  } else if (document.getElementById("long").checked == true) {
    txt = 'https://mhw-db.com/weapons?q={"name":{"$like":"%'+nombre.value+'%"},"type":"long-sword"}';
  } else if (document.getElementById("hammer").checked == true) {
    txt = 'https://mhw-db.com/weapons?q={"name":{"$like":"%'+nombre.value+'%"},"type":"hammer"}';
  } else if (document.getElementById("gunlance").checked == true) {
    txt = 'https://mhw-db.com/weapons?q={"name":{"$like":"%'+nombre.value+'%"},"type":"gunlance"}';
  } else if (document.getElementById("glaive").checked == true) {
    txt = 'https://mhw-db.com/weapons?q={"name":{"$like":"%'+nombre.value+'%"},"type":"insect-glaive"}';
  } else if (document.getElementById("bow").checked == true) {
    txt = 'https://mhw-db.com/weapons?q={"name":{"$like":"%'+nombre.value+'%"},"type":"bow"}';
  } else if (document.getElementById("shield").checked == true) {
    txt = 'https://mhw-db.com/weapons?q={"name":{"$like":"%'+nombre.value+'%"},"type":"sword-and-shield"}';
  } else if (document.getElementById("horn").checked == true) {
    txt = 'https://mhw-db.com/weapons?q={"name":{"$like":"%'+nombre.value+'%"},"type":"hunting-horn"}';
  } else if (document.getElementById("axe").checked == true) {
    txt = 'https://mhw-db.com/weapons?q={"name":{"$like":"%'+nombre.value+'%"},"type":"switch-axe"}';
  } else if (document.getElementById("lightb").checked == true) {
    txt = 'https://mhw-db.com/weapons?q={"name":{"$like":"%'+nombre.value+'%"},"type":"light-bowgun"}';
  }

  //Variables donde se almacenan los datos obtenidos a traves del fetch.
  let longitud;
  let nombreArma = [];
  let tipo = [];
  let rareza = [];
  let ataque = [];
  let fotoArma = [];
  let elementoTipo = [];
  let elementoDano = [];

  //Se realiza el fetch y se almacenan los datos en un loop.
  try{
      const busqueda = await fetch(txt);
      if(!busqueda.ok)
          throw new Error("No encontrado");
      else
      {   const datos = await busqueda.json();
          console.log(datos);
          longitud = datos.length;
          for (let i = 0; i < longitud; i++){
              nombreArma[i] = datos[i].name;
              nombreArma[i] = nombreArma[i].toLowerCase();
              rareza[i] = datos[i].rarity;
              tipo[i] = datos[i].type;
              ataque[i] = datos[i].attack.display;
              //Hay algunos campos en el API que se encuentran nulos, asi que tuvimos que crea condicionales para que el programa no tire error y aborte el fetch entero.
              if (datos[i].assets == null)
                {
                  datos[i].assets = "";
                }
              fotoArma[i] = datos[i].assets.image;
              if (datos[i].elements == null)
                {
                  datos[i].elements = "";
                }
              if (datos[i].elements[0] == null)
                {
                  datos[i].elements[0] = "";
                  datos[i].elements[0].type = "";
                  datos[i].elements[0].damage = "";
                }
              elementoTipo[i] = datos[i].elements[0].type ?? "ninguno";
              elementoDano[i] = datos[i].elements[0].damage ?? "";
          }
      }

  }catch(error){
      console.log(error);
      alerta("Hubo un error en la busqueda.")
  }

  //Se crea un div por cada resultado adquirido para mostrarlos en la pagina.
  for (let i = 0; i < longitud; i++){
    //Propiedades de div
    var div = document.createElement("div");
    div.style.borderWidth = "2px";
    div.style.margin = "30px";
    div.style.borderRadius = "10px";
    div.style.borderStyle = "solid";
    div.style.borderColor = "black";
    div.style.color = "white";
    div.style.backgroundColor = "gray";

    //Se crea una tabla para organizar mejor los datos.
    var table = document.createElement("table");
    var fila = table.insertRow(0);
    var imagen = fila.insertCell(0);
    var texto = fila.insertCell(1);
    table.cellPadding = "15px";

    //Foto del arma y sus propriedades.
    let foto = document.createElement("img");
    foto.width = 250;
    foto.style.margin="auto";
    foto.src= fotoArma[i];
    foto.style.display = "block";

    //Nombre del arma.
    let titulo = document.createElement("h1");
    titulo.innerHTML = nombreArma[i];
    titulo.style.fontSize = "30px"

    //Tipo de arma.
    let tipoArma = document.createElement("h3");
    tipoArma.innerHTML = "tipo de arma: "+tipo[i];

    //Valor de daño neutral.
    var danoNeutral = document.createElement("p");
    danoNeutral.innerHTML = "valor de ataque: "+ataque[i];

    //Valor y tipo de daño elemental.
    var danoElemental = document.createElement("p");
    danoElemental.innerHTML = "daño elemental: " + elementoDano[i];
    
    //Icono del elemento.
    var icono = document.createElement("img")
    icono.src = "./iconos/" + elementoTipo[i] + ".png";
    icono.style.float = "right";
    icono.style.width = "25px";
    icono.style.height = "25px";
    let nombreElemento = "";
    if (elementoTipo[i] == "fire")
    {
      nombreElemento = "Fuego"
    } else if (elementoTipo[i] == "water")
    {
      nombreElemento = "Agua"
    } else if (elementoTipo[i] == "ice")
    {
      nombreElemento = "Hielo"
    } else if (elementoTipo[i] == "thunder")
    {
      nombreElemento = "Trueno"
    } else if (elementoTipo[i] == "dragon")
    {
      nombreElemento = "Dragon"
    }else if (elementoTipo[i] == "paralysis")
    {
      nombreElemento = "Paralisis"
    }else if (elementoTipo[i] == "blast")
    {
      nombreElemento = "Explosion"
    }else if (elementoTipo[i] == "sleep")
    {
      nombreElemento = "Sueño"
    }else if (elementoTipo[i] == "poison")
    {
      nombreElemento = "Veneno"
    }
    icono.title = nombreElemento;

    //Se usa append para añadir los elementos al div de resultados.
    document.getElementById("resultados").append(div);
    div.append(table);
    imagen.append(foto);
    texto.append(titulo);
    texto.append(tipoArma);
    texto.append(danoNeutral);
    texto.append(icono);
    texto.append(danoElemental);
    
  }
}

function alerta(text){
    window.alert(text);
}

//Funcion Buscar Armadura
async function buscarArmadura(){
  //Se vacia el div de resultados para una nueva busqueda.
  document.getElementById("resultados").innerHTML = "";
  let nombre = document.getElementById("Nombre");
  let txt = '';

  //Dependiendo del radio button elegido, el fetch es diferente.
  if (document.getElementById("todos").checked == true) {
    txt = 'https://mhw-db.com/armor?q={"name":{"$like":"%'+nombre.value+'%"}}';
  } else if (document.getElementById("head").checked == true) {
    txt = 'https://mhw-db.com/armor?q={"name":{"$like":"%'+nombre.value+'%"},"type":"head"}';
  } else if (document.getElementById("chest").checked == true) {
    txt = 'https://mhw-db.com/armor?q={"name":{"$like":"%'+nombre.value+'%"},"type":"chest"}';
  } else if (document.getElementById("gloves").checked == true) {
    txt = 'https://mhw-db.com/armor?q={"name":{"$like":"%'+nombre.value+'%"},"type":"gloves"}';
  } else if (document.getElementById("waist").checked == true) {
    txt = 'https://mhw-db.com/armor?q={"name":{"$like":"%'+nombre.value+'%"},"type":"waist"}';
  } else if (document.getElementById("legs").checked == true) {
    txt = 'https://mhw-db.com/armor?q={"name":{"$like":"%'+nombre.value+'%"},"type":"legs"}';
  }

  //Variables donde se almacenan los datos obtenidos a traves del fetch.
  let longitud;
  let num = [];
  let armadura = [];
  let rareza = [];
  let defensa = [];
  let fotoArmadura = [];
  let resFuego = [];
  let resAgua = [];
  let resHielo = [];
  let resTrueno = [];
  let resDragon = [];

  //Se realiza el fetch y se almacenan los datos en un loop.
  try{
      const busqueda = await fetch(txt);
      if(!busqueda.ok)
          throw new Error("No encontrado");
      else    
      {   const datos = await busqueda.json();
          console.log(datos);
          longitud = datos.length;
          for (let i = 0; i < longitud; i++){
              num[i] = datos[i].id;
              armadura[i] = datos[i].name;
              armadura[i] = armadura[i].toLowerCase();
              rareza[i] = datos[i].rarity;
              defensa[i] = datos[i].defense.base;
              //Hay algunos campos en el API que se encuentran nulos, asi que tuvimos que crea condicionales para que el programa no tire error y aborte el fetch entero.
              if (datos[i].assets == null)
                {
                  datos[i].assets = "";
                }
              fotoArmadura[i] = datos[i].assets.imageMale;
              resFuego[i] = datos[i].resistances.fire;
              resAgua[i] = datos[i].resistances.water;
              resHielo[i] = datos[i].resistances.ice;
              resTrueno[i] = datos[i].resistances.thunder;
              resDragon[i] = datos[i].resistances.dragon;
          }
      }

  }catch(error){
      console.log(error)
      alerta("Hubo un error en la busqueda.")
  }

  //Se crea un div por cada resultado adquirido para mostrarlos en la pagina.
  for (let i = 0; i < longitud; i++){
    //Propiedades de div
    var div = document.createElement("div");
    div.style.borderWidth = "2px";
    div.style.margin = "30px";
    div.style.borderRadius = "10px";
    div.style.borderStyle = "solid";
    div.style.borderColor = "black";
    div.style.color = "white";
    div.style.backgroundColor = "gray";

    //Se crea una tabla para organizar mejor los datos.
    var table = document.createElement("table");
    var fila = table.insertRow(0);
    var imagen = fila.insertCell(0);
    var texto = fila.insertCell(1);
    table.cellPadding = "15px";
    
    //Foto del arma y sus propriedades.
    let foto = document.createElement("img");
    foto.width = 250;
    foto.style.margin="auto";
    foto.src= fotoArmadura[i];
    foto.style.display = "block";

    //Nombre de la pieza de armadura.
    let titulo = document.createElement("h1");
    titulo.innerHTML = armadura[i];
    titulo.style.fontSize = "30px"

    //Rareza de la pieza de armadura.
    let rarezaArmadura = document.createElement("h3");
    rarezaArmadura.innerHTML = "rareza: "+rareza[i];

    //Puntos de defensa de la pieza de armadura.
    var puntosDefensa = document.createElement("p");
    puntosDefensa.innerHTML = "puntos de defensa: " + defensa[i];

    //Puntos de resistencia al fuego.
    var resisFuego = document.createElement("p");
    resisFuego.innerHTML = "resistencia al fuego: " + resFuego[i];

    //Puntos de resistencia al agua.
    var resisAgua = document.createElement("p");
    resisAgua.innerHTML = "resistencia al agua: " + resAgua[i];

    //Puntos de resistencia al hielo.
    var resisHielo = document.createElement("p");
    resisHielo.innerHTML = "resistencia al hielo: " + resHielo[i];

    //Puntos de resistencia al trueno.
    var resisTrueno = document.createElement("p");
    resisTrueno.innerHTML = "resistencia al trueno: " + resTrueno[i];

    //Puntos de resistencia al dragon.
    var resisDragon = document.createElement("p");
    resisDragon.innerHTML = "resistencia al dragon: " + resDragon[i];

    //Se usa append para añadir los elementos al div de resultados.
    document.getElementById("resultados").append(div);
    div.append(table);
    imagen.append(foto);
    texto.append(titulo);
    texto.append(rarezaArmadura);
    texto.append(puntosDefensa);
    texto.append(resisFuego);
    texto.append(resisAgua);
    texto.append(resisHielo);
    texto.append(resisTrueno);
    texto.append(resisDragon);
  }
}