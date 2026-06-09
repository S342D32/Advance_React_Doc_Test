import { askGemini } from "@/api/GeminiApi";
import { useState } from "react";
const AiChat = () => {
  const [ask, setAsk] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const handleAsk = async () => {
    try {
      setLoading(true);

      const res = await askGemini(ask);

      setResult(res.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setAsk(e.target.value)}
        className="m-1 p-2 border-2 border-gray-800 rounded-2xl"
        value={ask}
      />

      <button
        onClick={handleAsk}
        disabled={loading || !ask.trim()}
        className="m-3 p-2 border-dark border-2 rounded-lg hover:cursor-pointer bg-amber-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Thinking..." : "Ask"}
      </button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default AiChat;
