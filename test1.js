class NumberComponent {
  constructor({min = 0, max = 10, step = 1, value = 0} = {}) {
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

    ncInput.addEventListener("focusin", event => {
      nc.classList.add("nc-focus");
      ncPlusBtn.classList.add("nc-controller-focus");
      ncMinusBtn.classList.add("nc-controller-focus");
    })

    ncInput.addEventListener("focusout", event => {
      nc.classList.remove("nc-focus");
      ncPlusBtn.classList.remove("nc-controller-focus");
      ncMinusBtn.classList.remove("nc-controller-focus");
    })

    ncPlusBtn.addEventListener("click", event => {
      if (this.value < max) {
        this.value++;
      } 
    })

    ncMinusBtn.addEventListener("click", event => {
      if (this.value > min) {
        this.value--;
      }
    })

    this.elems = { nc, ncPlusBtn, ncInput, ncMinusBtn };
  }



  get value() {
    return +this.elems.ncInput.value;
  }

  set value(value) {
    this.elems.ncInput.value = value;
  }
}

let nc = new NumberComponent();

document.body.append(nc.elems.nc);
