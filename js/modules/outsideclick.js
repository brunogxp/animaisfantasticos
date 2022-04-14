export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if(!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
      setTimeout(() =>  html.addEventListener(userEvent, handleOutsideClick));
    })
    element.setAttribute(outside, '');
  }
  function handleOutsideClick(Event) {
    if(!element.contains(Event.target)) {
      element.removeAttribute(outside);
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick);
      })
      callback();
    }
  }
}