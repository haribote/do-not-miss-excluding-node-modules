const domReady = (name = 'it') => {
  return new Promise((resolve) => {
    window.addEventListener('DOMContentLoaded', () => {
      resolve(`Don't miss, ${name}!`);
    });
  });
};

domReady()
  .then((resp) => {
    const elMessage = document.createElement('p');
    elMessage.textContent = resp;
    document.querySelector('body').appendChild(elMessage);
  });
