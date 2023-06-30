const path = require('path');
const fs = require('fs');

class Ticket{

    constructor(){
        this.last       = 0;
        this.today      = new Date().getDate();
        this.tickets    = [];
        this.last4      = [];

        this.init();
    }

    get toJson(){
        return {
            last:       this.last,
            today:      this.today,
            tockets:    this.tickets,
            last4:      this.last4
        }
    }

    init(){
        const { last, today, tickets,last4 } = require('../data/data.json');
        if(today == this.today){
            this.last       = last,
            this.tickets    = tickets;
            this.last4      = last4
        }
        else{
            // it's other day
            this.saveDB();
        
        }
    }
    saveDB(){
        const filePath = path.join(__dirname, '../data/data.json');
        fs.writeFileSync(filePath, JSON.stringify(this.toJson));
    }
}

module.exports = Ticket;