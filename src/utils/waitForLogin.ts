const waitForLogin = async (): Promise<void> => {
  return new Promise((resolve) => {
    const checkInterval = 500; // 0.5초마다 확인
    const checkGlobalVar = () => {
      if (
        window.common.auth.username &&
        window.common.auth.userInfo &&
        window.common.auth.username !== ''
      ) {
        resolve(); // 글로벌 변수가 true가 되면 Promise를 해결
      } else {
        setTimeout(checkGlobalVar, checkInterval); // 다시 확인
      }
    };

    checkGlobalVar(); // 처음 검사 시작
  });
};

export default waitForLogin;
