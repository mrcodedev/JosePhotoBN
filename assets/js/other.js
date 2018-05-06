function _(id) {
     return document.getElementById(id);
}

function validateName(name) {
     if(name.length > 0) {
          return true;
     }else{
          return false;
     }
}

function validateEmail(email) {
     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(String(email).toLowerCase());
 }

function validatePhone(phone) {
     var re = (/^\d{9}$/);
     return re.test(parseInt(phone));
}

function validateAddress(address) {
     if(address.length > 0) {
          return true;
     }else{
          return false;
     }
}

function validateMessage(message) {
     if(message.length > 0) {
          return true;
     }else{
          return false;
     }
}

 document.getElementById('name').addEventListener('input', function()
 {
     var $statusname = $("#statusname");
     var name = $("#name").val();
     if (name.length > 0) 
     {
          $statusname.text("Nombre válido :)");
          $statusname.css("color", "green");
     } else {
          $statusname.text("Nombre inválido :(");
          $statusname.css("color", "red");
     }
 });

 document.getElementById('email').addEventListener('input', function()
 {
     var $statusmail = $("#statusmail");
     var email = $("#email").val();
     $statusmail.text("");

     if (validateEmail(email)) {
          $statusmail.text("Email válido :)");
          $statusmail.css("color", "green");
     } else {
          $statusmail.text("Email inválido :(");
          $statusmail.css("color", "red");
     }
 });

 document.getElementById('tel').addEventListener('input', function()
 {
     var $statustel = $("#statustel");
     var telefono = $("#tel").val();
     $statustel.text("");

     if (validatePhone(telefono)) {
          $statustel.text("Teléfono válido :)");
          $statustel.css("color", "green");
     } else {
          $statustel.text("Teléfono inválido :(");
          $statustel.css("color", "red");
     }
 });

 document.getElementById('address').addEventListener('input', function()
 {
     var $statusaddress = $("#statusaddress");
     var address = $("#address").val();
     if (address.length > 0) 
     {
          $statusaddress.text("Dirección válida :)");
          $statusaddress.css("color", "green");
     } else {
          $statusaddress.text("Dirección inválida :(");
          $statusaddress.css("color", "red");
     }
 });

 document.getElementById('message').addEventListener('input', function()
 {
     var $statusmessage = $("#statusmessage");
     var message = $("#message").val();
     if (message.length > 0) 
     {
          $statusmessage.text("Texto válido :)");
          $statusmessage.css("color", "green");
     } else {
          $statusmessage.text("Texto inválido :(");
          $statusmessage.css("color", "red");
     }
     return false;
 });

function submitForm()
{
     if(validateName(_("name").value) === true && validateEmail(_("email").value) === true && validatePhone(_("tel").value) === true && validateAddress(_("address").value) === true && validateMessage(_("message").value) === true) {
          _("submit").disabled = true;
          _("status").innerHTML = 'Espera un momento...';
          var formdata = new FormData();
          formdata.append("name", _("name").value);
          formdata.append("email", _("email").value);
          formdata.append("tel", _("tel").value);
          formdata.append("address", _("address").value);
          formdata.append("message", _("message").value);
          var ajax = new XMLHttpRequest();
          ajax.open("POST", "../assets/sm.php");
          ajax.onreadystatechange = function() 
          {
               if(ajax.readyState == 4 && ajax.status == 200)
               {
                    if(ajax.responseText == "success")
                    {
                         _("formulario").innerHTML = '<h2>¡Tu mensaje ha sido enviado exitosamente!</h2><br><p>Trataré de contestarte en menos de 24h :)</p>';
                    }
                    else
                    {
                         _("status").innerHTML = ajax.responseText;
                         _("submit").disabled = false;
                    }
                    if(ajax.responseText == "campovacio")
                    {
                         //TEXTO HOUSTON TENEMOS UN PROBLEMA
                    }
               }
          }
          ajax.send(formdata);
     }else{
          if(validateName(_("name").value) == false)
          {
               var $statusname = $("#statusname");
               $statusname.text("Nombre inválido :(");
               $statusname.css("color", "red");
               console.log("Error en Nombre");
          }

          if(validateEmail(_("email").value) == false)
          {
               var $statusmail = $("#statusmail");
               $statusmail.text("Email inválido :(");
               $statusmail.css("color", "red");
               console.log("Error en Email");
          }

          if(validatePhone(_("tel").value) == false)
          {
               var $statustel = $("#statustel");
               $statustel.text("Teléfono inválido :(");
               $statustel.css("color", "red");
               console.log("Error en Teléfono");
          }

          if(validateAddress(_("address").value) == false)
          {
               var $statusaddress = $("#statusaddress");
               $statusaddress.text("Dirección inválida :(");
               $statusaddress.css("color", "red");
               console.log("Error en Dirección");
          }

          if(validateMessage(_("message").value) == false)
          {
               var $statusmessage = $("#statusmessage");
               $statusmessage.text("Mensaje inválido :(");
               $statusmessage.css("color", "red");
               console.log("Error en Mensaje");
          }
     }
}