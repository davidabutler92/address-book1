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
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}