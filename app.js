window.addEventListener('DOMContentLoaded', function () {
  let btnDiv = document.createElement('div')
  let button = document.createElement('button');
  let btnText = document.createTextNode('Add Square');


  document.body.appendChild(btnDiv);
  btnDiv.appendChild(button);
  button.appendChild(btnText);

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
    document.body.appendChild(squareDiv);

    squareDiv.addEventListener('click', function () {
      let r = Math.floor(Math.random() * 256);          // Random between 0-255
      let g = Math.floor(Math.random() * 256);          // Random between 0-255
      let b = Math.floor(Math.random() * 256);          // Random between 0-255
      let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
      this.style.backgroundColor = rgb
    }),

    console.log('working'),

      squareDiv.addEventListener('dblclick',
      function () {
        if (this.id % 2 !== 0 & this.previousSibling.id === null) {
          alert('There is no sqaure before me to delete.')
        } else if (this.id % 2 !== 0) {
          this.previousSibling.remove();
        }
      },
        function () {
          if (this.id % 2 == 0 & this.nextSibling === null) {
            alert('There is no square after me to delete.')
          } else if (this.id % 2 == 0) {
            this.nextSibling.remove();
          }
        }
      )
      
})
});
