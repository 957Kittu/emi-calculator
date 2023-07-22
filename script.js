var slider = document.getElementById("amount-range-selector");

var totalAmount = document.getElementById("amount-range");
var formattedTotalAmount = slider.value;
var currencyTotalAmount = new Intl.NumberFormat('en-IN', { currency: 'INR', minimumFractionDigits: 2 }).format(
  formattedTotalAmount);
totalAmount.innerHTML = formattedTotalAmount;

var totalPayment = document.getElementById("total-payment");
var formattedTotalPayment = slider.value * 10;
var currencyTotalPayment = new Intl.NumberFormat('en-IN', { currency: 'INR', minimumFractionDigits: 2 }).format(
  formattedTotalPayment);
totalPayment.innerHTML = currencyTotalPayment;

var totalDiscount = document.getElementById("total-discount");
totalDiscount.innerHTML = currencyTotalAmount;

var totalJewelleryWorth = document.getElementById("total-jewellery-worth");
var formattedJewelleryWorth = slider.value * 11;
var currencyJewelleryWorth = new Intl.NumberFormat('en-IN', { currency: 'INR', minimumFractionDigits: 2 }).format(
  formattedJewelleryWorth);
totalJewelleryWorth.innerHTML = currencyJewelleryWorth;

var totalGoldJewelleryWorth = document.getElementById("total-gold-jewellery-worth");
var formattedGoldJewelleryWorth = (slider.value * 75 / 100) + (totalAmount.value * 10);
var currencyGoldJewelleryWorth = new Intl.NumberFormat('en-IN', { currency: 'INR', minimumFractionDigits: 2 }).format(
  formattedGoldJewelleryWorth);
totalGoldJewelleryWorth.innerHTML = currencyGoldJewelleryWorth;

var totalEffectivelyPay = document.getElementById("total-effectively-pay");
totalEffectivelyPay.innerHTML = currencyTotalPayment;

window.onload = function () {
  var totalAmountWePay = totalAmount.value;
  var currencyAmountWePay = new Intl.NumberFormat('en-IN', { currency: 'INR', minimumFractionDigits: 2 }).format(
    totalAmountWePay);

  var totalAmountYouPay = totalAmount.value * 10;
  var currencyAmountYouPay = new Intl.NumberFormat('en-IN', { currency: 'INR', minimumFractionDigits: 2 }).format(
    totalAmountYouPay);

  var xValues = ["We pay", "You pay"];
  var yValues = [totalAmount.value, totalAmount.value * 10];
  var barColors = ["#092D0B", "#ddbc6a"];

  var chart = new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },

    options: {
      responsive: true,
      tooltips: {
        enabled: false
      },
      hover: {
        mode: null
      },
      rotation: (-0.5 * Math.PI) - (-75 / 180 * Math.PI),
      title: {
        text: ""
      },
      legend: {
        position: 'bottom',
        onClick: function (event, legendItem) {}
      },
      plugins: {
        datalabels: {
          color: '#002c5c',
          fontSize: 28
        }
      }
    }
  });

  window.chart = chart;
  chart.render();
}

slider.oninput = function () {
  var currentAmount = this.value;
  var currencyCurrentAmount = new Intl.NumberFormat('en-IN', { currency: 'INR', minimumFractionDigits: 2 }).format(
    currentAmount);

  var currentAmountEffectivelyAndTotalPayment = this.value * 10;
  var currencyAmountEffectivelyAndTotalPayment = new Intl.NumberFormat('en-IN', { currency: 'INR', minimumFractionDigits: 2 }).format(
    currentAmountEffectivelyAndTotalPayment);

  var currentAmountTotalJewelleryWorth = this.value * 11;
  var currencyAmountTotalJewelleryWorth = new Intl.NumberFormat('en-IN', { currency: 'INR', minimumFractionDigits: 2 }).format(
    currentAmountTotalJewelleryWorth);

  var currentAmountTotalGoldJewelleryWorth = (this.value * 75 / 100) + (this.value * 10);
  var currencyAmountTotalGoldJewelleryWorth = new Intl.NumberFormat('en-IN', { currency: 'INR', minimumFractionDigits: 2 }).format(
    currentAmountTotalGoldJewelleryWorth);

  totalAmount.value = currentAmount;
  totalPayment.innerHTML = currencyAmountEffectivelyAndTotalPayment;
  totalDiscount.innerHTML = currencyCurrentAmount;
  totalJewelleryWorth.innerHTML = currencyAmountTotalJewelleryWorth;
  totalEffectivelyPay.innerHTML = currencyAmountEffectivelyAndTotalPayment;
  totalGoldJewelleryWorth.innerHTML = currencyAmountTotalGoldJewelleryWorth;

  window.chart.data.datasets[0].data[0] = currentAmount;
  window.chart.data.datasets[0].data[1] = currentAmount * 10;

  chart.update();
}

function btnCheckClick() {
  var totalAmount = document.getElementById("amount-range");
  var currentAmount = totalAmount.value;
  var currencyCurrentAmount = new Intl.NumberFormat('en-IN', { currency: 'INR', minimumFractionDigits: 2 }).format(
    currentAmount);

  var currentAmountEffectivelyAndTotalPayment = currentAmount * 10;
  var currencyAmountEffectivelyAndTotalPayment = new Intl.NumberFormat('en-IN', { currency: 'INR', minimumFractionDigits: 2 }).format(
    currentAmountEffectivelyAndTotalPayment);

  var currentAmountTotalJewelleryWorth = currentAmount * 11;
  var currencyAmountTotalJewelleryWorth = new Intl.NumberFormat('en-IN', { currency: 'INR', minimumFractionDigits: 2 }).format(
    currentAmountTotalJewelleryWorth);

  var currentAmountTotalGoldJewelleryWorth = (currentAmount * 75 / 100) + (currentAmount * 10);
  var currencyAmountTotalGoldJewelleryWorth = new Intl.NumberFormat('en-IN', { currency: 'INR', minimumFractionDigits: 2 }).format(
    currentAmountTotalGoldJewelleryWorth);

  totalPayment.innerHTML = currencyAmountEffectivelyAndTotalPayment;
  totalDiscount.innerHTML = currencyCurrentAmount;
  totalJewelleryWorth.innerHTML = currencyAmountTotalJewelleryWorth;
  totalEffectivelyPay.innerHTML = currencyAmountEffectivelyAndTotalPayment;
  totalGoldJewelleryWorth.innerHTML = currencyAmountTotalGoldJewelleryWorth;
  slider.value = totalAmount.value;

  window.chart.data.datasets[0].data[0] = totalAmount.value;
  window.chart.data.datasets[0].data[1] = totalAmount.value * 10;
  chart.update();
}