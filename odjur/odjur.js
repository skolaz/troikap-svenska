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

// Funktion för att rendera Markdown inuti <details>-taggar.
// Detta måste köras efter att sidan har laddats.
function renderMarkdownInDetails() {
    // Hitta alla <details>-element med klassen 'accordion'.
    const detailsElements = document.querySelectorAll('details.accordion');

    detailsElements.forEach(details => {
        // Hitta det inre innehållet som inte är <summary>-taggen.
        // Vi måste ta bort <summary> innan vi bearbetar texten.
        const summaryElement = details.querySelector('summary');
        const markdownContent = details.innerHTML.substring(summaryElement.outerHTML.length);
        
        // Rendera Markdown-innehållet till HTML.
        const htmlContent = marked(markdownContent);
        
        // Ersätt det gamla innehållet med det nya HTML-formaterade innehållet.
        details.innerHTML = summaryElement.outerHTML + htmlContent;
    });
}

// Kör funktionen när sidan har laddats.
// Om du använder Docsify, bör du lägga detta i en "hook" istället.
// Om inte, kan du anropa funktionen i slutet av din js-fil.
// Exempel:
 renderMarkdownInDetails();