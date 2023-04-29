const setKeyboardCase = (isPressed) => {
  if (isPressed) {
    const downKeys = document.querySelectorAll('.caseDown');
    downKeys.forEach((el) => {
      el.classList.add('hidden');
    });
    const upKeys = document.querySelectorAll('.caseUp');
    upKeys.forEach((el) => {
      el.classList.remove('hidden');
    });
  } else {
    const downKeys = document.querySelectorAll('.caseDown');
    downKeys.forEach((el) => {
      el.classList.remove('hidden');
    });
    const upKeys = document.querySelectorAll('.caseUp');
    upKeys.forEach((el) => {
      el.classList.add('hidden');
    });
  }
};

export default setKeyboardCase;
