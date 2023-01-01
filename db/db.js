const Ticket = require("../models/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }

  /**
   *
   * @param {string} username
   * @param {number} price
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);

    return ticket;
  }

  /**
   * sell multiple ticket
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<Ticket>}
   */
  bulkCreate(username, price, quantity) {
    const result = [];

    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
  }

  //return all tickets
  find() {
    return this.tickets;
  }

  /**
   * find single ticket by ticketId
   * @param {string} ticketId
   */
  findById(ticketId) {
    const ticket = this.tickets.find(
      /**
       * doing annotated for intelligence support id
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id === ticketId
    );

    return ticket;
  }

  // Update ticket info
  updateById() {}

  //delete
  deleteById() {}

  // Draw
  draw() {}
}

const myDB = new MyDB();
module.exports = myDB;
