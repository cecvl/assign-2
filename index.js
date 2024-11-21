document.addEventListener("DOMContentLoaded", () => {
  const mainArea = document.getElementById("main-area");

  // Functionality for book icons
  const bookIcons = document.querySelectorAll(".book-icon");
  bookIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const title = icon.getAttribute("data-title");
      const description = icon.getAttribute("data-description");
      const image = icon.getAttribute("data-image");

      // Update the main display area with selected book details
      mainArea.innerHTML = `
          <div class="book-details">
            <h2>${title}</h2>
            <img id="book-image" src="${image}" alt="${title} Cover" />
            <p id="book-description">${description}</p>
          </div>
        `;
    });
  });

  // Navigation links
  // Home - Reset to default view
  document.getElementById("home-link").addEventListener("click", () => {
    mainArea.innerHTML = `
        <div class="book-details">
          <h2>Book Title</h2>
          <img id="book-image" src="#" alt="Book Cover" />
          <p id="book-description">Click on a book to view details here.</p>
        </div>
      `;
  });

  // Contact Us - Display contact table
  document.getElementById("contact-link").addEventListener("click", () => {
    mainArea.innerHTML = `
        <table class="contact-table">
          <tr>
            <th>Contact Type</th>
            <th>Details</th>
          </tr>
          <tr>
            <td>Email</td>
            <td>christiancecil.dev@gmail.com</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>+2547 456 78900</td>
          </tr>
          <tr>
            <td>GitHub</td>
            <td><a href="https://github.com/cecvl" target="_blank">github.com/cecil</a></td>
          </tr>
        </table>
      `;
  });

  // Feedback - Display feedback form
  document.getElementById("feedback-link").addEventListener("click", () => {
    mainArea.innerHTML = `
        <form class="feedback-form">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
  
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" />
  
          <label for="message">Feedback:</label>
          <textarea id="message" name="message" rows="5" placeholder="Your Feedback"></textarea>
  
          <button type="submit">Submit Feedback</button>
        </form>
      `;
  });
});
