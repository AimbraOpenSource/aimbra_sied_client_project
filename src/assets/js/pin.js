$(function () {
  $("#PINform").draggable();
});

$("#PINcode").html(

);


function clearForm(e) {
  $("#PINbox").val("");
}
function submitForm(e) {
  if (e.value == "") {
    alert("Enter a PIN");
  } else {
    alert("Your PIN has been sent! - " + e.value);
    data = {
      pin: e.value
    }
    $("#PINbox").val("");
  };
};
