document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("announcementBanner");
  const dismissBtn = document.getElementById("dismissAnnouncement");
  const body = document.body;

  if (!banner || !dismissBtn) return;

  // Banner always shows on load
  body.classList.add("banner-active");

  dismissBtn.addEventListener("click", () => {
    banner.style.transform = "translateY(-100%)";
    banner.style.opacity = "0";

    body.classList.remove("banner-active");

    setTimeout(() => {
      banner.style.display = "none";
    }, 300);
  });
});
