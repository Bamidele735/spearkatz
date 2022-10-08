const items = [...document.querySelectorAll('.number')];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  // const increment = 1;
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}+`;
  }, 1);
  // console.log(increaseCount);
};

items.forEach((item) => {
  updateCount(item);
});





// Load google charts
// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);

// // Draw the chart and set the chart values
// function drawChart() {
//   var data = google.visualization.arrayToDataTable([
//   ['Task', 'Hours per Day'],
//   ['Holder Rewards', 60],
//   ['Marketing and partnerships', 10],
//   ['Charity', 20],
//   ['SPR Team', 10],
// ]);

//   // Optional; add a title and set the width and height of the chart
//   var options = {'title':'', 'width':550, 'height':400, 'background':'red'};

//   // Display the chart inside the <div> element with id="piechart"
//   var chart = new google.visualization.PieChart(document.getElementById('piechart'));
//   chart.draw(data, options)}

var ctxP = document.getElementById("pieChart").getContext('2d');
var myPieChart = new Chart(ctxP, {
  type: 'pie',
  data: {
    labels: ["Holders Reward 60%", "Marketing and Partnership 10%", "Charity 20%", "SPR Team 10%"],
    datasets: [{
      data: [60, 10, 20, 10],
      backgroundColor: [`#52D726`, "#FFEC00", "#FF7300", "#7CDDDD"],
      hoverBackgroundColor: ["#52D726", "#FFEC00", "#FF7300", "#7CDDDD"],
      // labels: ['60%', "10%", "20%", "10%"]
    }]
  },
  options: {
    responsive: true
  }
});

const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
