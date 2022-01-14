const container = document.querySelector('.arrangment');
const seats = document.querySelectorAll('.rows .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
// const movieSelect = document.getElementById('movie');

populateUI();

// let ticketPrice = +movieSelect.value;
let ticketPrice = 550; //firbase

// Save selected movie index and price
function setMovieData(moviePrice) {
//   localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
  
  setMovieData(ticketPrice);
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

//   if (selectedMovieIndex !== null) {
//     movieSelect.selectedIndex = selectedMovieIndex;
//   }
}

// Movie select event
// movieSelect.addEventListener('change', e => {
//   ticketPrice = +e.target.value;
//   setMovieData(e.target.selectedIndex, e.target.value);
//   updateSelectedCount();
// });

// Seat click event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    console.log("selected");

    updateSelectedCount();
  }
});
// document.querySelector(".seat2").addEventListener('click', e => {
//   if (
//     e.target.classList.contains('seat') &&
//     !e.target.classList.contains('occupied')
//   ) {
//     e.target.classList.toggle('selected');
//     console.log("selected");

//     updateSelectedCount();
//   }
// });

// Initial count and total set
updateSelectedCount();



// seat booking functions
function showmenu(id){
  console.log(id);
  const modal = document.querySelector(id);
  modal.classList.toggle("book");
}