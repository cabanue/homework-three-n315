function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#/", "");

  if (!pageID) {
    MODEL.getPageData("home");
  } else {
    MODEL.getPageData(pageID);
  }
}

function initListeners() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initListeners();
  route("#/home");
});
