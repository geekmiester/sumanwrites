(function () {
  var iconStyles = [
    'assets/css/fontawesome-all.min.css',
    'assets/css/social.css'
  ];
  iconStyles.forEach(function (href) {
    if (!document.querySelector('link[href="' + href + '"]')) {
      var stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = href;
      document.head.appendChild(stylesheet);
    }
  });
  var nav = document.querySelector('.site-nav');
  if (nav) {
    var page = window.location.pathname.split('/').pop() || 'index.html';
    var links = [
      ['index.html', 'Home'],
      ['projects.html', 'Projects'],
      ['blogs.html', 'Blogs'],
      ['aboutme.html', 'About'],
      ['contact.html', 'Contact']
    ];
    nav.innerHTML = links.map(function (item) {
      var active = page === item[0] || (item[0] === 'projects.html' && page === 'work.html') ? ' class="active"' : '';
      return '<a href="' + item[0] + '"' + active + '>' + item[1] + '</a>';
    }).join('') + '<a class="nav-resume" href="contact.html#resume">Resume <span>↗</span></a>';
  }
    var resumeHref = 'assets/resume/suman-gautam-product-manager-resume.pdf';
    document.querySelectorAll('a[href*="#resume"], a[href*="resume"]').forEach(function (link) {
      link.href = resumeHref;
      link.setAttribute('download', '');
    });
    var socialLinks = [
      ['LinkedIn', 'https://www.linkedin.com/in/sumanwrites/', 'fab fa-linkedin-in'],
      ['Dribbble', 'https://dribbble.com/geekmiester', 'fab fa-dribbble'],
      ['Email', 'mailto:gautamsumanwrites@gmail.com', 'fas fa-envelope'],
      ['Instagram', 'https://www.instagram.com/suman_being/', 'fab fa-instagram'],
      ['YouTube', 'https://www.youtube.com/@sumanwrites', 'fab fa-youtube']
    ];
    document.querySelectorAll('.footer-links').forEach(function (footerLinks) {
      var resume = footerLinks.querySelector('a[href*="resume"]');
      var resumeHref = resume ? resume.href : 'assets/resume/suman-gautam-product-manager-resume.pdf';
      footerLinks.innerHTML = '';
      socialLinks.forEach(function (social) {
        var link = document.createElement('a');
        link.className = 'social-link';
        link.href = social[1];
        link.setAttribute('aria-label', social[0]);
        link.title = social[0];
        link.innerHTML = '<i class="' + social[2] + '" aria-hidden="true"></i><span class="sr-only">' + social[0] + '</span>';
        if (social[1].indexOf('mailto:') !== 0) {
          link.target = '_blank';
          link.rel = 'noreferrer';
        }
        footerLinks.appendChild(link);
      });
      var resumeLink = document.createElement('a');
      resumeLink.className = 'resume-link';
      resumeLink.href = resumeHref;
      resumeLink.setAttribute('download', '');
      resumeLink.textContent = 'Resume ↓';
      footerLinks.appendChild(resumeLink);
    });
  var toggle = document.querySelector('.menu-toggle');
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
}());
