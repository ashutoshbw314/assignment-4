class NumberComponent {
  constructor({min = 0, max = 10, step = 1, value = 0, id = ""} = {}) {
    const nc = document.createElement("div");
    nc.className = "nc";  // nc stands for number component
    nc.innerHTML = `
      <div class="nc-controller nc-plus-btn">
        <i class="fas fa fa-plus"></i>
      </div>  
      <input class="nc-input" type="number" min="${min}" max="${max}" step="${step}" value="${value}">                 
      <div class="nc-controller nc-minus-btn">
        <i class="fas fa fa-minus"></i>
      </div>`;

    const ncInput = nc.querySelector(".nc-input");
    const ncPlusBtn = nc.querySelector(".nc-plus-btn");
    const ncMinusBtn = nc.querySelector(".nc-minus-btn");

    if (id) ncInput.id = id;

    ncInput.addEventListener("focusin", () => {
      nc.classList.add("nc-focus");
      ncPlusBtn.classList.add("nc-controller-focus");
      ncMinusBtn.classList.add("nc-controller-focus");
    })

    ncInput.addEventListener("focusout", () => {
      nc.classList.remove("nc-focus");
      ncPlusBtn.classList.remove("nc-controller-focus");
      ncMinusBtn.classList.remove("nc-controller-focus");
    })

    this.elements = { nc, ncPlusBtn, ncInput, ncMinusBtn };
  }
}

class TextComponent {
  constructor({id = "", placeholder = ""} = {}) {
    const tc = document.createElement("div");
    tc.className = "tc";  // tc stands for text component
    tc.innerHTML = `<input class="tc-input" placeholder="${placeholder}" type="text">`
    const tcInput = tc.querySelector(".tc-input");

    if (id) tcInput.id = id;

    tcInput.addEventListener("focusin", () => {
      tc.classList.add("tc-focus");
    })

    tcInput.addEventListener("focusout", () => {
      tc.classList.remove("tc-focus");
    })

    this.elements = {tc, tcInput};
  }

  get text() {
    return this.elements.tcInput.textContent;
  }

  set text(text) {
    this.elements.tcInput.textContent = text;
  }
}


class CalendarComponent {
  constructor({id = ""} = {}) {
    const cc = document.createElement("div");
    cc.className = "cc";  // cc stands for calendar component
    cc.innerHTML = `<input class="cc-input" type="date">`
    const ccInput = cc.querySelector(".cc-input");

    if (id) ccInput.id = id;

    ccInput.addEventListener("focusin", () => {
      cc.classList.add("cc-focus");
    })

    ccInput.addEventListener("focusout", () => {
      cc.classList.remove("cc-focus");
    })

    this.elements = {cc, ccInput};
  }

  get text() {
    return this.elements.ccInput.textContent;
  }

  set text(text) {
    this.elements.ccInput.textContent = text;
  }

}
