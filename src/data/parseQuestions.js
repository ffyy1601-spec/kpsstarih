export function parseQuestionsFromText(rawText) {
  const lines = rawText.replace(/^\uFEFF/, '').split(/\r?\n/);
  const questions = [];
  let index = 0;

  while (index < lines.length) {
    const numberLine = lines[index].trim();

    if (!/^\d+\.$/.test(numberLine)) {
      index += 1;
      continue;
    }

    index += 1;

    while (index < lines.length && !lines[index].trim()) {
      index += 1;
    }

    const questionParts = [];
    while (index < lines.length && !/^A\)/.test(lines[index].trim())) {
      if (lines[index].trim()) {
        questionParts.push(lines[index].trim());
      }
      index += 1;
    }

    const options = ['A', 'B', 'C', 'D'].map((letter) => {
      const line = (lines[index] || '').trim();

      if (!line.startsWith(`${letter})`)) {
        throw new Error(`Beklenen ${letter} şıkkı bulunamadı: ${numberLine}`);
      }

      index += 1;
      return line.slice(2).trim();
    });

    while (index < lines.length && !lines[index].trim()) {
      index += 1;
    }

    const answerLine = (lines[index] || '').trim();
    const answerMatch = answerLine.match(/^Cevap:\s*([A-D])/);

    if (!answerMatch) {
      throw new Error(`Cevap satırı bulunamadı: ${numberLine}`);
    }

    questions.push({
      questionText: questionParts.join(' '),
      options,
      correctAnswerIndex: ['A', 'B', 'C', 'D'].indexOf(answerMatch[1])
    });

    index += 1;
  }

  return questions;
}
