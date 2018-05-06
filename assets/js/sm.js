function setFocus(aField) {     
     document.forms[0][aField].focus();
}
     
function isAnEmailAddress(aTextField) {    
     if (document.forms[0][aTextField].value.length<5) {
          return false;
     }
     else if (document.forms[0][aTextField].value.indexOf("@") < 3) {
          return false;
     }
     else if (document.forms[0][aTextField].value.length - document.forms[0][aTextField].value.indexOf("@") < 4) {
          return false;
     }
     else 
     { 
          return true; 
     }
}
     
function isEmpty(aTextField) {
     if ((document.forms[0][aTextField].value.length==0) || (document.forms[0][aTextField].value==null)) {
          return true;
     }
     else 
     { 
          return false; 
     }
}

function validate() {

     if (isEmpty("name")) {
          setFocus("name");
          return false;
     }
     
     if (isEmpty("message")) {
          setFocus("message");
          return false;
     }
     
     if (!isAnEmailAddress("email")) {
          setFocus("email");
          return false;
     }
     return true;

}