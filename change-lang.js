const currentLang = localStorage.getItem('keyLang');

export const state = {
  keyLang: currentLang || 'eng',
};

export const getCurrentState = () => state;

export const setLang = (keyLang) => {
  state.keyLang = keyLang;
};

export const setLocalStorage = () => {
  localStorage.setItem('keyLang', state.keyLang);
  console.log('setLocalStorage');
};

export const setKeyboardLang = (keyLang) => {
  const rusKeys = document.querySelectorAll('.rus');
  rusKeys.forEach((el) => {
    el.classList.add('hidden');
  });
  const engKeys = document.querySelectorAll('.eng');
  engKeys.forEach((el) => {
    el.classList.add('hidden');
  });
  const keys = document.querySelectorAll(`.${keyLang}`);
  keys.forEach((el) => {
    el.classList.remove('hidden');
  });
};

export const changeLang = () => {
  let lang = getCurrentState().keyLang;
  if (lang === 'eng') {
    console.log('set rus');
    setLang('rus');
  } else {
    console.log('set eng');
    setLang('eng');
  }
  setLocalStorage();
  lang = getCurrentState().keyLang;
  setKeyboardLang(lang);
};
