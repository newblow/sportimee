const DarkMode = () => {
  let body = document.body;
  let bmMenu = document.getElementsByClassName("bm-menu");

  if (body) {
    document.body.classList.toggle("dark");
    bmMenu[0].classList.toggle("dark:bg-black");
  }
};

export default DarkMode;
