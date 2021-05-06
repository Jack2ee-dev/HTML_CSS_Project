const upperOpenButton = document.querySelector(".upper__openButton");
const drawerCloseButton = document.querySelector(".drawer__closeButton");
const headerDrawer = document.querySelector(".header__drawer");
const backdrop = document.querySelector(".backdrop");

const controlledComponents = [upperOpenButton, drawerCloseButton, backdrop];

controlledComponents.map((component) => {
  component.addEventListener("click", () => {
    toggleDrawer();
    toggleBackdropOpen();
  })
})

function toggleDrawer() {
  headerDrawer.classList.toggle("header__drawer--open");
}
function toggleBackdropOpen() {
  backdrop.classList.toggle("backdrop__drawer--open");
}