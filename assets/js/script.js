function scrollFunction1() {
    let e = document.getElementById("features");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  }