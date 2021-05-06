const backdrop = document.querySelector('.backdrop');

function toggleBackdrop() {
  if (backdrop.classList.contains('backdrop')) {
    backdrop.classList.toggle('backdrop');
    backdrop.classList.toggle('backdrop--open');
  } else if (backdrop.classList.contains('backdrop--open')) {
    backdrop.classList.toggle('backdrop--open');
    backdrop.classList.toggle('backdrop');
  }
}

export default toggleBackdrop;