const upperOpenButton = document.querySelector(".upper__openButton");
const drawerCloseButton = document.querySelector(".drawer__closeButton");
const headerDrawer = document.querySelector(".header__drawer");
const backdrop = document.querySelector(".backdrop");


upperOpenButton.addEventListener("click", () => {
  toggleHeaderDrawer();
  toggleBackdropOpen();
})

drawerCloseButton.addEventListener("click", () => {
  toggleHeaderDrawer();
  toggleBackdropOpen();
})

function toggleHeaderDrawer() {
  const headerDrawerClassList = headerDrawer.classList;
  if (headerDrawerClassList.contains("header__drawer")) {
    headerDrawerClassList.toggle("header__drawer--open");
    headerDrawerClassList.remove("header__drawer");
  } else if (headerDrawerClassList.contains("header__drawer--open")) {
    headerDrawerClassList.toggle("header__drawer");
    headerDrawerClassList.remove("header__drawer--open");
  }
}

function toggleBackdropOpen() {
  const backdropClassList = backdrop.classList;
  if (backdropClassList.contains("backdrop")) {
    backdropClassList.toggle("backdrop--open");
    backdropClassList.remove("backdrop");
  } else if (backdropClassList.contains("backdrop--open")) {
    backdropClassList.toggle("backdrop");
    backdropClassList.remove("backdrop--open");
  }
}