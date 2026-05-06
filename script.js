const header = document.querySelector("[data-header]");
const bookingForm = document.querySelector(".booking-form");

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(bookingForm);
  const name = formData.get("name") || "고객";
  const service = formData.get("service") || "세차";

  alert(`${name}님, ${service} 문의가 접수되었습니다. 곧 연락드리겠습니다.`);
  bookingForm.reset();
});
