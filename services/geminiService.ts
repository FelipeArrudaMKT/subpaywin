
import { GoogleGenAI } from "@google/genai";

const FALLBACK_MESSAGE = "Estratégia é a alma do lucro. Entre com inteligência no mercado.";

export async function getMarketInsight() {
  const apiKey = process.env.API_KEY;

  // Se não houver chave, retorna o fallback imediatamente sem tentar carregar o SDK
  if (!apiKey || apiKey === "undefined" || apiKey === "") {
    return FALLBACK_MESSAGE;
  }

  // Safe racing to prevent long waits
  const timeoutPromise = new Promise<string>((resolve) => 
    setTimeout(() => resolve(FALLBACK_MESSAGE), 3000)
  );

  const fetchPromise = (async () => {
    try {
      // Inicialização tardia e protegida
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Gere uma 'dica de estratégia' curta e persuasiva para apostas esportivas hoje. Em português, máximo 15 palavras. Foco em disciplina e análise.",
        config: {
          temperature: 0.9,
        }
      });
      return response.text || "Analise o mercado com frieza e maximize seus resultados hoje.";
    } catch (error) {
      console.warn("Gemini Service: Falha ao obter insight, usando fallback.", error);
      return FALLBACK_MESSAGE;
    }
  })();

  return Promise.race([fetchPromise, timeoutPromise]);
}
