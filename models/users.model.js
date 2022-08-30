const { v4: uuidv4 } = require("uuid");

const users = [
    {
        id: uuidv4(),
        username: "Najmul Hossain",
        email: "najmulh62@gmail.com",
    },
    {
        id: uuidv4(),
        username: "Kamrul Hossain",
        email: "kamrul96@gmail.com",
    },
    {
        id: uuidv4(),
        username: "Harun Amhed",
        email: "harunahmed@gmail.com",
    },
    {
        id: uuidv4(),
        username: "Rafi Hossain",
        email: "rafi@gmail.com",
    },
];

module.exports = users;