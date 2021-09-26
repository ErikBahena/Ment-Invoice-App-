import * as model from "../model.js";
import InvoiceViewPanel from "./invoicePanelView.js";
import EditInvoiceView from "./editInvoiceView.js";

class InvoiceDetailsView {
  viewInvoiceContainer = document.querySelector(".view-invoice-container");

  _statusContainer = document.querySelector(
    ".view-invoice-status-edit-delete-container"
  );

  _invoiceDetailsContainer = document.querySelector(
    ".invoice-description-container"
  );

  _mobileStatusContainer = document.querySelector(
    ".status-text-mobile-container"
  );
  _editDeleteMarkPaidMobile = document.querySelector(
    ".edit-delete-markaspaid-container-mobile"
  );

  _invoiceControlContainer = document.querySelector(
    ".invoice-control-container"
  );

  _populateContainer = document.querySelector(
    ".invoice-view-container-populate"
  );

  toggleInvoiceDetailsVisibility() {
    this.viewInvoiceContainer.style.display = "flex";
  }

  _toggleInvoiceDetailsVisibilityNone() {
    this.viewInvoiceContainer.style.display = "none";
    this._invoiceControlContainer.style.display = "flex";
    this._populateContainer.style.display = "flex";
    this._editDeleteMarkPaidMobile.style.display = "none";
  }

  _addMediaQueryFlexToNone(element, condition) {
    let checkIfConditionSatisfies = (x) => {
      x.matches
        ? (element.style.display = "flex !important")
        : (element.style.display = "none !important");
    };

    let x = window.matchMedia(condition);
    checkIfConditionSatisfies(x);
    x.addEventListener("change", checkIfConditionSatisfies);
  }

  renderInvoiceDetails(invoice) {
    this._addMediaQueryFlexToNone(
      this._editDeleteMarkPaidMobile,
      "(max-width: 37.5rem)"
    );

    this._statusContainer.innerHTML = "";
    this._mobileStatusContainer.innerHTML = "";
    this._invoiceDetailsContainer.innerHTML = "";

    this._statusContainer.innerHTML = this._generateStatusHtml(invoice);

    this._mobileStatusContainer.innerHTML = this._generateStatusHtml(
      invoice,
      true
    );

    this._invoiceDetailsContainer.innerHTML =
      this._generateDetailsHtml(invoice);

    // had to search the dom after calling these generate html functions because the class ".delete-btn" did not exist until those functions finished executing

    const deleteBtn = document.querySelector(".delete-btn");
    const deleteBtnMobile = document.querySelector(
      ".delete-btn-mobile-container"
    );

    const modal = document.querySelector(".modal-background");

    const markAsPaidBtn = document.querySelector(".mark-paid-btn");
    const markAsPaidBtnMobile = document.querySelector(
      ".markaspaid-btn-mobile-container"
    );

    const editBtn = document.querySelector(".edit-btn");
    const editBtnMobile = document.querySelector(".edit-btn-mobile-container");

    const deleteBtns = [deleteBtnMobile, deleteBtn];
    const markAsPaidBtns = [markAsPaidBtnMobile, markAsPaidBtn];
    const editBtns = [editBtn, editBtnMobile];

    deleteBtns.forEach((btn) =>
      btn?.addEventListener(
        "click",
        this._openDeleteModal.bind(this, modal, invoice?.id)
      )
    );

    markAsPaidBtns.forEach((btn) =>
      btn?.addEventListener("click", this._markAsPaid.bind(this, invoice))
    );

    this._editInvoice(editBtns, invoice);

    this._addGoBackFunctionality();

    this._editDeleteMarkPaidMobile.style.display = "flex";
  }

  _markAsPaid(invoice) {
    const invoices = model.getData("invoices");
    const index = invoices.findIndex((inv) => inv.id === invoice?.id);

    invoices[index].status = "paid";

    localStorage.setItem("invoices", JSON.stringify(invoices));

    this.renderInvoiceDetails(invoices[index]);
  }

  _openDeleteModal(modal, invoiceId) {
    modal.style.display = "flex";
    const modalId = document.querySelector(".deltion-invoice-id");

    modalId.innerHTML = `#${invoiceId}?`;

    modal.addEventListener(
      "click",
      this._closeDeleteModal.bind(this, modal, invoiceId)
    );
  }

  _closeDeleteModal(modal, id, e) {
    const elClass = e.target.classList[0];

    if (
      elClass === "modal-background" ||
      elClass === "cancel-deletion-btn-container" ||
      elClass === "cancel-deletion-btn-text"
    )
      modal.style.display = "none";

    if (
      elClass === "delete-invoice-btn-container" ||
      elClass === "delete-invoice-btn-text"
    ) {
      const invoices = model.getData("invoices");
      const alteredInvoices = invoices.filter((inv) => inv.id !== id);

      if (alteredInvoices.length === 0) {
        localStorage.setItem("invoices", null);
        InvoiceViewPanel.renderInvoices(null);
        InvoiceViewPanel.addFilterByFunctionality();
      }

      if (alteredInvoices.length > 0) {
        localStorage.setItem("invoices", JSON.stringify(alteredInvoices));
        InvoiceViewPanel.renderInvoices(alteredInvoices);
      }

      modal.style.display = "none";
      this._toggleInvoiceDetailsVisibilityNone();
    }
  }

  _generateDetailsHtml(invoice) {
    const billFromAddress = {
      street: invoice?.senderAddress.street,
      city: invoice?.senderAddress.city,
      postCode: invoice?.senderAddress.postCode,
      country: invoice?.senderAddress.country,
    };

    const billToAddress = {
      clientName: invoice?.clientName,
      clientEmail: invoice?.clientEmail,
      street: invoice?.clientAddress.street,
      city: invoice?.clientAddress.city,
      postCode: invoice?.clientAddress.postCode,
      country: invoice?.clientAddress.country,
    };

    return `
    <div class="id-description-and-sender-address-container">
    <div class="id-and-description-container">
      <h3 class="invoice-id no-marg-padd">#${invoice?.id}</h3>
      <div class="product-description body-1">${invoice?.description}</div>
    </div>
    <div class="bill-from-address-container body-2 column">
      <div class="bill-from-street-address">${billFromAddress.street}</div>
      <div class="bill-from-city">${billFromAddress.city}</div>
      <div class="bill-from-postal-code">${billFromAddress.postCode}</div>
      <div class="bill-from-country">${billFromAddress.country}</div>
    </div>
  </div>
  <div class="invoice-date-and-payment-due-billto-sentto-container">
    <div class="invoice-date-payment-due-container">
      <div class="invoice-date-container">
        <div class="invoice-date-text body-1">Invoice Created On</div>
        <h4 class="invoice-date no-marg-padd">${this._formatDateForInvoiceDetails(
          invoice?.createdAt
        )}</h4>
      </div>
      <div class="payment-due-container">
        <div class="payment-due-text body-1">Payment Due</div>
        <h4 class="payment-due-date no-marg-padd">${this._formatDateForInvoiceDetails(
          invoice?.paymentDue
        )}</h4>
      </div>
    </div>

    <div class="bill-to-container">
      <div class="bill-to-text body-1">Bill to</div>
      <h4 class="clients-name no-marg-padd">${billToAddress.clientName}</h4>
      <div class="bill-to-address-container body-2">
        <div class="clients-street">${billToAddress.street}</div>
        <div class="clients-city">${billToAddress.city}</div>
        <div class="clients-postal-code">${billToAddress.postCode}</div>
        <div class="clients-country">${billToAddress.country}</div>
      </div>
    </div>

    <div class="sent-to-container">
      <div class="sent-to-text body-1">Sent to</div>
      <h4 class="recipients-email no-marg-padd">
        ${billToAddress.clientEmail}
      </h4>
    </div>
  </div>

  <div class="amount-due-container">
    <div class="item-name-price-total-text-container">
      <div class="item-name-text body-2">Item Name</div>
      <div class="quantity-text body-2">QTY.</div>
      <div class="price-text body-2">Price</div>
      <div class="total-text body-2">Total</div>
    </div>

    ${this._generateItemsHtml(invoice)}

    <div class="amount-due-banner-container">
      <div class="amount-due-banner-text-container">
        <div class="amount-due-text body-2" id="text-white">
          Amount Due
        </div>
        <h1 class="total-amount-due">$ ${invoice?.total?.toFixed(2)}</h1>
      </div>
    </div>
  </div>`;
  }

  _generateStatusHtml(invoice, mobileView) {
    const invoiceStatus = this._capitalizeFirstLetter(invoice?.status.trim());

    if (mobileView) {
      this._updateMobileEditContainer(invoiceStatus);
      return ` 
          <div class="status-text-mobile-container">
            <div class="status-text-mobile body-1">Status</div>
            <div class="status-visual-container ${invoiceStatus} status-visual-container-mobile">
            <div class="status-circle ${invoiceStatus}"></div>
            <h4 class="state-text ${invoiceStatus}">${invoiceStatus}</h4>
            </div>
          </div>`;
    }

    if (!mobileView)
      return `
      <div class="status-container">
      <div class="status-text body-1">Status</div>
      <div class="status-visual-container ${invoiceStatus}">
          <div class="status-circle ${invoiceStatus}"></div>
          <h4 class="state-text ${invoiceStatus}">${invoiceStatus}</h4>
      </div>
      </div>
  
      <div class="edit-delete-mark-paid-container">
          

          ${
            invoiceStatus !== "Paid"
              ? ` <div class="edit-btn btn-common">
          <h4 class="edit-text">Edit</h4>
      </div>`
              : ""
          }

          <div class="delete-btn btn-common">
              <h4 class="delete-text">Delete</h4>
          </div>
  
          ${
            invoiceStatus !== "Paid"
              ? ` <div class="mark-paid-btn btn-common"> <h4 class="mark-as-paid-text">Mark as Paid</h4> </div>`
              : ""
          }
         
      </div>
      `;
  }

  _updateMobileEditContainer(invoiceStatus) {
    this._editDeleteMarkPaidMobile.innerHTML = "";
    this._editDeleteMarkPaidMobile.innerHTML = `

    ${
      invoiceStatus !== "Paid"
        ? `
     <div class="edit-btn-mobile-container">
       <h4 class="edit-btn-mobile-text no-marg-padd">Edit</h4>
     </div>`
        : ""
    }
       
  
     <div class="delete-mark-as-paid-container-right-mobile">
          <div class="delete-btn-mobile-container">
            <h4 class="delete-btn-mobile-text no-marg-padd">Delete</h4>
          </div>

          ${
            invoiceStatus !== "Paid"
              ? ` 
          <div class="markaspaid-btn-mobile-container">
          <h4 class="mark-as-paid-btn-mobile-text no-marg-padd">
            Mark as Paid
          </h4>
        </div>`
              : ""
          }
         

    </div>
    `;
  }
  _generateItemsHtml(invoice) {
    const html = [];

    invoice?.items.forEach((item) => {
      html.push(`
      <div class="item-name-price-total-container">
        <div class="name-price-total-container-mobile">
            <h4 class="item-name no-marg-padd">${item.name}</h4>
            <div class="quantity-price-container-mobile">
            <h4 class="quantity no-marg-padd">${item.quantity}</h4>
            <div class="custom-x-container">
                <h4 class="custom-x no-marg-padd">x</h4>
            </div>
            <h4 class="price no-marg-padd">$ ${item?.price?.toFixed(2)}</h4>
            </div>
        </div>
        <h4 class="total no-marg-padd">$ ${item?.total?.toFixed(2)}</h4>
    </div>
    `);
    });

    return html.join("");
  }

  _capitalizeFirstLetter(string) {
    if (!string) return "Draft";

    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  _formatDateForInvoiceDetails(date) {
    const options = { month: "long", day: "numeric", year: "numeric" };

    const dateArray = new Date(date)
      .toLocaleDateString("en-US", options)
      .replaceAll(",", "")
      .split(" ");
    //   1 is day, 0 is month, 2 is year
    return `${dateArray[1]} ${dateArray[0]} ${dateArray[2]}`;
  }
  _addGoBackFunctionality() {
    const goBackArrow = document.querySelector(".go-back-arrow-icon-btn");
    const goBackText = document.querySelector(".go-back-text");

    self = this;

    [goBackText, goBackArrow].forEach((elmt) =>
      elmt.addEventListener("click", function () {
        InvoiceViewPanel.renderInvoices(model.getData("invoices"));

        self._toggleInvoiceDetailsVisibilityNone();
      })
    );
  }

  _editInvoice(editBtns, invoice) {
    editBtns.forEach((btn) =>
      btn?.addEventListener("click", function(){
        EditInvoiceView._openInvoiceForm(invoice);
      })
    );
  }
}

export default new InvoiceDetailsView();
