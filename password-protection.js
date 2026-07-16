// Password protection for select project pages
(function () {
  const PROTECTED_PAGES = [
    "agentic.html",
    "segment-opportunity-simulator.html",
    "persona-pathways.html",
  ];
  const CORRECT_PASSWORD = "apple";
  const SESSION_DURATION = 20 * 60 * 1000; // 20 minutes in milliseconds
  const AUTH_KEY = "portfolioAuth";

  // Check if current page needs protection
  const currentPage = window.location.pathname.split("/").pop();
  if (!PROTECTED_PAGES.includes(currentPage)) {
    return; // Not a protected page
  }

  // Check if user is already authenticated
  function isAuthenticated() {
    const authData = localStorage.getItem(AUTH_KEY);
    if (!authData) return false;

    try {
      const { timestamp } = JSON.parse(authData);
      const now = Date.now();
      const elapsed = now - timestamp;

      // Check if session is still valid
      if (elapsed < SESSION_DURATION) {
        return true;
      } else {
        // Session expired, clear it
        localStorage.removeItem(AUTH_KEY);
        return false;
      }
    } catch (e) {
      localStorage.removeItem(AUTH_KEY);
      return false;
    }
  }

  // If already authenticated, no need to show password prompt
  if (isAuthenticated()) {
    return;
  }

  // Create password overlay
  const overlay = document.createElement("div");
  overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `;

  const container = document.createElement("div");
  container.style.cssText = `
        max-width: 400px;
        padding: 40px;
        text-align: center;
    `;

  const title = document.createElement("h2");
  title.textContent = "Password Required";
  title.style.cssText = `
        font-size: 24px;
        margin-bottom: 20px;
        font-family: "Helvetica Neue", Arial, sans-serif;
    `;

  const backLink = document.createElement("a");
  backLink.href = "../index.html";
  backLink.textContent = "← Back to Home";
  backLink.style.cssText = `
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 14px;
        color: #666;
        text-decoration: none;
        font-family: "Helvetica Neue", Arial, sans-serif;
        transition: color 0.2s;
    `;
  backLink.addEventListener("mouseover", function () {
    backLink.style.color = "#000";
  });
  backLink.addEventListener("mouseout", function () {
    backLink.style.color = "#666";
  });

  const message = document.createElement("p");
  message.textContent =
    "This project is password protected. Please enter the password to continue.";
  message.style.cssText = `
        font-size: 16px;
        margin-bottom: 30px;
        color: #666;
        font-family: "Helvetica Neue", Arial, sans-serif;
    `;

  const input = document.createElement("input");
  input.type = "password";
  input.placeholder = "Enter password";
  input.style.cssText = `
        width: 100%;
        padding: 12px;
        font-size: 16px;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        margin-bottom: 15px;
        font-family: "Helvetica Neue", Arial, sans-serif;
        box-sizing: border-box;
    `;

  const button = document.createElement("button");
  button.textContent = "Submit";
  button.style.cssText = `
        width: 100%;
        padding: 12px;
        font-size: 16px;
        background: #000;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-family: "Helvetica Neue", Arial, sans-serif;
    `;

  const errorMsg = document.createElement("p");
  errorMsg.style.cssText = `
        color: #d32f2f;
        font-size: 14px;
        margin-top: 10px;
        display: none;
        font-family: "Helvetica Neue", Arial, sans-serif;
    `;

  function checkPassword() {
    if (input.value === CORRECT_PASSWORD) {
      // Store authentication with timestamp
      const authData = {
        timestamp: Date.now(),
      };
      localStorage.setItem(AUTH_KEY, JSON.stringify(authData));

      overlay.remove();
      document.body.style.overflow = "";
    } else {
      errorMsg.textContent = "Incorrect password. Please try again.";
      errorMsg.style.display = "block";
      input.value = "";
      input.focus();
    }
  }

  button.addEventListener("click", checkPassword);
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      checkPassword();
    }
  });

  container.appendChild(title);
  container.appendChild(message);
  container.appendChild(input);
  container.appendChild(button);
  container.appendChild(errorMsg);
  overlay.appendChild(backLink);
  overlay.appendChild(container);
  document.body.appendChild(overlay);

  // Hide main content until authenticated
  document.body.style.overflow = "hidden";
  input.focus();
})();
