import React from 'react';
import classNames from 'classnames/bind';
import styles from './PasswordInput.module.scss';

const cx = classNames.bind(styles);

/**
 * 패스워드 인풋
 * @param {*} param0
 */
const PasswordInput = ({ name, value, onChange, visible }) => {
  return (
    <div className={cx('wrapper')}>
      <input
        className={cx('input')}
        type={visible ? 'text' : 'password'}
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Input Password"
      />
    </div>
  );
};

export default PasswordInput;
