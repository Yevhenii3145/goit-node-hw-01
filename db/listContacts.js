const fs = require("fs/promises");

const contactsPath = require("./filePath");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  console.log(contacts[1]);
  return contacts;
};

module.exports = listContacts;
