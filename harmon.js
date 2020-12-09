/*  Eli Castillo
    Web and Distributed Programming
    Harmon js file
    12/6/20 */

function displayCard() {
    var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var dimension = canvas.getContext('2d');

    dimension.strokeRect(20, 20, 100, 120);
    dimension.fillStyle = "black";
    dimension.fillRect(20, 20, 100, 120);
}
}