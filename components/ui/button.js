import Link from 'next/link';
import React from 'react';
import classes from './button.module.css';

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <Button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};

export default Button;
