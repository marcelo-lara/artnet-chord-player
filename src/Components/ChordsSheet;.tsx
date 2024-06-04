import React, { useState } from 'react';
import './ChordsSheet.css';

interface ChordsSheetProps {
  chords_data: { chord_complex_pop: string, curr_beat_time: number, bar_num: number }[];
}

const ChordsSheet: React.FC<ChordsSheetProps> = ({ chords_data }) => {
  const [selectedChord, setSelectedChord] = useState<{ barIndex: number, curr_beat: number } | null>(null);

  // Group chords by bar_num
  const bars = chords_data.reduce((acc, chord) => {
    if (!acc[chord.bar_num]) {
      acc[chord.bar_num] = [];
    }
    acc[chord.bar_num].push(chord);
    return acc;
  }, {} as { [key: number]: typeof chords_data });

  return (
    <div className="chords">
      {Object.values(bars).map((bar, barIndex) => (
        <div key={barIndex} className="bar">
          {bar.map((chord, index) => (
            <div
              key={index}
              onClick={() => setSelectedChord({ barIndex, curr_beat: chord.curr_beat_time })}
              className={selectedChord?.barIndex === barIndex && selectedChord?.curr_beat === chord.curr_beat_time ? 'selected' : ''}
            >
              {chord.chord_complex_pop}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChordsSheet;