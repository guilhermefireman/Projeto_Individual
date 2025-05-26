class Event {
    constructor(id, title, description, location, start_date, end_date, organizer_id) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.location = location;
      this.start_date = start_date;
      this.end_date = end_date;
      this.organizer_id = organizer_id;
    }
  }
  module.exports = Event;
  