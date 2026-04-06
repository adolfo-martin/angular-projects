import { generateText } from "ai";
import { ollama } from "ollama-ai-provider";

const { text } = await generateText({
    model: ollama('phi3:latest', {
        baseURL: 'http://localhost:11434',
    }),
    prompt: 'Who is the best F1 driver',
});

console.log(text);   