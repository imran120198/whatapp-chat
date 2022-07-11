export const users = [
  {
    id: 1,
    name: "Aman"
  },
  {
    id: 2,
    name: "Albert"
  }
];

function createConnection(user) {
  console.log(`started lisening to `, user);
  let id;
  function listen(callback) {
    id = setInterval(() => {
      let message = `new Message from ${
        user.name
      } at ${new Date().toTimeString()}`;
      callback(message);
    }, 1000);
  }
  function unsubscribe() {
    clearInterval(id);
  }
  return { listen, unsubscribe };
}

export default createConnection;
