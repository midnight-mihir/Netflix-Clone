// Function to show the custom alert
function showAlert() {
    document.getElementById('alertOverlay').style.display = 'flex';
}

// Function to close the custom alert
function closeAlert() {
    document.getElementById('alertOverlay').style.display = 'none';
}

const faqBox1 = document.querySelector('.faq-box1');
const faqBox1_child = document.querySelector('.faq-box1-child');

const faqBox2 = document.querySelector('.faq-box2');
const faqBox2_child = document.querySelector('.faq-box2-child');

const faqBox3 = document.querySelector('.faq-box3');
const faqBox3_child = document.querySelector('.faq-box3-child');


const faqBox4 = document.querySelector('.faq-box4');
const faqBox4_child = document.querySelector('.faq-box4-child');

const faqBox5 = document.querySelector('.faq-box5');
const faqBox5_child = document.querySelector('.faq-box5-child');

const faqBox6 = document.querySelector('.faq-box6');
const faqBox6_child = document.querySelector('.faq-box6-child');

faqBox1.addEventListener('click', () => {
    if (faqBox1_child.style.display === 'none') {
        faqBox1_child.style.display = 'block';
    } else {
        faqBox1_child.style.display = 'none';
    }
})

faqBox2.addEventListener('click', () => {
    if (faqBox2_child.style.display === 'none') {
        faqBox2_child.style.display = 'block';
    } else {
        faqBox2_child.style.display = 'none';
    }
})
faqBox3.addEventListener('click', () => {
    if (faqBox3_child.style.display === 'none') {
        faqBox3_child.style.display = 'block';
    }else{
        faqBox3_child.style.display = 'none';
    }
})

faqBox4.addEventListener('click', () => {
    if (faqBox4_child.style.display === 'none') {
        faqBox4_child.style.display = 'block';
    }else{
        faqBox4_child.style.display = 'none';
    }
})

faqBox5.addEventListener('click', () => {
    if (faqBox5_child.style.display === 'none') {
        faqBox5_child.style.display = 'block';
    }else{
        faqBox5_child.style.display = 'none';
    }
})

faqBox6.addEventListener('click', () => {
    if (faqBox6_child.style.display === 'none') {
        faqBox6_child.style.display = 'block';
    }else{
        faqBox6_child.style.display = 'none';
    }
})