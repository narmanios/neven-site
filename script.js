// Portfolio Website JavaScript

// Work Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
  const workToggle = document.getElementById("workToggle");

  if (workToggle) {
    workToggle.addEventListener("click", function () {
      // Toggle functionality can be expanded based on requirements
      // For now, it's a placeholder that could show/hide portfolio items
      // or navigate to a filtered view
      console.log("Work toggle clicked");

      // Example: Add active state
      this.classList.toggle("active");
    });
  }

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // Lazy loading images for better performance
  const images = document.querySelectorAll(".portfolio-link img");

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
          }
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => {
      imageObserver.observe(img);
    });
  }

  // Add animation on scroll for portfolio items
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  const itemObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  portfolioItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    itemObserver.observe(item);
  });

  // Portfolio Filter Functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItemsForFilter = document.querySelectorAll(".portfolio-item");
  const subsectionTitles = document.querySelectorAll(".subsection-title");

  // Initialize with product design projects on page load
  portfolioItemsForFilter.forEach((item) => {
    const itemCategory = item.getAttribute("data-category");
    if (itemCategory === "product-design") {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });

  // Hide subsection titles that don't match product-design on initial load
  subsectionTitles.forEach((title) => {
    const titleCategory = title.getAttribute("data-category");
    if (titleCategory && titleCategory !== "product-design") {
      title.classList.add("hidden");
    }
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");

      // Update active button state
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Filter portfolio items
      portfolioItemsForFilter.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");

        if (itemCategory === filterValue) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });

      // Filter subsection titles
      subsectionTitles.forEach((title) => {
        const titleCategory = title.getAttribute("data-category");

        if (titleCategory === filterValue) {
          title.classList.remove("hidden");
        } else if (titleCategory) {
          title.classList.add("hidden");
        }
      });
    });
  });
});

// Handle external links
document.addEventListener("click", function (e) {
  const link = e.target.closest('a[target="_blank"]');
  if (link) {
    // Add any additional handling for external links if needed
    console.log("External link clicked:", link.href);
  }
});

// Handle external links with confirmation
document.addEventListener("click", function (e) {
  const link = e.target.closest('a[data-confirm="true"]');
  if (link) {
    e.preventDefault();
    const projectName = link.querySelector("img")?.alt || "this project";
    const confirmed = confirm(
      `You are about to leave this site to view ${projectName}. Continue?`,
    );
    if (confirmed) {
      window.open(link.href, "_blank");
    }
  }
});
