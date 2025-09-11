const eyes = ['o', 'O', '@', 'x', '-', 'T', 'Q'];
const noses = ['v', '^', '>', '<', '_', '•'];
const mouths = ['_', 'o', 'U', 'o', 'w', 'u', 'A'];

function generateAsciiFace() {
  const randomEye1 = eyes[Math.floor(Math.random() * eyes.length)];
  const randomNose = noses[Math.floor(Math.random() * noses.length)];
  const randomMouth = mouths[Math.floor(Math.random() * mouths.length)];
  const randomEye2 = eyes[Math.floor(Math.random() * eyes.length)];

  return `
   ${randomEye1}${randomNose}${randomEye2}
    ${randomMouth}
  `;
}

console.log(generateAsciiFace());
