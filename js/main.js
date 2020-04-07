//BL for AddressBook   //AdressBook is the constructor
function AddressBook() { //The AddressBook object contains
  this.contacts = []//this property:An empty array :contacts:
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {//This method addContact
  contact.id = this.assignId();//This creates an id property on a Contact object
  this.contacts.push(contact);//takes the contact object as argument calls AB contacts array by call with this. Then PUSHS to addContact
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;//this will incremement Id propetrty by 1
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {//Method finds contact
  for (var i=0; i< this.contacts.length; i++) {//by looping through AB.cont
    if(this.contacts[i]) {
      if (this.contacts[i].id == id) {//when found t/f it will close or retrn
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for(var i=0; i<this.contacts.length; i++) {
    if(this.contacts[i]) {
      if(this.contacts[i].id === id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false
}
//BL for Contacts
function Contact(firstName, lastName, phoneNumber, email, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.email = email;
  this.address = []; //This will be an empty array, we will need to make a constructor to add to it
}

Contact.prototype.addAddress = function() {
  this.address.push(contact);
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

//UI Logic
var addressBook =new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
  htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};

function showContact(contactId) {
  var contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  $(".email").html(contact.email);
  $(".address").html(contact.address);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id); 
    //NEW CODE 
    $("#buttons").on("click", ".deleteButton", function() {
      addressBook.deleteContact(this.id);
      $("#show-contact").hide();
      displayContactDetails(addressBook);
    });
  });
};



$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var inputtedEmail = $("input#new-email").val();
    var inputtedAddress = $("input#new-address").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail, inputtedAddress);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook); 
  })
})
