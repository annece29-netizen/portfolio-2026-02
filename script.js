/* ============================================================
   PORTFOLIO — ANNE-CÉCILE LE DAIN
   script.js — Navigation + interactions minimales
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Navigation sticky avec background au scroll --- */
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  /* --- Menu hamburger mobile --- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Fermer le menu quand on clique sur un lien
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      });
    });
  }

  /* --- Smooth scroll sur les ancres internes --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* --- Animation d'apparition au scroll (Intersection Observer) --- */
  const animElements = document.querySelectorAll(
    '.skill-card, .projet-card, .etude-section, .chiffre-item, .contact-lien, .avis-card'
  );

  if (animElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    animElements.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }

  /* --- Lightbox avec zoom + pan --- */

  // Créer la structure
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox-overlay lightbox-zoom-fit';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Image agrandie');

  const lightboxInner = document.createElement('div');
  lightboxInner.className = 'lightbox-inner';

  const lightboxImg = document.createElement('img');
  lightboxImg.alt = '';
  lightboxInner.appendChild(lightboxImg);

  const lightboxClose = document.createElement('button');
  lightboxClose.className = 'lightbox-close';
  lightboxClose.setAttribute('aria-label', 'Fermer');
  lightboxClose.innerHTML = '✕';

  // Barre d'outils zoom
  const toolbar = document.createElement('div');
  toolbar.className = 'lightbox-toolbar';

  const btnZoomOut = document.createElement('button');
  btnZoomOut.setAttribute('aria-label', 'Dézoomer');
  btnZoomOut.innerHTML = '−';

  const zoomLabel = document.createElement('span');
  zoomLabel.className = 'lightbox-zoom-level';
  zoomLabel.textContent = '100%';

  const btnZoomIn = document.createElement('button');
  btnZoomIn.setAttribute('aria-label', 'Zoomer');
  btnZoomIn.innerHTML = '+';

  const btnReset = document.createElement('button');
  btnReset.setAttribute('aria-label', 'Réinitialiser');
  btnReset.innerHTML = '⊙';
  btnReset.title = 'Réinitialiser';

  toolbar.appendChild(btnZoomOut);
  toolbar.appendChild(zoomLabel);
  toolbar.appendChild(btnZoomIn);
  toolbar.appendChild(btnReset);

  lightbox.appendChild(lightboxClose);
  lightbox.appendChild(lightboxInner);
  lightbox.appendChild(toolbar);
  document.body.appendChild(lightbox);

  // État zoom/pan
  var lbScale = 1;
  var lbX = 0;
  var lbY = 0;
  var lbDragging = false;
  var lbDragStartX = 0;
  var lbDragStartY = 0;
  var lbDragOriginX = 0;
  var lbDragOriginY = 0;
  var MIN_SCALE = 0.5;
  var MAX_SCALE = 8;

  function applyTransform(animated) {
    lightboxInner.style.transition = animated ? 'transform 0.2s ease' : 'none';
    lightboxInner.style.transform = 'translate(' + lbX + 'px, ' + lbY + 'px) scale(' + lbScale + ')';
    zoomLabel.textContent = Math.round(lbScale * 100) + '%';
    lightbox.classList.toggle('lightbox-zoom-fit', lbScale <= 1);
  }

  function resetView(animated) {
    lbScale = 1;
    lbX = 0;
    lbY = 0;
    applyTransform(animated !== false);
  }

  function zoomBy(factor, cx, cy) {
    var newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, lbScale * factor));
    if (newScale === lbScale) return;
    // Zoom centré sur le point (cx, cy) dans l'overlay
    var rect = lightbox.getBoundingClientRect();
    var centerX = (cx !== undefined ? cx : rect.width / 2) - rect.left;
    var centerY = (cy !== undefined ? cy : rect.height / 2) - rect.top;
    var scaleChange = newScale / lbScale;
    lbX = centerX - scaleChange * (centerX - lbX);
    lbY = centerY - scaleChange * (centerY - lbY);
    lbScale = newScale;
    applyTransform(false);
  }

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    resetView(false);
    document.body.style.overflow = 'hidden';
    lightbox.style.display = 'flex';
    lightbox.offsetHeight;
    lightbox.classList.add('visible');
  }

  function closeLightbox() {
    lightbox.classList.remove('visible');
    document.body.style.overflow = '';
    setTimeout(function () {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
      resetView(false);
    }, 250);
  }

  // Ouvrir au clic sur une image dans .visuel-projet
  document.querySelectorAll('.visuel-projet img').forEach(function (img) {
    img.addEventListener('click', function () {
      openLightbox(this.src, this.alt);
    });
  });

  // Boutons toolbar
  btnZoomIn.addEventListener('click', function (e) {
    e.stopPropagation();
    zoomBy(1.4);
    applyTransform(true);
  });
  btnZoomOut.addEventListener('click', function (e) {
    e.stopPropagation();
    zoomBy(1 / 1.4);
    applyTransform(true);
  });
  btnReset.addEventListener('click', function (e) {
    e.stopPropagation();
    resetView(true);
  });

  // Fermer via ✕
  lightboxClose.addEventListener('click', function (e) {
    e.stopPropagation();
    closeLightbox();
  });

  // Zoom à la molette
  lightbox.addEventListener('wheel', function (e) {
    e.preventDefault();
    var factor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
    zoomBy(factor, e.clientX, e.clientY);
  }, { passive: false });

  // Pan à la souris
  lightbox.addEventListener('mousedown', function (e) {
    if (e.target === lightboxClose || e.target === btnZoomIn || e.target === btnZoomOut || e.target === btnReset || toolbar.contains(e.target)) return;
    if (lbScale <= 1) return; // pas de pan si zoom = 100%
    lbDragging = true;
    lbDragStartX = e.clientX;
    lbDragStartY = e.clientY;
    lbDragOriginX = lbX;
    lbDragOriginY = lbY;
    lightbox.classList.add('dragging');
    e.preventDefault();
  });

  document.addEventListener('mousemove', function (e) {
    if (!lbDragging) return;
    lbX = lbDragOriginX + (e.clientX - lbDragStartX);
    lbY = lbDragOriginY + (e.clientY - lbDragStartY);
    applyTransform(false);
  });

  document.addEventListener('mouseup', function (e) {
    if (!lbDragging) return;
    lbDragging = false;
    lightbox.classList.remove('dragging');
    // Si pas de déplacement → fermer seulement si zoom = 1
    var moved = Math.abs(e.clientX - lbDragStartX) > 3 || Math.abs(e.clientY - lbDragStartY) > 3;
    if (!moved && lbScale <= 1 && e.target === lightbox) {
      closeLightbox();
    }
  });

  // Clic fond pour fermer (quand pas en zoom)
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox && lbScale <= 1) {
      closeLightbox();
    }
  });

  // Touch : pinch-to-zoom + pan tactile
  var lbTouchDist = null;
  var lbTouchMidX = 0;
  var lbTouchMidY = 0;
  var lbTouchOriginX = 0;
  var lbTouchOriginY = 0;

  function getTouchDist(touches) {
    var dx = touches[0].clientX - touches[1].clientX;
    var dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  lightbox.addEventListener('touchstart', function (e) {
    if (e.touches.length === 2) {
      lbTouchDist = getTouchDist(e.touches);
      lbTouchMidX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      lbTouchMidY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      lbTouchOriginX = lbX;
      lbTouchOriginY = lbY;
      e.preventDefault();
    } else if (e.touches.length === 1 && lbScale > 1) {
      lbDragging = true;
      lbDragStartX = e.touches[0].clientX;
      lbDragStartY = e.touches[0].clientY;
      lbDragOriginX = lbX;
      lbDragOriginY = lbY;
    }
  }, { passive: false });

  lightbox.addEventListener('touchmove', function (e) {
    if (e.touches.length === 2 && lbTouchDist !== null) {
      var newDist = getTouchDist(e.touches);
      var factor = newDist / lbTouchDist;
      lbTouchDist = newDist;
      zoomBy(factor, lbTouchMidX, lbTouchMidY);
      e.preventDefault();
    } else if (e.touches.length === 1 && lbDragging) {
      lbX = lbDragOriginX + (e.touches[0].clientX - lbDragStartX);
      lbY = lbDragOriginY + (e.touches[0].clientY - lbDragStartY);
      applyTransform(false);
    }
  }, { passive: false });

  lightbox.addEventListener('touchend', function () {
    lbTouchDist = null;
    lbDragging = false;
  });

  // Double-clic : zoom 2.5x centré sur le point cliqué, ou reset si déjà zoomé
  lightbox.addEventListener('dblclick', function (e) {
    if (toolbar.contains(e.target) || e.target === lightboxClose) return;
    if (lbScale > 1) {
      resetView(true);
    } else {
      zoomBy(2.5, e.clientX, e.clientY);
      applyTransform(true);
    }
  });

  // Fermer avec Échap
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('visible')) return;
    if (e.key === 'Escape') { closeLightbox(); }
    if (e.key === '+' || e.key === '=') { zoomBy(1.3); applyTransform(true); }
    if (e.key === '-') { zoomBy(1 / 1.3); applyTransform(true); }
    if (e.key === '0') { resetView(true); }
  });

});
