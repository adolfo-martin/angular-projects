// chrome://flags/#prompt-api-for-gemini-nano

if ('LanguageModel' in self) {
    console.log('LanguageModel is available');
} else {
    alert('LanguageModel is not available');
}

document.querySelector("#tBtnRunPrompt").addEventListener("click", async () => {

    const prompt = document.querySelector("#tTxaPrompt").value;
    console.log(prompt);

    const session = await LanguageModel.create({
        monitor(m) {
            m.addEventListener('downloadprogress', (e) => {
                console.log(`Downloaded ${e.loaded * 100}%`);
            });
        },
        
        initialPrompts: [
            { role: 'system', content: 'You are a helpful and friendly assistant.' },
            { role: 'user', content: 'What is the capital of Italy?' },
            { role: 'assistant', content: 'The capital of Italy is Rome.' },
            { role: 'user', content: 'What language is spoken there?' },
            {
                role: 'assistant',
                content: 'The official language of Italy is Italian. [...]',
            },
        ],
    });

    const response = await session.prompt([
        { role: 'system', content: 'Tu eres un profesor.' },
        {
            role: "user",
            content: prompt
        },
    ]);

    console.log('--------------------');
    console.log(response);

});