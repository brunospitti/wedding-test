export const isElementVisible = () => {
  const sections = document.querySelectorAll(".homepage-section");
  // Don't run the rest of the code if every section is already visible
  if (!document.querySelectorAll(".menu-item:not(.active)")) {
    return;
  }
  // Run this code for every section in sections
  for (const section of sections) {
    let sectionId = section.id;
    let sectionMenuItem = document.querySelector(
      `.menu-item#${sectionId.replace("-section", "")}`
    );
    sectionMenuItem.classList.remove("active");
    if (window.pageYOffset === 0) {
      document.querySelector(".menu-item#home").classList.add("active");
    } else {
      if (section.getBoundingClientRect().height > screen.height) {
        if (
          (section.getBoundingClientRect().top <= window.pageYOffset ||
            section.getBoundingClientRect().bottom >= window.pageYOffset) &&
          document.querySelectorAll(".menu-item.active").length < 1
        ) {
          sectionMenuItem.classList.add("active");
        }
      } else {
        if (
          section.getBoundingClientRect().top < window.innerHeight &&
          section.getBoundingClientRect().top > 0
        ) {
          sectionMenuItem.classList.add("active");
        }
      }
    }
  }
};

export const scrollToElement = section => {
  let elementToScroll = document.querySelector(
    `.homepage-section#${section}-section`
  );
  let elementToScrollMenu = document.querySelector(`.menu-item#${section}`);
  elementToScroll.scrollIntoView({ behavior: "smooth", block: "nearest" });
  elementToScrollMenu.classList.add("active");
};
