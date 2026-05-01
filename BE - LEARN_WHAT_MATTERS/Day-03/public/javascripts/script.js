console.log("alert")
alert("Hello From Home Page")

// Toggle sidebar
document.getElementById("sidebarToggle").addEventListener("click", function () {
  document.getElementById("wrapper").classList.toggle("toggled");
});
// Revenue & Profit Chart
const revenueProfitCtx = document
  .getElementById("revenueProfitChart")
  .getContext("2d");
const revenueProfitChart = new Chart(revenueProfitCtx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [
          4000, 6000, 8500, 5500, 7000, 9000, 10500, 12000, 11500, 13000, 15000,
          17000,
        ],
        backgroundColor: "rgba(78, 115, 223, 0.1)",
        borderColor: "#4e73df",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Profit",
        data: [
          1500, 2500, 3500, 2000, 3000, 4000, 5000, 6000, 5500, 7000, 8000,
          9000,
        ],
        backgroundColor: "rgba(28, 200, 138, 0.1)",
        borderColor: "#1cc88a",
        tension: 0.3,
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
});
// Sales by Category Chart
const salesCategoryCtx = document
  .getElementById("salesCategoryChart")
  .getContext("2d");
const salesCategoryChart = new Chart(salesCategoryCtx, {
  type: "doughnut",
  data: {
    labels: ["Electronics", "Clothing", "Home & Garden", "Books", "Other"],
    datasets: [
      {
        data: [35, 20, 15, 10, 20],
        backgroundColor: [
          "#4e73df",
          "#1cc88a",
          "#36b9cc",
          "#f6c23e",
          "#e74a3b",
        ],
        hoverBackgroundColor: [
          "#2e59d9",
          "#17a673",
          "#2c9faf",
          "#dda628",
          "#d73625",
        ],
        hoverBorderColor: "rgba(255, 255, 255, 0.9)",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        backgroundColor: "rgb(255, 255, 255)",
        bodyColor: "#858796",
        titleMarginBottom: 10,
        titleColor: "#6e707e",
        titleFontSize: 14,
        borderColor: "#dddfeb",
        borderWidth: 1,
        caretPadding: 10,
      },
    },
    cutout: "70%",
  },
});
// User Activity Chart
const userActivityCtx = document
  .getElementById("userActivityChart")
  .getContext("2d");
const userActivityChart = new Chart(userActivityCtx, {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Active Users",
        data: [850, 1100, 950, 1200, 1350, 900, 800],
        backgroundColor: "#36b9cc",
        borderColor: "#36b9cc",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
