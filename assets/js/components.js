/* ========================================
   REUSABLE SITE COMPONENTS
   Shared logo, website title, header menu, buttons, and footer.
   ======================================== */
(function (window, document) {
  var resumePath = 'assets/resume/suman-gautam-product-manager-resume.pdf';
  var socialLinks = [
    ['LinkedIn', 'https://www.linkedin.com/in/sumanwrites/', 'fab fa-linkedin-in'],
    ['Dribbble', 'https://dribbble.com/geekmiester', 'fab fa-dribbble'],
    ['Email', 'mailto:gautamsumanwrites@gmail.com', 'fas fa-envelope'],
    ['Instagram', 'https://www.instagram.com/suman_being/', 'fab fa-instagram'],
    ['YouTube', 'https://www.youtube.com/@sumanwrites', 'fab fa-youtube']
  ];

  function createLogo() {
    var logo = document.createElement('a');
    logo.className = 'brand component-logo';
    logo.href = 'index.html';
    logo.setAttribute('aria-label', 'Suman Gautam home');
    logo.innerHTML = '<span class="component-logo-mark">SG</span><strong class="component-logo-title">Suman Gautam</strong>';
    return logo;
  }

  function createHeaderMenu() {
    var nav = document.createElement('nav');
    nav.className = 'site-nav component-header-menu';
    nav.id = 'site-nav';
    nav.setAttribute('aria-label', 'Primary navigation');
    var page = window.location.pathname.split('/').pop() || 'index.html';
    var links = [['index.html', 'Home'], ['projects.html', 'Projects'], ['blogs.html', 'Blogs'], ['aboutme.html', 'About'], ['contact.html', 'Contact']];
    nav.innerHTML = links.map(function (item) {
      var active = page === item[0] || (item[0] === 'projects.html' && page === 'work.html') ? ' class="active"' : '';
      return '<a href="' + item[0] + '"' + active + '>' + item[1] + '</a>';
    }).join('') + '<a class="nav-resume" href="' + resumePath + '" download>Resume <span>↓</span></a>';
    return nav;
  }

  function mountHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    header.innerHTML = '';
    header.appendChild(createLogo());
    var toggle = document.createElement('button');
    toggle.className = 'menu-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'site-nav');
    toggle.innerHTML = '<span></span><span></span><span></span><b class="sr-only">Open menu</b>';
    header.appendChild(toggle);
    header.appendChild(createHeaderMenu());
  }

  function mountFooter() {
    document.querySelectorAll('.site-footer').forEach(function (footer) {
      footer.innerHTML = '<div class="container footer-grid component-footer"><div><a class="brand component-logo" href="index.html"><span class="component-logo-mark">SG</span><strong class="component-logo-title">Suman Gautam</strong></a><p>Product Manager | Product Owner<br>Adelaide, Australia</p></div><div class="footer-links component-footer-links"></div><p class="footer-note component-footer-note">Designed and built with care.<br>© 2026 Suman Gautam</p></div>';
      var links = footer.querySelector('.footer-links');
      socialLinks.forEach(function (social) {
        var link = document.createElement('a');
        link.className = 'social-link';
        link.href = social[1];
        link.title = social[0];
        link.setAttribute('aria-label', social[0]);
        link.innerHTML = '<i class="' + social[2] + '" aria-hidden="true"></i><span class="sr-only">' + social[0] + '</span>';
        if (social[1].indexOf('mailto:') !== 0) { link.target = '_blank'; link.rel = 'noreferrer'; }
        links.appendChild(link);
      });
      var resume = document.createElement('a');
      resume.className = 'resume-link';
      resume.href = resumePath;
      resume.setAttribute('download', '');
      resume.textContent = 'Resume ↓';
      links.appendChild(resume);
    });
  }

  window.SiteComponents = { mount: function () { mountHeader(); mountFooter(); } };
}(window, document));
