// ! See the README ## Crating sessions with JWT for ref.
// require the dependency
const jwt = require('jsonwebtoken');

//! ?
const secret = 'mysecretsshhhhh';
const expiration = '2h';

// export it
module.exports = {
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
