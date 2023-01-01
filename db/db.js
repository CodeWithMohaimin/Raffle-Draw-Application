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

  findByUsername(username) {
    const tickets = this.tickets.filter(
      /**
       *
       * @param {Ticket} ticket
       */
      (ticket) => ticket.username === username
    );

    return tickets;
  }

  /**
   *
   * @param {string} ticketId
   * @param {{username:string, price:number}} ticketBody
   * @returns {Ticket}
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.updatedAt = new Date();

    return ticket;
  }

  /**
   *
   * @param {string} ticketId
   */
  deleteById(ticketId) {
    const index = this.tickets.findIndex((item) => ticket.id === ticketId);

    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * @param {number} winnerCount
   * @returns {Array<Ticket>}
   */
  draw(winnerCount) {
    let indexes = new Array(winnerCount);
    for (let i = 0; i < indexes.length; i++) {
      let index = Math.floor(Math.random() * this.tickets.length);
      while (indexes.includes(index)) {
        index = Math.floor(Math.random() * this.tickets.length);
      }
      indexes[index];
    }

    const winners = indexes.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDB = new MyDB();
module.exports = myDB;
