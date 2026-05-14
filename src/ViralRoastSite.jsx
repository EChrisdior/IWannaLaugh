import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const roasts = [
  (name) => `${name}, you don’t look lazy… but your WiFi history says otherwise.`,
  (name) => `${name}, your brain has too many tabs open and at least 3 are frozen.`,
  (name) => `${name}, you bring everyone so much joy… when you leave the room.`,
  (name) => `${name}, if confidence was a currency, you’d still be overdrawn.`,
  (name) => `${name}, your productivity level is basically in airplane mode.`,
  (name) => `${name}, even autocorrect gave up on you.`,
  (name) => `${name}, you’re not late… you’re just extremely time optional.`,
  (name) => `${name}, your life updates are stuck on version 1.0.`,
];

export default function ViralRoastSite() {
  const [name, setName] = useState("You");
  const [roast, setRoast] = useState(roasts[0]("You"));
  const [count, setCount] = useState(0);

  const generateRoast = () => {
    const next = Math.floor(Math.random() * roasts.length);
    setRoast(roasts[next](name || "You"));
    setCount((prevCount) => prevCount + 1);
  };

  const shareText = () => {
    const text = encodeURIComponent(`${roast} 😂 Try it yourself!`);
    const url = `https://wa.me/?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-200 via-pink-300 to-red-400 p-4">
      <Card className="max-w-xl w-full rounded-2xl shadow-2xl">
        <CardContent className="p-8 text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold"
          >
            Roast Me Generator 🔥
          </motion.h1>

          <input
            className="w-full p-3 rounded-xl border text-center"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <motion.p
            key={roast}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg font-medium"
          >
            {roast}
          </motion.p>

          <div className="flex flex-col gap-3">
            <Button type="button" onClick={generateRoast} className="text-lg px-6 py-4 rounded-xl">
              Roast me again 🔥
            </Button>
            <Button type="button" onClick={shareText} variant="secondary" className="text-lg px-6 py-4 rounded-xl">
              Share roast on WhatsApp
            </Button>
          </div>

          <p className="text-sm opacity-70">Roasts generated: {count}</p>
        </CardContent>
      </Card>
    </div>
  );
}
