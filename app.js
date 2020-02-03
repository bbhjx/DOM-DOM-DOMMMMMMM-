<<<<<<< HEAD
window.addEventListener('DOMContentLoaded', function () {
  let btnDiv = document.createElement('div')
  let button = document.createElement('button');
  let btnText = document.createTextNode('Add Square');
  let container = document.createElement('div');
  container.className = 'container';

  document.body.appendChild(btnDiv);
  btnDiv.appendChild(button);
  button.appendChild(btnText);
  document.body.appendChild(container);


  let divID = -1;


  button.addEventListener('click', function () {
    divID++;
    let squareDiv = document.createElement('div');
    squareDiv.className = 'squares';
    squareDiv.id = divID;
    let divText = document.createTextNode(divID);
    let divTextSpan = document.createElement('span');
    divTextSpan.className = 'squareText'
    divTextSpan.appendChild(divText);
    squareDiv.appendChild(divTextSpan)
    container.appendChild(squareDiv);

    squareDiv.addEventListener('click', function () {
      let r = Math.floor(Math.random() * 256);          // Random between 0-255
      let g = Math.floor(Math.random() * 256);          // Random between 0-255
      let b = Math.floor(Math.random() * 256);          // Random between 0-255
      let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
      this.style.backgroundColor = rgb
    }),

      squareDiv.addEventListener('dblclick',
        function () {
          if (this.id % 2 == 0 & this.nextSibling === null) {
            alert('There is no square after me to delete.')
          } else if (this.id % 2 == 0) {
            this.nextSibling.remove();
          }
        }),

      squareDiv.addEventListener('dblclick',
        function () {
          if (this.id % 2 !== 0 & this.previousSibling === null) {
            alert('There is no sqaure before me to delete.')
          } else if (this.id % 2 !== 0) {
            this.previousSibling.remove();
          }
        })
  });
});
=======
document.addEventListener('DOMContentLoaded', function() {

    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener('click', function () {
        let div = document.createElement('div');
        document.body.appendChild(div);
    });






});
>>>>>>> b05f5d8e110b95d3b266481d119a1f090a91a266
