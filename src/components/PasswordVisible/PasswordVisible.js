import React from 'react';
import classNames from 'classnames/bind';
import styles from './PasswordVisible.module.scss';

const cx = classNames.bind(styles);

/**
 * 패스워드 가시성 체크 컴포넌트
 * @param {booleanm} checked
 * @param {function} onToggle
 */
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
