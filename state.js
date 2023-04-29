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
