$(document).ready(function(){
  console.log('ready!');
  
  //display the additional phone number input
  $('.toggle-button').on('click', function() {
    console.log('clicked on togglePhone');
    $('.hideAltPhone').toggle(500);
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
  //contact information is taken from the form on submit and passed in to the object constructor Contact
  $('[name="contactForm"]').on('submit', function(event){
    event.preventDefault();
    var newContact = new Contact({
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      phone: this.phone.value,
      phone2: this.phone2.value,
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
  this.phone2 = data.phone2;
  this.eMail = data.eMail;
  this.street = data.street;
  this.city = data.city;
  this.state = data.state;
  this.id = contactID;
  contactID++; 
};

Contact.prototype.displayButton = function(){
  return '<button data-contactID=" ' + this.id + ' "> '+ this.firstName + ' ' + this.lastName+ '</button><br>';
};

Contact.prototype.displayDetails = function(){
  var html = '<p> Name: '+ this.firstName + ' ' + this.lastName + '</p>'; 
  html += '<p>Phone: '+ this.phone +'</p>';
  html += '<p>eMail: '+ this.eMail +'</p>';
  html += '<p> Address: '+ this.street + ' ';
  html += this.city + ', ' + this.state +'</p>';
  html += '<p class="editButton" data-contactID=" ' + this.id + ' ">+Edit</p><br>';
  console.log(this.phone2);
  if (this.phone2 === "" || this.phone2 === null){
    console.log(this.phone2 + ' was empty!');
    return html;
  } else {
    console.log(this.phone2 + ' was not empty');
    html += '<p>Alt Phone: '+ this.phone2 +'</p>';
    return html;
  }
};

/*
$('[name="editForm"]').on('submit', function(event){
  event.preventDefault();  
  var id = $(this).attr('data-contactID');
  console.log(id);
  var newEdit = function(){ for (var key in savedContacts[id]){
    this.firstName = this.firstName.value,
    this.lastName= this.lastName.value,
    this.phone= this.phone.value,
    this.phone2= this.phone2.value,
    this.eMail= this.eMail.value,
    this.street= this.street.value,
    this.city= this.city.value,
    this.state= this.state.value;
  }
};
console.log(newEdit);
$('.contactList').append(newEdit.displayButton());
});  

$(".contactDisplay").on('click', '.editButton', function() {
    console.log('clicked on edit');
    $('.hideEdit').toggle(500);
  }); */