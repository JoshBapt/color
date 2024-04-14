const changeBodyColor = document.getElementById('myBody');

const butttonChanger = document.getElementById('myButton');

const colors = ['red' ,'blue' ,'green' ,'purple' ,'pink' ,'orange', 'yellow', 'brown'];


butttonChanger.addEventListener('click', () =>{


          const randomIndexOfColors = Math.floor(Math.random() * colors.length);

           changeBodyColor.style.backgroundColor = colors[randomIndexOfColors];
          


});

