import React from 'react';

const PasswordInfo = ({ rules }) => {
  const checkStrength = rules.map((rule, index, list) => {
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
    <div>
      <h4>Password Strength</h4>
      <ul>{checkStrength}</ul>
    </div>
  );
};

export default PasswordInfo;
