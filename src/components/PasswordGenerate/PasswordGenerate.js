import React from 'react';
import classNames from 'classnames/bind';
import styles from './PasswordGenerate.module.scss';

const cx = classNames.bind(styles);

/**
 * 패스워드 자동 생성 버튼 컴포넌트
 * @param {Function} onClick  패스워드 생성 함수
 * @param {React.ReactNode} children 버튼 이름
 */
const PasswordGenerate = ({ onClick, children }) => {
  return (
    <button className={cx('generate')} onClick={onClick}>
      {children}
    </button>
  );
};

export default PasswordGenerate;
