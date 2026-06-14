const React = require('react');

function Heading({ as: As = 'h2', children, ...rest }) {
  return React.createElement(As, rest, children);
}

module.exports = Heading;
