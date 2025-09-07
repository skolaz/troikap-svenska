document.addEventListener('click', (e) => {
  if (e.target.tagName === 'SUMMARY' && e.target.parentElement.classList.contains('accordion')) {
    const details = document.querySelectorAll('details.accordion');
    details.forEach(detail => {
      if (detail !== e.target.parentElement) {
        detail.removeAttribute('open');
      }
    });
  }
});