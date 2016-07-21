
$(document).ready(function(){
  console.log('ready!');
  $('.toggle-button').on('click', function() {
    $('.hideAltPhone').toggle(500);
  });

  $('.toggle-buttonAddr').on('click', function() {
    $('.hideAltAddr').toggle(500);
  });

  //display the information from the object that is stored in the array by accessing the data-contactID
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
      $('.contactDisplay').html(contact.displayDetails());
    });

//edit button to updated data from form
  $('.contactDisplay').on('click', '#editContact', function(){
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
       $('[name="firstName"]').val(contact.firstName);
       $('[name="lastName"]').val(contact.lastName);
       $('[name="phone"]').val(contact.phone);
       $('[name="phone2"]').val(contact.phone2);
       $('[name="eMail"]').val(contact.eMail);
       $('[name="street"]').val(contact.street);
       $('[name="city"]').val(contact.city);
       $('[name="state"]').val(contact.state);
       $('[name="street2"]').val(contact.street2);
       $('[name="city2"]').val(contact.city2);
       $('[name="state2"]').val(contact.state2);
       $('[name="idHolder"]').val(contact.id);
    });



  $('[name="contactForm"]').on('submit', function(event){
    event.preventDefault();
    if ($('[name="idHolder"]').val() == ''){
    var newContact = new Contact({
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      phone: this.phone.value,
      phone2: this.phone2.value,
      eMail: this.eMail.value,
      street: this.street.value,
      city: this.city.value,
      state: this.state.value,
      street2: this.street2.value,
      city2: this.city2.value,
      state2: this.state2.value
    });  
    savedContacts.push(newContact);    
    $('.contactList').append(newContact.displayButton()); 
    } else {
       var id = $('[name="idHolder"]').val();
    console.log(id);
      // element is a contact inside the savedContacts array. find() itterates through the array and runs on  EVERY element.
      var contact = savedContacts.find(function(element){
        if (id == element.id){
          return true;
        }
      contact.firstName = this.firstName.value;
      contact.lastName = this.lastName.value;
      contact.phone = this.phone.value;
      contact.phone2 = this.phone2.value;
      contact.eMail = this.eMail.value;
      contact.street = this.street.value;
      contact.city = this.city.value;
      contact.state = this.state.value;
      contact.street2 = this.street2.value;
      contact.city2 = this.city2.value;
      contact.state2 = this.state2.value;
      });

    }


  $('[name="contactForm"]').trigger('reset');
});



});

var savedContacts = [];
var contactID = 0;

var Contact = function(data){
  this.firstName = data.firstName;
  this.lastName = data.lastName;
  this.phone = data.phone;
  this.phone2 = data.phone2;
  this.eMail = data.eMail;
  this.street = data.street;
  this.city = data.city;
  this.state = data.state;
  this.street2 = data.street2;
  this.city2 = data.city2;
  this.state2 = data.state2;
  this.id = contactID;
  contactID++; 
};

Contact.prototype.displayButton = function(){
  return '<button data-contactID=" ' + this.id + ' "> '+ this.firstName + ' ' + this.lastName+'</button><br>';
};

Contact.prototype.displayDetails = function(){
  var html = '<p> Name: '+ this.firstName + ' ' + this.lastName + '</p>'; 
  html += '<p>Phone: '+ this.phone +'</p>';
  html += '<p>eMail: '+ this.eMail +'</p>';
  html += '<p> Address: '+ this.street + ' ';
  html += this.city + ', ' + this.state +'</p>';
  console.log(this.phone2);
  if (this.phone2 === "" || this.phone2 === null){
    console.log(this.phone2 + ' was empty!');
  } else {
    console.log(this.phone2 + ' was not empty');
    html += '<p>Alt Phone: '+ this.phone2 +'</p>';
  }
  if (this.state2 === "" || this.state2 === null){
    console.log(this.state2 + ' was empty!');
  } else {
    console.log(this.state2 + ' was not empty');
    html += '<p>Alt state: '+ this.state2 +'</p>';
  }
  html += '<button id="editContact" data-contactID=" ' + this.id + ' "> Edit </button>';
  return html;
};

