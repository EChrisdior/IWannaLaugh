import assert from "node:assert";
import { getRandomJoke, jokes } from "../src/jokes.js";

const joke = getRandomJoke();
assert.strictEqual(typeof joke, "string", "Joke must be a string");
assert.ok(joke.length > 0, "Joke must not be empty");
assert.ok(jokes.includes(joke), "Returned joke must exist in jokes array");

console.log("✅ Joke module tests passed.");
