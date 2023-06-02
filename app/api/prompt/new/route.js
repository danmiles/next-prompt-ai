import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
  const { prompt, userId, tag } = req.body;
  try {
    await connectToDB();

    const newPrompt = await Prompt.create({
      prompt,
      creator: userId,
      tag,
    });

    res.status(201).json({ prompt: newPrompt });
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  } 
}