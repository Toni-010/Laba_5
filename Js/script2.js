const modal = document.getElementById("modal");
const joinButton = document.getElementById("joinButton");
const closeButton = document.querySelector(".close-button");
const emailInput = document.querySelector('.inputt input[type="email"]');


joinButton.addEventListener("click", function() {
    const email = emailInput.value.trim();

    
    if (email === '') {
        alert('Пожалуйста, введите email');
        return;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Пожалуйста, введите корректный email');
        return;
    }

    
    modal.style.display = "block";
});

closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});


window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});