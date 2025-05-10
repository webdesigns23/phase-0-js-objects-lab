//Declare Object
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
}

//log attendee name
function logAttendeeName (attendee) {
      return attendee.name;
    }

//log ticket price
function logTicketPrice (attendee) {
      return attendee.ticketPrice;
    }

//undate ticket
function updateTicketType (attendee, newTicketType) {
      return attendee.ticketType = newTicketType;
}

//remove the event property
function removeEventProperty (attendee) {
      return delete attendee.event;
}

//Add a checked in property
function addCheckedInProperty (attendee) {
      return attendee.checkedIn = true;
}


//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};