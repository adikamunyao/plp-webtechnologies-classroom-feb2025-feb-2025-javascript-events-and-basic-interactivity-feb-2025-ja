// Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
  alert('Button was clicked!');
});

document.getElementById('hoverText').addEventListener('mouseover', () => {
  document.getElementById('hoverText').textContent = 'You hovered!';
});

document.getElementById('keyInput').addEventListener('keydown', (e) => {
  console.log(`You pressed: ${e.key}`);
});

// Secret Event
document.getElementById('secretBtn').addEventListener('dblclick', () => {
  alert('Secret double-click detected! 🎉');
});

// Interactive Elements
document.getElementById('colorChanger').addEventListener('click', (e) => {
  e.target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

let imageIndex = 0;
const images = [
  'https://placekitten.com/300/200',
  'https://placekitten.com/301/200',
  'https://placekitten.com/302/200'
];

document.getElementById('nextImg').addEventListener('click', () => {
  imageIndex = (imageIndex + 1) % images.length;
  document.getElementById('galleryImg').src = images[imageIndex];
});

// Tabs
document.querySelectorAll('.tabBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tabContent').forEach(tab => tab.classList.add('hidden'));
    document.getElementById(`tab${btn.dataset.tab}`).classList.remove('hidden');
  });
});

// Form Validation
document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('formMessage');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    message.textContent = 'Please enter a valid email.';
    message.style.color = 'red';
    return;
  }

  if (password.length < 8) {
    message.textContent = 'Password must be at least 8 characters.';
    message.style.color = 'red';
    return;
  }

  message.textContent = 'Form submitted successfully!';
  message.style.color = 'green';
});
