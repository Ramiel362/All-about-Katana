window.onload = function () {
  const katana = document.getElementById('katana');
  const leftSlice = document.querySelector('.left-slice');
  const rightSlice = document.querySelector('.right-slice');
  const content = document.querySelector('.content');

  // Trigger the katana slicing animation
  setTimeout(function () {
    katana.style.animation = 'katanaSlice 1.5s forwards ease-out';
  }, 500); // Delay for dramatic effect

  // Trigger the black screen split after katana slice
  setTimeout(function () {
    leftSlice.style.animation = 'splitLeft 1.5s forwards ease-out';
    rightSlice.style.animation = 'splitRight 1.5s forwards ease-out';
  }, 2000); // Start split after katana finishes slicing

  // Show the content after split
  setTimeout(function () {
    content.style.opacity = '1';
  }, 3500); // Show content after the split
};
