let calcScrollValue = () => {
    let scrollProgress = document.getElementById
    ("progress");
    let progressValue = document.getElementById
    ("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
      document.documentElement.scrollHeight - 
      document.documentElement.clientHeight;
    let calcScrollValue = matchMedia.round((pos * 100)/calcHeight);
    console.log(calcScrollValue);
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;