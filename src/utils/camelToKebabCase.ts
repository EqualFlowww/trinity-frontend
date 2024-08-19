const camelToKebabCase = (str: string) => {
  return str
    .split('') // 문자열을 각 문자로 나눠 배열로 변환
    .map((char) => {
      if (char === char.toUpperCase()) {
        // 대문자인 경우
        return `-${char.toLowerCase()}`; // 앞에 '-'를 붙이고 소문자로 변환
      }
      return char; // 소문자는 그대로 반환
    })
    .join(''); // 배열을 다시 문자열로 합침
};

export default camelToKebabCase;
