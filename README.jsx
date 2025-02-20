import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quizData = [
  { name: "水", formula: "H₂O" },
  { name: "アンモニア", formula: "NH₃" },
  { name: "エタノール", formula: "C₃H₆O" },
  { name: "二酸化炭素", formula: "CO₂" },
  { name: "酢酸", formula: "CH₃COOH" },
  { name: "炭酸", formula: "H₂CO₃" },
  { name: "炭酸水素ナトリウム", formula: "NaHCO₃" },
  { name: "炭酸ナトリウム", formula: "NaCO₃" },
  { name: "硝酸", formula: "HNO₃" },
  { name: "硝酸カリウム", formula: "KNO₃" },
  { name: "酸化銅", formula: "CuO" },
  { name: "酸化マグネシウム", formula: "MgO" },
  { name: "酸化銀", formula: "Ag₂O" },
  { name: "酸化鉄", formula: "FeO" },
  { name: "酸化アルミニウム", formula: "Al₂O₃" },
  { name: "水酸化ナトリウム", formula: "NaOH" },
  { name: "水酸化カリウム", formula: "KOH" },
  { name: "水酸化カルシウム", formula: "Ca(OH)₂" },
  { name: "水酸化バリウム", formula: "Ba(OH)₂" },
  { name: "塩化ナトリウム", formula: "NaCl" },
  { name: "塩化水素", formula: "HCl" },
  { name: "塩化銀", formula: "AgCl" },
  { name: "塩化銅", formula: "CuCl₂" },
  { name: "塩化アンモニウム", formula: "NH₄Cl" },
  { name: "硫化鉄", formula: "FeS" },
  { name: "硫化水素", formula: "H₂S" },
  { name: "硫化銅", formula: "CuS" },
  { name: "硫酸", formula: "H₂SO₄" },
  { name: "硝酸バリウム", formula: "BaSO₃" },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(
    quizData[Math.floor(Math.random() * quizData.length)]
  );
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (userAnswer.trim() === currentQuestion.formula) {
      setFeedback("正解！🎉");
    } else {
      setFeedback(`不正解。正しい答え: ${currentQuestion.formula}`);
    }
  };

  const handleNext = () => {
    setUserAnswer("");
    setFeedback("");
    setCurrentQuestion(quizData[Math.floor(Math.random() * quizData.length)]);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <Card className="mb-4">
        <CardContent>
          <h1 className="text-2xl font-bold mb-2">化学式クイズ</h1>
          <p className="text-lg mb-4">次の化合物の化学式を入力してください：</p>
          <p className="text-xl font-semibold mb-2">{currentQuestion.name}</p>
          <Input
            placeholder="化学式を入力"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="mb-2"
          />
          <Button onClick={handleSubmit} className="mr-2">回答</Button>
          <Button variant="outline" onClick={handleNext}>次の問題</Button>
          {feedback && <p className="mt-4 text-lg font-medium">{feedback}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
