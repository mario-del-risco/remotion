// src/lib/useGoldenGrid.ts
export const useGoldenGrid = (base = 32, steps = 5) => {
  const GOLDEN = 1.618;

  const scale = Array.from({ length: steps * 2 + 1 }, (_, i) => {
    const n = i - steps;
    return Math.round(base * Math.pow(GOLDEN, n));
  });

  const get = (index: number) => scale[index + steps];

  return { scale, get };
};
