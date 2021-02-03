



(function () {
  document.onmousemove = handleMouseMove;
  function handleMouseMove(event) {
    var eventDoc, doc, body;

    event = event || window.event;

    // Use event.pageX / event.pageY here
    var machin = document.getElementById("moving_bubble_cursor");
    machin.style.left = event.pageX;
    machin.style.setProperty("left", event.pageX - 10 + "px");
    machin.style.setProperty("top", event.pageY - 10 + "px");
  }
})();

