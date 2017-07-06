$(function() {
  $("#new-contact").submit(function(event) {
    event.preventDefault();
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zip = $("#zip").val();
    var phone = $("#phone").val();
    var email = $("#email").val();

    $("ul.contacts").append("<li>" + firstName + " " + lastName + "</li>");
    $("ul.contacts").append("<li>" + street + "</li>");
    $("ul.contacts").append("<li>" + city + "</li>");
    $("ul.contacts").append("<li>" + state + "</li>");
    $("ul.contacts").append("<li>" + zip + "</li>");
    $("ul.contacts").append("<li>" + phone + "</li>");
    $("ul.contacts").append("<li>" + email + "</li>");

  });
});
