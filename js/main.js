document.documentElement.setAttribute("lang", "en");

// first class NumberComponent
const fClassNC = new NumberComponent({id: "f-class-input", min: 0, max: 10});
// economy class NumberComponent
const eClassNC = new NumberComponent({id: "e-class-input", min: 0, max: 10});
// from TextComponent
const fromTC = new TextComponent({id: "input-from", placeholder:"Dhaka, Bangladesh"});
// To TextComponent
const toTC = new TextComponent({id: "input-to", placeholder:"New York, USA"});
// departure calendar component
const departureCC = new CalendarComponent({id: "input-departure-date"});
// return calendar component
const returnCC = new CalendarComponent({id: "input-return-date"});

document.querySelector(".f-class [data-number-component]").replaceWith(fClassNC.elements.nc);
document.querySelector(".e-class [data-number-component]").replaceWith(eClassNC.elements.nc);

document.querySelector("[data-text-component='from']").replaceWith(fromTC.elements.tc);
document.querySelector("[data-text-component='to']").replaceWith(toTC.elements.tc);

document.querySelector("[data-calendar-component='departure']").replaceWith(departureCC.elements.cc);
document.querySelector("[data-calendar-component='return']").replaceWith(returnCC.elements.cc);

const FIRST_CLASS_PRICE = 150;
const ECONOMY_PRICE = 100;
const VAT = 0.1;

function updateCalculations(amount) {
  const subtotalElt = document.querySelector("#subtotal");
  const vatElt = document.querySelector("#vat");
  const totalElt = document.querySelector("#total");

  subtotalElt.textContent = +subtotalElt.textContent + amount;
  vatElt.textContent = Math.round(+subtotalElt.textContent * VAT);
  totalElt.textContent = +subtotalElt.textContent + +vatElt.textContent;
}

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("nc-controller") || 
      event.target.parentNode.classList.contains("nc-controller")) {
    const controllerBtn = event.target.classList.contains("nc-controller") ? event.target : event.target.parentNode; 
    const inputGroup = event.target.closest(".input-group");
    const inputElt = inputGroup.querySelector("input");
    const behavior = controllerBtn.classList.contains("nc-plus-btn") ? "plus" : "minus";
    const oldTicketCount = +inputElt.value; 

    if (behavior == "plus" && +inputElt.value < inputElt.max) {
      inputElt.value = +inputElt.value + 1; 
    } else if (behavior == "minus" && +inputElt.value > inputElt.min) {
      inputElt.value = +inputElt.value - 1; 
    }

    const newTicketCount = +inputElt.value;
    const ticketPrice = inputGroup.classList.contains("f-class") ? FIRST_CLASS_PRICE : ECONOMY_PRICE;
    const oldPrice = oldTicketCount * ticketPrice;
    const newPrice = newTicketCount * ticketPrice;
    updateCalculations(newPrice - oldPrice);
  }
});

function showFlightDetails() {
  let from = document.querySelector("#input-from").value;
  let to = document.querySelector("#input-to").value;
  let departureDate = document.querySelector("#input-departure-date").value;
  let returnDate = document.querySelector("#input-departure-date").value;
  let fClass = document.querySelector("#f-class-input").value;
  let eClass = document.querySelector("#e-class-input").value;
  let subtotal = document.querySelector("#subtotal").textContent;
  let vat = document.querySelector("#vat").textContent;
  let total = document.querySelector("#total").textContent;

  let html = `
  <div class="modal">
    <h2>Flight details</h2>
    <div class="row">
      <div>
        <h4>From</h4>
        <p>${from}</p>
      </div>
      <div>
        <h4>To</h4>
        <p>${to}</p>
      </div>
    </div>

    <div class="row">
      <div>
        <h4>Departure</h4>
        <p>${new Date(departureDate).toString()}</p>
      </div>
      <div>
        <h4>return</h4>
        <p>${new Date(returnDate).toString()}</p>
      </div>
    </div>

    <div class="row">
      <div>
        <h4>First class tickets</h4>
        <p>${fClass}</p>
      </div>
      <div>
        <h4>Economy tickets</h4>
        <p>${eClass}</p>
      </div>
    </div>


    <div class="calculation-summary">
      <div>
        <p>Subtotal</p>
        <p>$${subtotal}</p>
      </div>
      <div>
        <p>VAT</p>
        <p>$${vat}</p>
      </div>
      <hr>
      <div>
        <p>Total</p>
        <p>$${total}</p>
      </div>
    </div>
    <div id="exit" class="btn-big">Close</div>
  </div>
  `;
  const modal = document.createElement("div");
  modal.innerHTML = html;
  const exitBtn = modal.querySelector("#exit");
  const bookingForm = document.querySelector(".booking-form");
  exitBtn.addEventListener("click", event => {
    modal.hidden = true;
  })
  document.body.append(modal);
}

const bookNowBtn = document.querySelector("#btn-book-now");

bookNowBtn.onclick = showFlightDetails;
