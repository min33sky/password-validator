import React from 'react';
import classNames from 'classnames/bind';
import styles from './PasswordVisible.module.scss';

const cx = classNames.bind(styles);

const PasswordVisible = ({ checked, onToggle }) => {
  return (
    <div className={cx('wrapper')}>
      <label>
        <input
          className={cx('visible')}
          type="checkbox"
          checked={checked}
          onChange={onToggle}
        />
        Show Password
      </label>
    </div>
  );
};

export default PasswordVisible;
