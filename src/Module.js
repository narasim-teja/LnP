import React, { useState } from 'react';

function Module({ title }) {
  const [open, setOpen] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState(null);

  // You can define your chapter data here or fetch it from an API
  // For simplicity, I'm using hardcoded data
  const chapterData = [
    {
      title: 'Chapter 1',
      videoLink: 'https://www.youtube.com/embed/xFc15SXOzXg',
    },
    {
      title: 'Chapter 2',
      videoLink: 'https://www.youtube.com/embed/nLLqCs5wIgI',
    },
    {
      title: 'Chapter 3',
      videoLink: 'https://www.youtube.com/embed/Lsmg1MmjL-4',
    },
    {
      title: 'Chapter 4',
      videoLink: 'https://www.youtube.com/embed/8sSTQdXSfSE',
    },
    // Add more chapters as needed
  ];


  // Function to toggle the dropdown and select a chapter
const toggleDropdown = (chapterIndex) => {
  if (chapterIndex === selectedChapter) {
    // If the same chapter is clicked again, just toggle the video on/off
    setOpen(!open);
  } else {
    // If a different chapter is clicked, set the selected chapter and open the dropdown
    setSelectedChapter(chapterIndex);
    setOpen(true);
  }
};


  return (
    <div className="module" >
      <h2 className="module-title" onClick={() => toggleDropdown(title)}>{title}</h2>
      {open && (
        <div>
          <ul>
            {chapterData.map((chapter, index) => (
              <li key={index}>
                <button className="chapter-button" onClick={() => toggleDropdown(index)}>
                  {chapter.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedChapter !== null && (
        <div>
          {chapterData[selectedChapter] && (
            <iframe
              title={chapterData[selectedChapter].title}
              src={`${chapterData[selectedChapter].videoLink}?controls=0&disablekb=1`}
              width="560"
              height="315"
              frameBorder="0"
              allowFullScreen
              sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
            ></iframe>
          )}
        </div>
      )}
    </div>
  );
}

export default Module;
