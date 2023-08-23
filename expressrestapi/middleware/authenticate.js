const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

isAdmin = async (req, res, next) => {
    const url = `http://127.0.0.1:8080/api/test/admin`;
    const options = {
      method: 'GET',
      headers: {
        'x-access-token': req.headers["x-access-token"]
      }
    };
    await fetch(url, options)
      .then(result => result.json())
      .then(json => {
        try {
          if (json.message == "Unauthorized!") {
            res.send(json.message);
            return
          }
          if (json.message == "No token provided!") {
            res.send(json.message);
            return
          }
          next();
          return
        }catch{
          res.status(500).send('Internal error!')
        }
      })
      .catch(err => res.send('error:' + err));
};

isModerator = async (req, res, next) => {
  const url = `http://127.0.0.1:8080/api/test/mod`;
    const options = {
      method: 'GET',
      headers: {
        'x-access-token': req.headers["x-access-token"]
      }
    };
    await fetch(url, options)
      .then(result => result.json())
      .then(json => {
        try {
          if (json.message == "Unauthorized!") {
            res.send(json.message);
          }
          if (json.message == "No token provided!") {
            res.send(json.message);
          }
          next();
          return
        }catch{
          res.status(500).send('Internal error!')
        }
      })
      .catch(err => res.send('error:' + err));
};

isUser = async (req, res, next) => {
  const url = `http://127.0.0.1:8080/api/test/user`;
    const options = {
      method: 'GET',
      headers: {
        'x-access-token': req.headers["x-access-token"]
      }
    };
    console.log("fetch")
    await fetch(url, options)
      .then(result => result.json())
      .then(json => {
        try {
          if (json.message == "Unauthorized!") {
            res.send(json.message);
          }
          if (json.message == "No token provided!") {
            res.send(json.message);
          }
          next();
          return
        }catch{
          res.status(500).send('Internal error!')
        }
      })
      .catch(err => res.send('error:' + err));
};

const authenticate = {
  isAdmin: isAdmin,
  isModerator: isModerator,
  isUser: isUser
};
module.exports = authenticate;
