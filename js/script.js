
$(document).ready(function(){
console.log('ready!');
 
$('#callContact').click(function(){
    console.log('callContact clicked');
    var html = '<p> Name: '+ savedContact[0].newContact.firstName + ' ' + savedContact[0].newContact.lastName + '</p>'; 
    html += '<p>Phone: '+ savedContact[0].newContact.phone +'</p>';
    html += '<p>eMail: '+ savedContact[0].newContact.eMail +'</p>';
    html += '<p> Address: '+ savedContact[0].newContact.street + ' ';
    html += savedContact[0].newContact.city + ', ' +savedContact[0].newContact.state +'</p>';

    $('.contactDisplay').html(html);
  });

});
var savedContact = [];

 var Contact = function(data){
    this.firstName = data.firstName,
    this.lastName = data.lastName,
    this.phone = data.phone,
    this.eMail = data.eMail,
    this.street = data.street,
    this.city = data.city,
    this.state = data.state;
  };


var createNewContact = function(form){
    var newContact = new Contact({
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      phone: form.phone.value,
      eMail: form.eMail.value,
      street: form.street.value,
      city: form.city.value,
      state: form.state.value
    });
    savedContact.push({newContact});  
    var storageNumber = 0;
    $('.contactList').append('<button id="' + storageNumber +'"> '+ newContact.firstName + ' ' + newContact.lastName+'</button><br>');
    storageNumber++;  
  };
