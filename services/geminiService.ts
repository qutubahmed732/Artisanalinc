
import { GoogleGenAI, Type } from "@google/genai";
import { ProjectAssessment } from "../types";

let ai: InstanceType<typeof GoogleGenAI> | null = null;
function getClient() {
  if (!ai) ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  return ai;
}

const ASSESSMENT_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    score: {
      type: Type.NUMBER,
      description: "A score from 0 to 100 on how well this project aligns with a boutique, high-craft software agency's values.",
    },
    reasoning: {
      type: Type.STRING,
      description: "A brief, sophisticated explanation of the alignment or lack thereof.",
    },
    alignment: {
      type: Type.STRING,
      enum: ["High", "Medium", "Low"],
      description: "The categorical alignment of the project.",
    },
  },
  required: ["score", "reasoning", "alignment"],
};

export const assessProjectAlignment = async (projectDescription: string): Promise<ProjectAssessment> => {
  try {
    const response = await getClient().models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are the Lead Architect at Echelon Labs, a boutique software firm that only takes on projects that are technologically challenging, creatively fulfilling, and ethically sound. We value craft over commerce. Assess the following project pitch: "${projectDescription}"`,
      config: {
        systemInstruction: "You are elite, minimalist, and highly selective. You speak with intellectual depth. If a project sounds like a generic CRUD app or just 'for profit', you are polite but dismissive. If it involves complex systems, novel experiences, or humanitarian impact, you are intrigued.",
        responseMimeType: "application/json",
        responseSchema: ASSESSMENT_SCHEMA,
      },
    });

    const result = JSON.parse(response.text || '{}');
    return result as ProjectAssessment;
  } catch (error) {
    console.error("Gemini assessment failed:", error);
    return {
      score: 0,
      reasoning: "Our neural assessment link is currently down. Please reach out via traditional channels.",
      alignment: "Low"
    };
  }
};
