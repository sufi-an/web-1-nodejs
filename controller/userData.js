exports.showUsername = async (req, res) => {
  console.log(req.body);
  res.send(`Your name is ${req.body.username}`);
};

exports.getUserInput = async (req, res) => {
  res.send(
    "<form action='/show-username' method='POST'> <input type='text' name='username'/> <button>Submit Name</button> </form>"
  );
};
