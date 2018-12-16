import React, { Component } from 'react';
import rules from 'lib/rules';
import classNames from 'classnames/bind';
import styles from './Password.module.scss';
import generatePassword from 'lib/generatePassword';
import PasswordInput from 'components/PasswordInput/PasswordInput';
import PasswordVisible from 'components/PasswordVisible/PasswordVisible';
import PasswordInfo from 'components/PasswordInfo/PasswordInfo';
import PasswordGenerate from 'components/PasswordGenerate/PasswordGenerate';

const cx = classNames.bind(styles);

class Password extends Component {
  state = {
    strength: {}, // 비밀번호의 보안 수준을 위한 객체
    password: '',
    visible: false,
    ok: false,
  };

  /**
   * 패스워드 검증
   */
  checkStrength = e => {
    let password = e.target.value;
    this.setState({ password });
    let strength = {};
    console.log(this.props);
    Object.keys(this.props).forEach((key, index, list) => {
      if (this.props[key] && rules[key].pattern.test(password)) {
        strength[key] = true;
      }
    });

    this.setState({ strength }, () => {
      // 조건에 모두 일치한다면 배열의 길이가 일치한다.
      if (
        Object.keys(this.state.strength).length ===
        Object.keys(this.props).length
      ) {
        this.setState({ ok: true });
      } else {
        this.setState({ ok: false });
      }
    });
  };

  /**
   * 비밀번호 가시성 토글
   */
  toggleVisibility = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  /**
   * 비밀번호 자동 생성
   */
  generate = () => {
    this.setState(
      {
        visible: true,
        password: generatePassword(),
      },
      () => {
        this.checkStrength({ target: { value: this.state.password } });
      },
    );
  };

  render() {
    const processedRules = Object.keys(this.props).map(key => {
      if (this.props[key]) {
        return {
          key,
          rule: rules[key],
          isCompleted: this.state.strength[key] || false,
        };
      }
    });

    const { visible, password, ok } = this.state;
    const { checkStrength, toggleVisibility, generate } = this;

    return (
      <div className={cx('container')}>
        <h1>Password Input Wiget</h1>
        <div className={cx('wrapper')}>
          <label className={cx('label')}>Password</label>
          <PasswordInput
            name="password"
            onChange={checkStrength}
            value={password}
            visible={visible}
          />
          <PasswordVisible
            className={cx('visible')}
            checked={visible}
            onToggle={toggleVisibility}
          />
          <PasswordInfo rules={processedRules} />
          <div className={cx('buttons')}>
            <PasswordGenerate onClick={generate}>Generate</PasswordGenerate>
            <button
              className={ok ? cx('save', 'ok') : cx('save')}
              disabled={ok ? false : true}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Password;
