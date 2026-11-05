const steps = [
  {
    emoji: "🌹",
    badge: "For Itumeleng",
    text: "Hey Itumeleng... I made a little something for you. 🌸",
    btn: "Read next line 💕"
  },
  {
    emoji: "💭",
    badge: "Honest Truth",
    text: "I owe you a real apology for disappearing years ago. Truth is, I got distracted, got bored, and just pulled away—and that wasn't cool of me.",
    btn: "Continue..."
  },
  {
    emoji: "📲",
    badge: "Over The Years",
    text: "Every time I see you online, I get this strong temptation to text you. But I always stop myself because I never know what to say or how to start.",
    btn: "Next..."
  },
  {
    emoji: "🌸",
    badge: "A Small Gift",
    text: "So I built this page to drop a little bloom on your screen and show I care, using my dev skills to break the ice.",
    btn: "Keep reading..."
  },
  {
    emoji: "✨",
    badge: "No Pressure",
    text: "I'm not trying to force a romance or push for daily small talk. I just want the chance to exist in your life—to text you every now and then without any awkwardness.",
    btn: "One last thing..."
  },
  {
    emoji: "💐",
    badge: "Just Being Real",
    text: "I hope this works cause I dont know ke etseng anymore... 🤍",
    btn: "Receive Flowers 🌸"
  }
];

let currentStep = 0;

const dotsContainer = document.getElementById('dotsContainer');
steps.forEach((_, idx) => {
  const dot = document.createElement('div');
  dot.className = `dot ${idx === 0 ? 'active' : ''}`;
  dotsContainer.appendChild(dot);
});

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateCard();
    burstPetals(15);
  } else {
    triggerFlowerCover();
  }
}

function updateCard() {
  const step = steps[currentStep];

  document.getElementById('headerEmoji').textContent = step.emoji;
  document.getElementById('badgeText').textContent = step.badge;

  const msgEl = document.getElementById('messageText');
  msgEl.style.animation = 'none';
  msgEl.offsetHeight;
  msgEl.textContent = step.text;
  msgEl.style.animation = 'fadeInSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards';

  document.getElementById('btnText').textContent = step.btn;

  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentStep);
  });
}

function triggerFlowerCover() {
  const mainCard = document.getElementById('mainCard');
  const overlay = document.getElementById('flowerOverlay');

  mainCard.style.transform = 'scale(0.9)';
  mainCard.style.opacity = '0';

  setTimeout(() => {
    mainCard.style.display = 'none';
    overlay.classList.add('show');
    burstPetals(180); // Massively increased petal count floating right over the screen
  }, 500);
}

// Canvas animation for falling Rose Petals & Flowers
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const flowerEmojis = ["🌸", "🌹", "🌺", "🌷", "💐", "✨"];

class Petal {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * -height;
    this.size = Math.random() * 16 + 12;
    this.speedY = Math.random() * 2 + 1;
    this.speedX = Math.random() * 1.5 - 0.75;
    this.opacity = Math.random() * 0.8 + 0.2;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = Math.random() * 0.04 - 0.02;
    this.emoji = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.rotation += this.rotSpeed;

    if (this.y > height) {
      this.reset();
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.font = `${this.size}px serif`;
    ctx.globalAlpha = this.opacity;
    ctx.fillText(this.emoji, 0, 0);
    ctx.restore();
  }
}

let petals = Array.from({ length: 45 }, () => new Petal());

function burstPetals(count) {
  for (let i = 0; i < count; i++) {
    petals.push(new Petal());
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  petals.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();
