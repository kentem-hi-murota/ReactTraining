function Bingo() {
  const getCandidateNumbersArray = (rowIndex: number): number[] => {
    return [...Array(15)].map((_, i) => i + 1 + 15 * (rowIndex - 1));
  };

  const shuffleArray = (array: number[]): number[] => array.sort(() => 0.5 - Math.random());
  const transposeArray = (array: string[][]): string[][] => array[0].map((_, c) => array.map((r) => r[c]));

  const generateBingoSheet = (): string[][] => {
    const bingoSheet: string[][] = [...Array(5)].map(() => [...Array(0)]);
    for (let row = 1; row < 6; row++) {
      const candidate: number[] = shuffleArray(getCandidateNumbersArray(row));
      bingoSheet[row - 1] = candidate.slice(0, 5).toString().split(',');
    }
    bingoSheet[2][2] = 'FREE';

    return transposeArray(bingoSheet);
  };

  const bingoSheet: string[][] = generateBingoSheet();

  return (
    <div>
      {'BINGO'.split('').map((char) => (
        <div key={char}>{char}</div>
      ))}
      {bingoSheet.map((row, index) => {
        return (
          <div key={index}>
            {row.map((number) => (
              <div key={number}>{number}</div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Bingo;
