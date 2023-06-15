const { Configuration, OpenAIApi } = require("openai");
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { inputValue } = req.body;

    const configuration = new Configuration({
      apiKey:"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",
    });
    const openai = new OpenAIApi(configuration);

    try {
      // OpenAI API를 이용하여 MBTI 계산
      const prompt = `object: ${inputValue}
Provide the way how to recycle the object.
Please briefly explain the method in one or two sentances according to the recycling waste separation and discharge method.
Return in Korean`;

      const completions = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 200,
      });

      const originalText = completions.data.choices[0].text.trim().replace(/\n/g, "");

      const recycleway = originalText;
		
	// 입력과 답변 저장하기
const recycle = await prisma.recycle.create({
	data: {
		character: inputValue,
		recycle: originalText,
	},
});

      // 결과를 클라이언트로 반환
      res.status(200).json({ recycleway: recycleway });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "오류가 발생했습니다. 다시 시도해주세요." });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
