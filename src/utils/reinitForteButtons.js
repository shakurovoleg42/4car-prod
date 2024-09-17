const reinitForteButtons = () => {
  const forteBtns = document.getElementsByClassName('forte-btn');

  if (forteBtns.length > 0) {
    Array.from(forteBtns).forEach((btn) => {
      if (typeof window.getForteButton === 'function') {
        window.getForteButton(btn);
      }
    });
  }
};

export default reinitForteButtons;
