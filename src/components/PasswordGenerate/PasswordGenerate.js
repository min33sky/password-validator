import React from 'react';
import classNames from 'classnames/bind';
import styles from './PasswordGenerate.module.scss';

const cx = classNames.bind(styles);

const PasswordGenerate = ({ onClick, children }) => {
  return (
    <button className={cx('generate')} onClick={onClick}>
      {children}
    </button>
  );
};

export default PasswordGenerate;
