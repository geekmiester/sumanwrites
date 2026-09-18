/* ========================================
   SITE BOOTSTRAP
   Loads labeled styles/components and wires shared interactions.
   ======================================== */
(function () {
  var stylesheets = [
    'assets/css/fontawesome-all.min.css',
    'assets/css/social.css',
    'assets/css/theme.css',
    'assets/css/colors.css',
    'assets/css/styles.css',
    'assets/css/components.css'
  ];
  stylesheets.forEach(function (href) {
    if (!document.querySelector('link[href="' + href + '"]')) {
      var stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = href;
      document.head.appendChild(stylesheet);
    }
  });

  var componentScript = document.createElement('script');
  componentScript.src = 'assets/js/components.js';
  componentScript.onload = function () {
    if (window.SiteComponents) window.SiteComponents.mount();
    initAnimations();
    wireInteractions();
  };
  document.head.appendChild(componentScript);

  function initAnimations() {
    var revealItems = document.querySelectorAll('.reveal');
    if (!revealItems.length) return;

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach(function (item) {
        item.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px'
    });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  }

  function wireInteractions() {
    var resumeHref = 'assets/resume/suman-gautam-product-manager-resume.pdf';
    document.querySelectorAll('a[href*="#resume"], a[href*="resume"]').forEach(function (link) {
      link.href = resumeHref;
      link.setAttribute('download', '');
    });
    var toggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.site-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      });
    });
  }
}());
