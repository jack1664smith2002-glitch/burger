// ---------- Menu tabs ----------
const tabButtons = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.menu-panel');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    panels.forEach(p => {
      p.classList.toggle('active', p.dataset.panel === target);
    });
  });
});

// ---------- Open / closed status ----------
// Hours: 10:00 - 23:00, every day
function updateStatus() {
  const chip = document.getElementById('status-chip');
  const text = document.getElementById('status-text');
  const now = new Date();
  const hour = now.getHours() + now.getMinutes() / 60;

  const isOpen = hour >= 10 && hour < 23;

  if (isOpen) {
    chip.classList.remove('closed');
    text.textContent = 'Open now · Until 11:00 PM';
  } else {
    chip.classList.add('closed');
    text.textContent = 'Closed now · Opens 10:00 AM';
  }
}

updateStatus();
setInterval(updateStatus, 60000);
