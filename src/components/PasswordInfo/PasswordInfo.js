import React from 'react';

/**
 * 패스워드 검증 상태에 관한 컴포넌트
 * @param {Array} rules 검증 조건
 */
const PasswordInfo = ({ rules }) => {
  const checkStrength = rules.map(rule => {
    if (rule.isCompleted) {
      return (
        <li key={rule.key}>
          <s>{rule.rule.message}</s>
        </li>
      );
    } else {
      return <li key={rule.key}>{rule.rule.message}</li>;
    }
  });
  return (
    <>
      <h4>Password Strength</h4>
      <ul>{checkStrength}</ul>
    </>
  );
};

export default PasswordInfo;
