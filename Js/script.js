document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    const timePicker = document.getElementById('time-picker');
    const radioButtons = document.querySelectorAll('input[name="contact-time"]');
    
    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            if (document.getElementById('select-time').checked) {
                timePicker.style.display = 'block';
            } else {
                timePicker.style.display = 'none';
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        
        modal.style.display = 'flex';

        
    });

    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

