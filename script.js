function toggleEditorialLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className =
    currentClass == "Editorial-mode" ? "Base-mode" : "Editorial-mode";
}

function togglePosterLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "Poster-mode" ? "Base-mode" : "Poster-mode";
}

function toggleTypoLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "Typo-mode" ? "Base-mode" : "Typo-mode";
}

function toggleVideoLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "Video-mode" ? "Base-mode" : "Video-mode";
}
