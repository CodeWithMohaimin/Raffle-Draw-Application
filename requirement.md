# Lottery API

- sell lottery ticket
- Update lottery ticket
- Delete lottery ticket
- get all ticket
- get ticket by id
- bulk buy (user can buy multiple ticket at a time)
- raffle draw

# Ticket Should be

- number (unique)
- user name
- price
- timestamp (created at & updated at)
-

# Routes

- /tickets/t/:ticketsId --> (GET) find single ticket
- /tickets/t/:ticketId --> (PATCH) update ticket by ID
- /tickets/t/:ticketId --> (DELETE) delete ticket by ID
- /tickets/u/:username --> (GET) find ticket for a user
- /tickets/u/:username --> (PATCH) update tickets for a given user
- /tickets/u/:username --> (DELETE) delete all tickets for a given user
- /tickets/bulk --> bulk sell tickets
- /tickets/sell --> create tickets
- /tickets/draw
- /tickets --> find all tickets
