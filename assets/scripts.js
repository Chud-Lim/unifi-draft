document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const toggleButton = item.querySelector(".faq-toggle");
    const content = item.querySelector(".faq-content");
    const arrowIcon = item.querySelector(".arrow-icon");
    const header = item.querySelector(".faq-header"); // Use .faq-header

    // Modify the click event listener
    header.addEventListener("click", () => {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.querySelector(".faq-content").style.maxHeight = "0px";
          otherItem.querySelector(".arrow-icon").style.transform = "rotate(0deg)";
        }
      });

      if (content.style.maxHeight = "0px") {
        content.style.maxHeight = "1000px";
        arrowIcon.style.transform = "rotate(180deg)";
      } else {
        content.style.maxHeight = "0px";
        arrowIcon.style.transform = "rotate(0deg)";
      }
    });
  });


const paymentSlider = document.getElementById("paymentSlider");
if (paymentSlider) {
  const monthlyPayment = document.querySelector(".monthly-payment");
  // const loanAmountSpan = document.querySelector(".loan-amount");
  const loanDetails = document.querySelector(".loan-details");
  const interestRate = 6.95; // Interest rate in percent
  const loanTerms = 72; // Loan terms in months
  
  paymentSlider.addEventListener("input", updateLoanDetails);
  
  function updateLoanDetails() {
    const value = parseFloat(paymentSlider.value);
    // loanAmountSpan.textContent = `$${value.toLocaleString()}`;
    
    const monthlyInterestRate = interestRate / 100 / 12;
    const numerator = monthlyInterestRate * value;
    const denominator = 1 - Math.pow(1 + monthlyInterestRate, -loanTerms);
    const monthlyPaymentValue = (numerator / denominator).toFixed(2);
    monthlyPayment.textContent = `$${monthlyPaymentValue}`;
  }
  
  // Initial update
  updateLoanDetails();
}

const sliderLabel = document.getElementById('slider-label');

window.addEventListener('load', setRangeThumb());

paymentSlider.addEventListener('input', (event) => {
  setRangeThumb();
});

function setRangeThumb() {
  const value = paymentSlider.value;
  const thumbWidth = 27; // Width of the thumb in pixels

  sliderLabel.querySelector('.amount').textContent = `$${Number(value).toLocaleString()}`;
  const thumbPosition = ((value - paymentSlider.min) / (paymentSlider.max - paymentSlider.min)) * 100;

  sliderLabel.style.left = `${thumbPosition}%`;
  // sliderLabel.style.transform = `translateX(-${thumbPosition + 5}%)`;

  // if (thumbPosition < 50) {
  //   sliderLabel.style.left = `${thumbPosition + (27 / thumbPosition)}%`;
  // } else {
  //   sliderLabel.style.left = `${thumbPosition - (27 / thumbPosition)}%`;
  // }
}

/* Video */
const video = document.getElementById('my-video');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    video.controls = true;
  } else {
    video.pause();
    video.controls = false;
  }
});

video.addEventListener('play', () => {
  playButton.style.display = 'none';
});

video.addEventListener('pause', () => {
  playButton.style.display = 'block';
});
});