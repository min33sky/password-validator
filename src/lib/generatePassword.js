/**
 * 비밀번호 생성 모듈
 */

const SPECIALS = '!@#$%^&*()_+{}:"<>?|[]\',./`~';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const ALL = `${SPECIALS}${LOWERCASE}${UPPERCASE}${NUMBERS}`;

// 1부터 시작하는 배열을 만들어준다. (인덱스 값이 0보다 작아지는 걸 막기 위해서)
const getIterable = length => Array.from({ length }, (_, index) => index + 1);

/**
 * 주어진 문자열 값에서 임의의 문자들을 골라서 배열로 리턴
 * @param {string} set
 * @param {number} min
 * @param {number} max
 * @returns array
 */
const pick = (set, min, max) => {
  let length = min;

  if (typeof max !== 'undefined') {
    length += Math.floor(Math.random() * (max - min));
  }

  return getIterable(length)
    .map(() => set.charAt(Math.floor(Math.random() * set.length)))
    .join('');
};

/**
 * 입력받은 문자열의 순서를 바꾼다.
 * @param {string} set
 */
const shuffle = set => {
  let array = set.split(''); // 문자열을 배열로 변환
  let length = array.length;
  let iterable = getIterable(length).reverse(); // 배열을 생성하고 역순으로 정렬. ex) [3,2,1]

  let shuffled = iterable.reduce(
    (acc, value, index) => {
      let randomIndex = Math.floor(Math.random() * value);

      // 배열 요소 스왑
      [acc[value - 1], acc[randomIndex]] = [acc[randomIndex], acc[value - 1]];

      return acc;
    },
    [...array],
  );

  return shuffled.join('');
};

const generatePassword = () => {
  // 비밀번호를 생성
  let password =
    pick(SPECIALS, 1) +
    pick(LOWERCASE, 1) +
    pick(NUMBERS, 1) +
    pick(UPPERCASE, 1) +
    pick(ALL, 4, 12);

  // 생성한 비밀번호를 섞어서 리턴한다.
  return shuffle(password);
};

export default generatePassword;
