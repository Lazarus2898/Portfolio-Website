// Tabs
function showTab(tabId, button) {
  document.querySelectorAll('.tab-content').forEach(el => {
    el.classList.add('hidden');
  });

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove(
      'border-indigo-500',
      'text-indigo-600',
      'font-semibold'
    );
    btn.classList.add('text-gray-600');
  });

  document.getElementById(tabId).classList.remove('hidden');

  button.classList.add(
    'border-indigo-500',
    'text-indigo-600',
    'font-semibold'
  );
  button.classList.remove('text-gray-600');
}

// Certification accordion
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.cert-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const details = button.nextElementSibling;
      const arrow = button.querySelector('.arrow');

      details.classList.toggle('hidden');
      arrow.textContent = details.classList.contains('hidden') ? '▾' : '▴';
    });
  });
});
