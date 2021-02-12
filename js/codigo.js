//Validacion de checkbox
function ConmutarCheck() {
  var chkDfBajo = $("#chkDfBajo");
  var chkDfMedio = $("#chkDfMedio");
  var chkDfAvzd = $("#chkDfAvzd");

  // variables para checkbox2
  var chkCtDpts = $("#chkCtDpts");
  var chkCtHstr = $("#chkCtHstr");
  var chkCtLit = $("#chkCtLit");

  $("#chkDfBajo").change(function (e) {
    if (this.checked) {
      chkDfMedio.prop("checked", false);
      chkDfAvzd.prop("checked", false);
    }
  });

  $("#chkDfMedio").change(function (e) {
    if (this.checked) {
      chkDfBajo.prop("checked", false);
      chkDfAvzd.prop("checked", false);
    }
  });

  $("#chkDfAvzd").change(function (e) {
    if (this.checked) {
      chkDfBajo.prop("checked", false);
      chkDfMedio.prop("checked", false);
    }
  });

  // Validacion del 2do chk
  $("#chkCtDpts").change(function (e) {
    if (this.checked) {
      chkCtHstr.prop("checked", false);
      chkCtLit.prop("checked", false);
    }
  });

  $("#chkCtHstr").change(function (e) {
    if (this.checked) {
      chkCtDpts.prop("checked", false);
      chkCtLit.prop("checked", false);
    }
  });

  $("#chkCtLit").change(function (e) {
    if (this.checked) {
      chkCtDpts.prop("checked", false);
      chkCtHstr.prop("checked", false);
    }
  });
}

$(document).ready(function () {
  $('#divContenido').load("pages/landing.html", ConmutarCheck);

  //
  // $('#divContenido').load("pages/landing.html", ConmutarCheck);

  // $('#btnJugar').click(function () {
  //   console.log("entroooooo!!");
  //   alert("entroooooo!");
  //   CorrerTiempo();
  // });
});

