// require("dotenv").config();
const Trello = require('trello');
const dotenv = require('dotenv');

dotenv.config();

if (!process.env.TOKEN && !process.env.KEY) {
  throw new Error('No hay configuración con Api Key y con Token');
}

const trello = new Trello(process.env.KEY, process.env.TOKEN);
const cardTitle = `Card Nueva ${new Date()}`;

trello.addCard(
  cardTitle,
  'LaunchX Card Description',
  '626f029b6ddf982c4b4e5ff8',
  (error, trelloCard) => {
    if (error) {
      // console.error("Could'n add card: ", Object.keys(error.response));
      console.error("Couldn't add card: ", error.response.statusCode);
      return;
    }

    console.log('Added card:', trelloCard);
  }
);
