export function createThread(prompt: string) {
  return {
    id: crypto.randomUUID(),
    prompt,
  };
}
