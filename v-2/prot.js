let bloqueio = true;

document.addEventListener('contextmenu', e => bloqueio && e.preventDefault());
document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.shiftKey && e.altKey && e.key === 'Backspace') {
    bloqueio = !bloqueio;
    alert(`Proteção ${bloqueio ? 'ativada' : 'desativada'}`);
    return;
  }
  if (bloqueio && (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key)) ||
    (e.ctrlKey && ['U','S'].includes(e.key))
  )) e.preventDefault();
});