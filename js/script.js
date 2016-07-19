
$(document).ready(function(){
console.log('ready!');
 
$('.contactList').on('click', 'button', function(){
    console.log(this);
    var id = $(this).attr('data-contactID');
    console.log(id);
      // element is a contact inside the savedContacts array. find() itterates through the array and runs on  EVERY element.
    var contact = savedContacts.find(function(element){
      if (id == element.id){
        return true;
      }
    });
    console.log(contact);
    var html = '<p> Name: '+ savedContacts[0].newContact.firstName + ' ' + savedContacts[0].newContact.lastName + '</p>'; 
    html += '<p>Phone: '+ savedContacts[0].newContact.phone +'</p>';
    html += '<p>eMail: '+ savedContacts[0].newContact.eMail +'</p>';
    html += '<p> Address: '+ savedContacts[0].newContact.street + ' ';
    html += savedContacts[0].newContact.city + ', ' +savedContacts[0].newContact.state +'</p>';
    $('.contactDisplay').html(html);
  });

$('[name="contactForm"]').on('submit', function(event){
  event.preventDefault();
  var newContact = new Contact({
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      phone: this.phone.value,
      eMail: this.eMail.value,
      street: this.street.value,
      city: this.city.value,
      state: this.state.value
    });
    savedContacts.push(newContact);    
    $('.contactList').append(newContact.displayButton()); 
});

});

var savedContacts = [];
var contactID = 0;

var Contact = function(data){
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.phone = data.phone;
    this.eMail = data.eMail;
    this.street = data.street;
    this.city = data.city;
    this.state = data.state;
    this.id = contactID;
    contactID++;
  };

Contact.prototype.displayButton = function(){
  return '<button data-contactID=" ' + this.id + ' "> '+ this.firstName + ' ' + this.lastName+'</button><br>';
} ;



