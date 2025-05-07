function createBanner(message) {
  const banner = document.createElement("div");
  banner.id = "top-banner";
  banner.innerHTML = `
    ${message}
    <span class="close-btn" id="closeBannerBtn">✕</span>
  `;
  document.body.appendChild(banner);

  document.getElementById('closeBannerBtn').addEventListener('click', function () {
    banner.remove();
    localStorage.setItem('hideBanner', 'true');
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Check localStorage before showing the banner
  if (!localStorage.getItem('hideBanner')) {
    createBanner('<span style="font-weight: bolder;">80&percnt; OFF OFFERS!</span> Only valid if you beat Phelony in a fight. <a href="home.html" style="color: #34c6eb; text-decoration: underline;">See More</a>');
  }

  // Check localStorage before showing the popup
  if (!localStorage.getItem('hidePopup')) {
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
      localStorage.setItem('hidePopup', 'true');
      alert("Wait, are you SURE?? We'll still call you.");
    });

    document.getElementById('yesBtn').addEventListener('click', function () {
      popup.remove();
      localStorage.setItem('hidePopup', 'true');
      alert("Thank you for your data!");
    });
  }

  //Cartsssssss
});
