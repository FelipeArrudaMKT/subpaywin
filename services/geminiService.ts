
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getMarketInsight() {
  // Safe racing to prevent long waits
  const timeoutPromise = new Promise<string>((resolve) => 
    setTimeout(() => resolve("Estratégia é a alma do lucro. Entre com inteligência no mercado."), 3000)
  );

  const fetchPromise = (async () => {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Gere uma 'dica de estratégia' curta e persuasiva para apostas esportivas hoje. Em português, máximo 15 palavras. Foco em disciplina e análise.",
        config: {
          temperature: 0.9,
        }
      });
      return response.text || "Analise o mercado com frieza e maximize seus resultados hoje.";
    } catch (error) {
      console.error("Gemini insight error:", error);
      return "Estratégia é a alma do lucro. Entre com inteligência no mercado.";
    }
  })();

  return Promise.race([fetchPromise, timeoutPromise]);
}
