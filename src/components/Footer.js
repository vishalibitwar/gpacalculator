import React, { Fragment } from 'react';
import Emoji from './Emoji';

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <a href="https://github.com/vishalibitwar">Made with <Emoji label="heart" symbol="❤️"/> by vishal</a>
      </div>
      <footer className="text-center text-dark my-2 p-2 ">
        <a href="https://github.com/vishalibitwar">Hacked by a lowly <span> 7 1⁄2</span> CG human <Emoji label="monkey" symbol="🙈"/> </a>
      </footer>
    </Fragment>
  )
}

export default Footer
