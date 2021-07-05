// libs
@@include('../../node_modules/jquery/dist/jquery.min.js')
@@include('../../node_modules/jquery.maskedinput/src/jquery.maskedinput.js')
@@include('../../node_modules/select2/dist/js/select2.min.js')

@@include('map-init.js')

window.addEventListener("load", function(){
const body = document.querySelector("body");

@@include('webP.js')
@@include('header.js')
@@include('dropOut.js')
@@include('mask.js')
@@include('modal.js')
@@include('select2-init.js')
@@include('validate.js')

})



