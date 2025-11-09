// ================================
// MODAL.JS — For project popups
// ================================

const modal = document.createElement("div");
modal.className = "modal hidden";
modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <img src="" alt="project preview" id="modalImg" />
    <h3 id="modalTitle"></h3>
    <p id="modalDesc"></p>
    <a href="#" id="modalLink" target="_blank" class="btn primary">Open Project</a>
  </div>
`;
document.body.appendChild(modal);

const modalImg = modal.querySelector("#modalImg");
const modalTitle = modal.querySelector("#modalTitle");
const modalDesc = modal.querySelector("#modalDesc");
const modalLink = modal.querySelector("#modalLink");
const closeBtn = modal.querySelector(".close");

closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img").src;
    const title = card.querySelector("h3").textContent;
    const desc = card.querySelector("p").textContent;
    const link = card.querySelector("a").href;

    modalImg.src = img;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalLink.href = link;

    modal.classList.remove("hidden");
  });
});
