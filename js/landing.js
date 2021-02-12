var tiempo_corriendo;
function CorrerTiempo() {
  var tiempo = {
    hora: 0,
    minuto: 0,
    segundo: 0,
  };

  tiempo_corriendo = setInterval(function () {
    // Segundos
    tiempo.segundo++;
    if (tiempo.segundo >= 60) {
      tiempo.segundo = 0;
      tiempo.minuto++;
    }

    // Minutos
    if (tiempo.minuto >= 60) {
      tiempo.minuto = 0;
      tiempo.hora++;
    }

    $("#hour").text(tiempo.hora < 10 ? "0" + tiempo.hora : tiempo.hora);
    $("#minute").text(tiempo.minuto < 10 ? "0" + tiempo.minuto : tiempo.minuto);
    $("#second").text(
      tiempo.segundo < 10 ? "0" + tiempo.segundo : tiempo.segundo
    );
  }, 1000);
}

function DetenerTiempo() {}

function PreguntasDprts() {  
  // var preguntas = [
  //   "¿De que deporte es el kemari uno de los principales antecesores?",
  //   "¿Cuál es el clásico rival del Flamengo (BRA)?",
  //   "¿Qué jugadora de hockey sobre césped ha ganado 7 veces el premio a la mejor jugadora del mundo de 2013?",
  //   "¿Cuántas finales del mundo jugó la Selección Argentina de fútbol?",
  //   "¿Quién marcó el gol 3.500 en Liga del Atlético de Madrid?",
  //   "¿Cuántos mangos por lado tiene el futbolín?",
  //   "¿Cuál es el estilo de natación más rápido?",
  //   "¿Cuántos jugadores componen un equipo de rugby?",
  //   "¿Cuántas puntas de cada color hay en un tablero de backgammon?",
  //   "¿En qué país se inventó el voleibol?",
  // ];

  // var respuestas = [
  //   ["Fútbol", "Ténis", "Rugby", " Karate"],
  //   ["Corinthians", "Palmeiras", "Cruzeiro", "São Paulo"],
  //   ["Luciana Aymar", "Natascha Keller", "Alyson Annan", "Maartje Paumen"],
  //   ["Cuatro", "Cinco", "Seis", "Tres"],
  //   ["Christian Vieri", "Zinedine Zidane", "Luka Modric", "Adrián Escudero"],
  //   ["Cuatro", "Dos", "Cinco", "Uno"],
  //   ["Crol", "Espalda", "Mariposa", "Pecho"],
  //   ["15", "12", "15", "13"],
  //   ["Doce", "Once", "Trece", "Ocho"],
  //   ["Estados Unidos", "Colombia", "Peru", "España"],
  // ];

  var data = {
    Prgnts: {
      Deportes: [
        { Id: 1, Pregunta: "¿De qué deporte es el kemari uno de los principales antecesores?" },
        { Id: 2, Pregunta: "¿Cuál es el clásico rival del Flamengo (BRA)?" },
        { Id: 3, Pregunta: "¿Qué jugadora de hockey sobre césped ha ganado 7 veces el premio a la mejor jugadora del mundo de 2013?"},
        { Id: 4, Pregunta: "¿Cuántas finales del mundo jugó la Selección Argentina de fútbol?"},
        { Id: 5, Pregunta: "¿Quién marcó el gol 3.500 en Liga del Atlético de Madrid?" },
        { Id: 6, Pregunta: "¿Cuántos mangos por lado tiene el futbolín?"},
        { Id: 7, Pregunta: "¿Cuál es el estilo de natación más rápido?"},
        { Id: 8, Pregunta: "¿Cuántos jugadores componen un equipo de rugby?"},
        { Id: 9, Pregunta: "¿Cuántas puntas de cada color hay en un tablero de backgammon?"},
        { Id: 10, Pregunta:"¿En qué país se inventó el voleibol?" },
      ],
      Historia: [
      ],
    },
    Rspsts: {
      Deportes:[
        { 
          IdPregunta : 1, 
          Rspt: [
            {Id: 1, Value: "Fútbol"},
            {Id: 2, Value: "Ténis"},
            {Id: 3, Value: "Rugby"},
            {Id: 4, Value: "Karate"}
          ],
          IdPregunta : 2, 
          Rspt: [
            {Id: 1, Value: "Corinthians"},
            {Id: 2, Value: "Palmeiras"},
            {Id: 3, Value: "Cruzeiro"},
            {Id: 4, Value: "São Paulo"}
          ],
          IdPregunta : 3, 
          Rspt: [
            {Id: 1, Value: "Luciana Aymar"},
            {Id: 2, Value: "Natascha Keller"},
            {Id: 3, Value: "Alyson Annan"},
            {Id: 4, Value: "Maartje Paumen"}
          ],
          IdPregunta : 4, 
          Rspt: [
            {Id: 1, Value: "Cuatro"},
            {Id: 2, Value: "Cinco"},
            {Id: 3, Value: "Seis"},
            {Id: 4, Value: "Tres"}
          ],
          IdPregunta : 5, 
          Rspt: [
            {Id: 1, Value: "Christian Vieri"},
            {Id: 2, Value: "Zinedine Zidane"},
            {Id: 3, Value: "Luka Modric"},
            {Id: 4, Value: "Adrián Escudero"}
          ],
          IdPregunta : 6, 
          Rspt: [
            {Id: 1, Value: "Cuatro"},
            {Id: 2, Value: "Dos"},
            {Id: 3, Value: "Cinco"},
            {Id: 4, Value: "Tres"}
          ],
          IdPregunta : 7, 
          Rspt: [
            {Id: 1, Value: "Crol"},
            {Id: 2, Value: "Espalda"},
            {Id: 3, Value: "Mariposa"},
            {Id: 4, Value: "Pecho"}
          ],
          IdPregunta : 8, 
          Rspt: [
            {Id: 1, Value: "15"},
            {Id: 2, Value: "12"},
            {Id: 3, Value: "15"},
            {Id: 4, Value: "13"}
          ],
          IdPregunta : 9, 
          Rspt: [
            {Id: 1, Value: "Doce"},
            {Id: 2, Value: "Once"},
            {Id: 3, Value: "Trece"},
            {Id: 4, Value: "Ocho"}
          ],
          IdPregunta : 10, 
          Rspt: [
            {Id: 1, Value: "Estados Unidos"},
            {Id: 2, Value: "Colombia"},
            {Id: 3, Value: "Peru"},
            {Id: 4, Value: "España"}
          ]
        }
      ],
      Historia: [
      ],
    }
  };
  
  //indice aleatorio para preguntas, redondeamos el numero y escogemos una al azar dentro del array preguntas
  var prgt = data.Prgnts.Deportes[Math.floor(Math.random() * data.Prgnts.Deportes.length)];
  
  // agregamos el texto en el Div 
  var cntndrPrgnt = "<p class='question'>" + prgt.Pregunta + "</p>";
  $(cntndrPrgnt).appendTo(".askuser");

  //seleccionamos el indice (tiene -1 para que se regrese ya que id empieza en 1 y no en 0)
   var respuestas = data.Rspsts.Deportes[prgt.Id -1].Rspt;
  console.log(respuestas); 


  // var numero =  Object.keys(data.Prgnts.Deportes).indexOf(random);
  // //console.log("El numero es:" + numero); 
 
  //  se deja esta  opcion para consultar checbox console.log(data.Preguntas["Deportes"][0]);
  // pregunta y respuesta por le indice de pregunta  se selecciona el indice de la respuesta
  //Object.keys(data.Rspsts).indexOf(random.Id);

  // var PyR = data.Rspsts.Deportes.Id= random.Id; 

  // console.log("el valor del id es: "+PyR);
 
 
  // var cntndrRspst = "";
  // cntndrRspst =
  //   "" +
  //   "<div class='selection' id='A'>" +
  //   [data.Rspsts.Deportes[prgt.Id - 1].IdPregunta[0]] +
  //   [data.Rspsts.Deportes[prgt.Id - 1].Rspt[0]] 
  //   "</div>" +
  //   "<div class='selection' id='B'>" +
  //   [data.Rspsts.Deportes[prgt.Id - 1].IdPregunta[1]]  +
  //   "</div>" +
  //   "<div class='selection' id='C'>" +
  //   [data.Rspsts.Deportes[prgt.Id - 1].IdPregunta[2]] +
  //   "</div>" +
  //   "<div class='selection' id='D'>" +
  //   [data.Rspsts.Deportes[prgt.Id - 1].IdPregunta[3]]  +
  //   "</div>";
  // $(cntndrRspst).appendTo(".answer");
}

$(document).ready(function () {
  $("#btnJugar").click(function () {
    console.log("entroooooo!!");

    //pasamos los parametros pagina a cargar
    $("#divContenido").load(
      "pages/question1.html",
      // {
      //   // nombre: $("#Name").prop("value"),
      //   // //selcciona los que estan cheked y me trae su id con la propiedad atributo
      //   // dificultad: $(".chkdfclt:checked").attr("id"),
      //   // categoria: $(".chkctegr:checked").attr("id"),
      // },
      PreguntasDprts,CorrerTiempo()
    );
  });
});

// "pages/page1.html",
// CorrerTiempo()

// for(var i=0;i<preguntas.length;i++){
//   console.log(preguntas[i]["nombre"]);
//  }
// $.each(preguntas,function(indice,val){
//   console.log( indice + val);
// } )
