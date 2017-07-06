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

    var fullContact = "";
    fullContact = fullContact + "First Name: ";
    fullContact += firstName;
    fullContact += "Last Name: ";
    fullContact += lastName;

    $("ul.contacts").append(fullContact);
    $("ul.contacts").append(lastName);
    $("ul.contacts").append(street);
    $("ul.contacts").append(city);
    $("ul.contacts").append(state);
    $("ul.contacts").append(zip);
    $("ul.contacts").append(phone);
    $("ul.contacts").append(email);


  });
});
