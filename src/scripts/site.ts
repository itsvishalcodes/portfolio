// Small progressive enhancements. The site works without any of this.

const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---- Theme toggle ----
function setTheme(theme: 'light' | 'dark') {
  root.dataset.theme = theme;
  try {
    localStorage.setItem('theme', theme);
  } catch {
    /* storage can be blocked; the toggle still works for this page view */
  }
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(theme === 'dark'));
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  });
}
document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
});
setTheme(root.dataset.theme === 'light' ? 'light' : 'dark');

// ---- Mobile menu ----
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-button]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
if (menuBtn && menu) {
  const close = () => {
    menu.hidden = true;
    menuBtn.setAttribute('aria-expanded', 'false');
  };
  menuBtn.addEventListener('click', () => {
    const open = menu.hidden;
    menu.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && close());
}

// ---- Nav background on scroll ----
const header = document.querySelector<HTMLElement>('[data-header]');
if (header) {
  const onScroll = () => header.toggleAttribute('data-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ---- Reveal on scroll ----
const revealEls = document.querySelectorAll<HTMLElement>('.reveal');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealEls.forEach((el) => io.observe(el));
}

// ---- Pointer spotlight on cards ----
if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
  document.querySelectorAll<HTMLElement>('.spotlight').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

// ---- Copy email ----
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy ?? '';
    const label = btn.querySelector<HTMLElement>('[data-copy-label]');
    try {
      await navigator.clipboard.writeText(text);
      if (label) {
        const prev = label.textContent;
        label.textContent = 'Copied!';
        btn.setAttribute('data-copied', '');
        setTimeout(() => {
          label.textContent = prev;
          btn.removeAttribute('data-copied');
        }, 1800);
      }
    } catch {
      window.location.href = `mailto:${text}`;
    }
  });
});

// ---- Work filter (on /work) ----
const filterBar = document.querySelector<HTMLElement>('[data-filter-bar]');
if (filterBar) {
  const buttons = filterBar.querySelectorAll<HTMLButtonElement>('button[data-area]');
  const items = document.querySelectorAll<HTMLElement>('[data-areas]');
  const count = document.querySelector<HTMLElement>('[data-filter-count]');
  const apply = (area: string) => {
    let shown = 0;
    items.forEach((item) => {
      const match = area === 'All' || (item.dataset.areas ?? '').split(',').includes(area);
      item.hidden = !match;
      if (match) shown++;
    });
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.area === area)));
    if (count) count.textContent = String(shown);
    const url = new URL(window.location.href);
    if (area === 'All') url.searchParams.delete('area');
    else url.searchParams.set('area', area);
    history.replaceState(null, '', url);
  };
  buttons.forEach((b) => b.addEventListener('click', () => apply(b.dataset.area ?? 'All')));
  const initial = new URL(window.location.href).searchParams.get('area');
  if (initial && [...buttons].some((b) => b.dataset.area === initial)) apply(initial);
}

// ---- Footer year ----
document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = String(new Date().getFullYear())));
