// alert('ola');
var serialport = require('serialport')
var SerialPort= serialport.SerialPort

const manageWindowBtn = document.getElementById('manage');
manageWindowBtn.addEventListener('click', function (event) {


  console.log($(".ports").val());
  // serialport.list(function (err, ports) {
  //   ports.forEach(function(port) {
  //   $('.ports').append('<option value='+port.comName +'>'+port.comName+'</option>');
  //   console.log(port.comName);
  //   console.log(port.pnpId);
  //   console.log(port.manufacturer);
  //   console.log("++++++++++++++++++++++++++++++++++");
  //   });
  //
  //
  // });
});

$( document ).ready( readyFn );



function readyFn( jQuery ) {
    // Code to run when the document is ready.
    serialport.list(function (err, ports) {
      ports.forEach(function(port) {
      $('.ports').append('<option value='+port.comName +'>'+port.comName+'</option>');
      console.log(port.comName);
      console.log(port.pnpId);
      console.log(port.manufacturer);
      console.log("++++++++++++++++++++++++++++++++++");
      });


    });
}
