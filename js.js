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

  //Cartsssssss
  
});