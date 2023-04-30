export const generateKeyboardElements = (elementsCount, elementsClassName) => {
  const keyboardElementsArr = [];
  for (let i = 0; i < elementsCount; i += 1) {
    const keyboardElement = document.createElement('div');
    keyboardElement.className = elementsClassName;
    keyboardElementsArr.push(keyboardElement);
  }
  return keyboardElementsArr;
};

export const addKeyboardKeyValues = (keyboardKeysArr, allKeyValues) => {
  for (let i = 0; i < keyboardKeysArr.length; i += 1) {
    for (let j = 0; j < keyboardKeysArr[i].length; j += 1) {
      keyboardKeysArr[i][j].classList.add(allKeyValues[i][j].code);

      const engKey = document.createElement('span');
      const rusKey = document.createElement('span');

      engKey.classList.add('eng');
      rusKey.classList.add('rus');

      const caseDownEng = document.createElement('span');
      const caseUpEng = document.createElement('span');
      const shiftCapsEng = document.createElement('span');
      const capsEng = document.createElement('span');

      const caseDownRus = document.createElement('span');
      const caseUpRus = document.createElement('span');
      const shiftCapsRus = document.createElement('span');
      const capsRus = document.createElement('span');

      caseDownEng.classList.add('caseDown');
      caseUpEng.classList.add('caseUp');
      caseUpEng.classList.add('hidden');
      shiftCapsEng.classList.add('shiftCaps');
      shiftCapsEng.classList.add('hidden');
      capsEng.classList.add('caps');
      capsEng.classList.add('hidden');

      caseDownRus.classList.add('caseDown');
      caseUpRus.classList.add('caseUp');
      caseUpRus.classList.add('hidden');
      shiftCapsRus.classList.add('shiftCaps');
      shiftCapsRus.classList.add('hidden');
      capsRus.classList.add('caps');
      capsRus.classList.add('hidden');

      caseDownEng.innerText = allKeyValues[i][j].eng.caseDown;
      caseUpEng.innerText = allKeyValues[i][j].eng.caseUp;

      caseDownRus.innerText = allKeyValues[i][j].rus.caseDown;
      caseUpRus.innerText = allKeyValues[i][j].rus.caseUp;

      keyboardKeysArr[i][j].append(engKey);
      keyboardKeysArr[i][j].append(rusKey);

      engKey.append(caseDownEng);
      engKey.append(caseUpEng);

      rusKey.append(caseDownRus);
      rusKey.append(caseUpRus);
    }
  }
};
