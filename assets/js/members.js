document.querySelectorAll('.icon-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    let target = btn.dataset.text;
    let textHtml = document.getElementById(target).innerHTML;
    document.getElementById("text-display").innerHTML = textHtml;
  });
});
