import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    // In a real app we'd need process.env.GEMINI_API_KEY
    // But since the user might not have it yet, we will mock it safely if the key is missing.
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Return a simulated mock response for the demo
      await new Promise(r => setTimeout(r, 1000));
      return NextResponse.json({ 
        reply: `(Mock Mode) This is what Gemini would say to: "${message}". Please set GEMINI_API_KEY in .env to enable real AI.` 
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Simplistic prompt passing
    const prompt = `You are a helpful, multilingual stadium concierge AI for the FIFA World Cup 2026. Keep answers short and friendly.
User says: ${message}`;
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return NextResponse.json({ reply: response.text });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
