
const button = document.querySelector(".button");

button.addEventListener("click", function () {
    var loanAmount = parseFloat(document.getElementById("loanAmount").value);
    var annualInterestRate = parseFloat(document.getElementById("annualInterestRate").value);
    var tenure = parseInt(document.getElementById("tenure").value);
    var monthlyInterestRate = annualInterestRate / 1200; // 12 months and 100 to convert percentage to decimal
    var emi = (loanAmount * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), tenure)) / (Math.pow((1 + monthlyInterestRate), tenure) - 1);
    var totalInterest = emi * tenure - loanAmount;
    var totalPayment = emi * tenure;

    document.getElementById("emi").innerHTML = emi.toFixed(2);
    document.getElementById("totalInterest").innerHTML = totalInterest.toFixed(2);
    document.getElementById("totalPayment").innerHTML = totalPayment.toFixed(2);

    let xValue = ["Principle", "Interest"];
    let yValue = [loanAmount, totalInterest];
    let barColor = ["#961251", "#013220"];



    new Chart("loanChart", {
        type: "pie",
        data: {
            labels: xValue,
            datasets: [{
                backgroundColor: barColor,
                data: yValue
            }]
        },
        options: {
            title: {
                display: false,
            }
        }
    });
});


