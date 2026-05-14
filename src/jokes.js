export const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I asked my dog what's two minus two. He said nothing.",
  "Why did the bicycle fall over? It was two tired.",
  "I told my computer I needed a break, and it said 'No problem — I'll go to sleep.'",
  "Why did the scarecrow win an award? He was outstanding in his field.",
  "I ordered a chicken and an egg from Amazon. I'll let you know.",
  "What do you call fake spaghetti? An impasta.",
  "I have a joke about construction, but I'm still working on it.",
  "Did you hear about the mathematician who’s afraid of negative numbers? He will stop at nothing to avoid them.",
  "Why don't programmers like nature? It has too many bugs."
];

export function getRandomJoke() {
  const index = Math.floor(Math.random() * jokes.length);
  return jokes[index];
}
