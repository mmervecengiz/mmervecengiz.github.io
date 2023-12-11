$(document).ready(function(){
  $( "#darklight > button.dark" ).hide();
})
$( "#darklight > button.light" ).click(function() {
  $( "#darklight > button.dark" ).show();
  $( "#darklight > button.light" ).hide();
  $(" #mode ").addClass('dark').removeClass('light');
});

$( "#darklight > button.dark" ).click(function() {
  $( "#darklight > button.light" ).show();
  $( "#darklight > button.dark" ).hide();
  $(" #mode ").addClass('light').removeClass('dark');
});