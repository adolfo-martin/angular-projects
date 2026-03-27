
async function initializeTranslator() {
  const translatorCapabilities = await Translator.availability({
    sourceLanguage: 'en',
    targetLanguage: 'es',
  });

  console.log(translatorCapabilities);

  if (navigator.userActivation.isActive) {
    console.log('User activation is active.');

    const translator = await Translator.create({
      sourceLanguage: 'en',
      targetLanguage: 'es',
      monitor(m) {
        m.addEventListener('downloadprogress', (e) => {
          console.log(`Downloaded ${e.loaded * 100}%`);
        });
      },
    });

    document.querySelector('#tButTranslate').disabled = false;
    return translator;
  } else {
    console.warn('User activation is required to create a Translator instance.');
    return null;
  }
}

// Add a button or event listener to trigger the translator creation
let translator;
document.querySelector('#tButActivateTranslatorService').addEventListener('click', async () => {
  translator = await initializeTranslator();
  if (translator) {
    // Use the translator here
    console.log('Translator ready!');
  }
});


document.querySelector('#tButTranslate').addEventListener('click', async () => {
  document.querySelector('.spinner').style.animationPlayState = 'running';
  const time = performance.now();

  const textToTranslate = document.querySelector('#tTxaSourceText').value;
  const translation = await translator.translate(textToTranslate);
  console.log(`Translation: ${translation}`);

  console.log(`Translation took ${performance.now() - time} ms`);
  document.querySelector('#tTxaTranslatedText').value = translation;
  document.querySelector('.spinner').style.animationPlayState = 'paused';
});

