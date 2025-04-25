function createBanner(message) {
    const banner = document.createElement("div");
    banner.id = "top-banner";
    banner.innerHTML = `
      ${message}
      <span class="close-btn" onclick="this.parentElement.remove()">✕</span>
    `;
    document.body.appendChild(banner);
  }

  // Example usage



  document.addEventListener("DOMContentLoaded", function () {
    createBanner("This site uses cookies to track your every move!☺️ ✅✅👍👍");


    const popup = document.createElement('div');
    popup.id = 'infopopup';
    popup.innerHTML = `
      <strong>🔥 50% OFF 🔥</strong><br>
      Just give us your SSN and full legal name!<br>
      <button id="closeBtn">NO THANKS (but yes)</button>
      <button id="yesBtn">Sell my soul too</button>
    `;

    document.body.appendChild(popup);

    document.getElementById('closeBtn').addEventListener('click', function () {
      popup.remove();
      alert("Wait, are you SURE?? We'll still call you.");
    });

    document.getElementById('yesBtn').addEventListener('click', function () {
        popup.remove();
        alert("Thank you for your data!");
      });


    //Cartsssssss
    
  });