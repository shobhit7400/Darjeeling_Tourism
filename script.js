
  document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("openFormBtn");
    const bookingSection = document.getElementById("booking");

    openBtn.addEventListener("click", function () {
      bookingSection.style.display = "block";
      bookingSection.scrollIntoView({ behavior: "smooth" });
    });
  });

function openImage(src) {
  document.getElementById('modalImage').src = src;
  document.getElementById('imageModal').style.display = 'block';
}

function closeImage() {
  document.getElementById('imageModal').style.display = 'none';
}

  function toggleRoadImage() {
    const roadImage = document.getElementById("road-image-container");
    roadImage.style.display = roadImage.style.display === "none" ? "block" : "none";
  }


  function toggleAirImage() {
    const airImage = document.getElementById("air-image-container");
    airImage.style.display = airImage.style.display === "none" ? "block" : "none";
  }


  function toggleTrainImage() {
    const trainImage = document.getElementById("train-image-container");
    trainImage.style.display = trainImage.style.display === "none" ? "block" : "none";
  }


  function showImage(id) {
    document.getElementById(id).style.display = "block";
  }

  function closeImage(id) {
    document.getElementById(id).style.display = "none";
  }


  function showImage(id) {
    document.getElementById(id).style.display = "block";
  }

  function closeImage(id) {
    document.getElementById(id).style.display = "none";
  }


        function showPaymentForm(type) {
            const form = document.getElementById('paymentForm');
            const message = document.getElementById('message');
            
            // Store payment method for receipt
            window.lastPaymentMethod = type === 'debit' ? 'Debit Card' : 'Credit Card';
            
            // Hide any existing message
            message.classList.remove('show');
            
            // Show the form with animation
            form.classList.add('show');
            
            // Clear previous inputs
            document.getElementById('accountNumber').value = '';
            document.getElementById('cvv').value = '';
            document.getElementById('amount').value = '';
        }

        function processPayment() {
            const amount = parseFloat(document.getElementById('amount').value);
            const accountNumber = document.getElementById('accountNumber').value;
            const cvv = document.getElementById('cvv').value;
            const message = document.getElementById('message');
            
            // Clear previous message
            message.classList.remove('show', 'error', 'success');
            
            // Validate inputs
            if (!accountNumber || !cvv || !amount) {
                showMessage('Please fill in all fields', 'error');
                return;
            }
            
            // Check amount
            if (amount < 600) {
                showMessage('❌ Minimum ₹600 required', 'error');
            } else {
                showMessage('✔ Payment Successful! Hotel + Transport booked at ₹1500', 'success');
                // Hide the form after successful payment
                setTimeout(() => {
                    document.getElementById('paymentForm').classList.remove('show');
                }, 2000);
                
                // Show receipt after 1 second
                setTimeout(() => {
                    showReceipt(accountNumber);
                }, 1000);
            }
        }

        function showMessage(text, type) {
            const message = document.getElementById('message');
            message.textContent = text;
            message.classList.add(type);
            
            // Trigger animation
            setTimeout(() => {
                message.classList.add('show');
            }, 100);
        }

        function showReceipt(accountNumber) {
            const overlay = document.getElementById('receiptOverlay');
            const timer = document.getElementById('closeTimer');
            
            // Set receipt details
            const now = new Date();
            document.getElementById('receiptDate').textContent = now.toLocaleDateString('en-IN');
            document.getElementById('receiptTime').textContent = now.toLocaleTimeString('en-IN');
            document.getElementById('receiptAccount').textContent = `****${accountNumber.slice(-4)}`;
            
            // Determine payment method from the last clicked button
            const paymentMethod = window.lastPaymentMethod || 'Card';
            document.getElementById('paymentMethod').textContent = paymentMethod;
            
            // Show receipt
            overlay.classList.add('show');
            
            // Start countdown timer
            let countdown = 10;
            timer.textContent = countdown;
            
            const interval = setInterval(() => {
                countdown--;
                timer.textContent = countdown;
                
                if (countdown <= 0) {
                    clearInterval(interval);
                    overlay.classList.remove('show');
                }
            }, 1000);
        }

        // Add enter key support for payment form
        document.getElementById('paymentForm').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                processPayment();
            }
        });
    

  window.onload = function () {
    const savedGmail = localStorage.getItem("userGmail");
    if (savedGmail) {
      document.getElementById("gmail-popup").style.display = "none";
      document.getElementById("userGmail").textContent = savedGmail;
    } else {
      document.getElementById("gmail-popup").style.display = "flex";
    }
  };

  function submitGmail() {
    const gmail = document.getElementById("gmailInput").value;
    if (gmail.includes("@gmail.com")) {
      localStorage.setItem("userGmail", gmail);
      document.getElementById("userGmail").textContent = gmail;
      document.getElementById("gmail-popup").style.display = "none";
    } else {
      alert("Please enter a valid Gmail ID.");
    }
  }
