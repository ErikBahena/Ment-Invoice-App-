import deleteBtnImg from "../../assets/icon-delete.svg";
import { nanoid } from "nanoid";
import helpers from "../helpers.js";

const newItemHtml = `
<div class="item-container">
<div class="item-name-container">
  <div class="item-name-text body-1">Item Name</div>
  <input type="text" name="item-name" id="item-name">
</div>
<div class="item-quantity-container">
  <div class="item-quantity-text body-1">QTY.</div>
  <input type="text" name="item-quantity" id="item-quantity">
</div>
<div class="item-price-container">
  <div class="item-price-text body-1">Price</div>
  <input type="text" name="item-price" id="item-price">
</div>
<div class="total-text-total-price-container">
  <div class="total-text-form body-1">Total</div>
  <h4 class="total-price no-marg-padd">$ 0.00</h4>
</div>
<div class="delete-btn-container">
  <img src="${deleteBtnImg}" alt="delete item button" class="delete-btn-img">
</div>
</div>`;

class NewInvoiceView {
  _newInvoiceBtn = document.querySelector(".new-invoice-btn-container-bg");
  _newInvoiceFormContainer = document.querySelector(
    ".new-invoice-form-container"
  );
  _newInvoiceForm = document.querySelector(".new-invoice-form");
  _newInvoiceFormBackground = document.querySelector(
    ".new-invoice-container-background"
  );
  _discardBtn = document.querySelector(".discard-btn-container");
  _discardBtnMobile = document.querySelector(
    ".discard-btn-container-media-mobile"
  );
  _addItemBtn = document.querySelector(".add-new-item-btn-container");
  _newItemContainer = document.querySelector(".item-list-container-populate");
  _saveAsDraftBtn = document.querySelector(".save-as-draft--btn-container");
  _formItemElements = this._newInvoiceForm.querySelector(
    ".item-list-container-populate"
  ).children;

  _allFieldsMustBeEl = document.querySelector(".all-fields-text");

  _saveAsDraftBtnMobile = document.querySelector(
    ".save-as-draft--btn-container-media-mobile"
  );
  _saveAndSendBtn = document.querySelector(".save-and-send-btn-container");

  _saveAndSendBtnMobile = document.querySelector(
    ".save-and-send-btn-container-media-mobile"
  );

  addHandlersWhenFormIsOpen() {
    this._newInvoiceBtn.addEventListener(
      "click",
      this._openNewInvoiceForm.bind(this)
    );

    [
      this._newInvoiceFormBackground,
      this._discardBtn,
      this._discardBtnMobile,
    ].forEach((element) => {
      element.addEventListener("click", this._closeNewInvoiceForm.bind(this));
    });

    this._addItemBtn.addEventListener(
      "click",
      this._addNewInvoiceItem.bind(this)
    );

    this._newItemContainer.addEventListener(
      "click",
      this._deleteItem.bind(this)
    );

    this._liveItemTotals();
  }

  _openNewInvoiceForm() {
    this._newInvoiceFormContainer.style.display = "unset";
    this._newInvoiceFormBackground.style.display = "unset";
  }
  _closeNewInvoiceForm() {
    this._newInvoiceFormContainer.style.display = "none";
    this._newInvoiceFormBackground.style.display = "none";
    this._clearAllInputFields();
  }
  _clearAllInputFields() {
    let elements = [...document.getElementsByTagName("input")];

    elements.forEach((el) => {
      el.type == "text" ? (el.value = "") : null;
      el.style.border = "1px solid var(--clr-input-border)";
    });
    this._allFieldsMustBeEl.style.display = "none";
    this._addItemBtn.style.marginBottom = "100px";

    this._liveItemTotals(true);
  }

  _addNewInvoiceItem() {
    this._newItemContainer.insertAdjacentHTML("beforeend", newItemHtml);
    this._liveItemTotals();
  }

  _deleteItem(e) {
    //   since we are using event delegation we need filter for the correct element
    if (e.target.classList[0] !== "delete-btn-img") return;

    const relativeToBtnItem = e.target.parentNode.parentNode;
    // there has to be at least one item in the items container
    if (this._newItemContainer.children.length !== 1)
      relativeToBtnItem.remove();
  }

  addHandlerSaveAsDraft(handler, formDataFormatSaveAsDraft) {
    const self = this;

    this._newInvoiceForm.addEventListener("submit", function (e) {
      e.preventDefault();
      self._saveFormData(handler, formDataFormatSaveAsDraft);
    });

    this._saveAsDraftBtnMobile.addEventListener("click", function () {
      self._saveFormData(handler, formDataFormatSaveAsDraft);
    });
  }

  addHandlerSaveAndSend(handler, formDataFormatSaveAndSend) {
    [this._saveAndSendBtnMobile, this._saveAndSendBtn].forEach((btn) =>
      btn.addEventListener(
        "click",
        this._saveFormData.bind(this, handler, formDataFormatSaveAndSend, true)
      )
    );
  }

  _saveFormData(handler, dataObjectReference, isPending) {
    // creating a copy of the object which has format I want. Just in case I want to change that format or add something to that format in the future
    let dataObjectInstance = JSON.parse(JSON.stringify(dataObjectReference));

    // adding a unique id to each invoice
    dataObjectInstance.id = nanoid(6).toUpperCase().replace(/_|-/g, "U");

    //adding the date which the invoice was created
    dataObjectInstance.createdAt = helpers.formatDate(new Date());

    if (isPending) {
      dataObjectInstance.status = "pending";
    }

    const form = this._newInvoiceForm;
    const formElements = [...form.elements];

    //filtering and classifying the form data
    formElements.forEach((el) => {
      let name = encodeURIComponent(el.name);

      let value = encodeURIComponent(el.value)
        .replaceAll("%20", " ")
        .replaceAll("%40", "@");

      switch (name) {
        case "invoice-date":
          dataObjectInstance.paymentDue = value;
          break;
        case "project-description":
          dataObjectInstance.description = value;
          break;
        case "payment-terms":
          dataObjectInstance.paymentTerms = value;
          break;
        case "bill-to-clients-name":
          dataObjectInstance.clientName = value;
          break;
        case "bill-to-clients-email":
          dataObjectInstance.clientEmail = value;
          break;
        case "bill-from-street-address":
          dataObjectInstance.senderAddress.street = value;
          break;
        case "bill-from-city":
          dataObjectInstance.senderAddress.city = value;
          break;
        case "bill-from-postal-code":
          dataObjectInstance.senderAddress.postCode = value;
          break;
        case "bill-from-country":
          dataObjectInstance.senderAddress.country = value;
          break;
        case "bill-to-clients-street-address":
          dataObjectInstance.clientAddress.street = value;
          break;
        case "bill-to-city":
          dataObjectInstance.clientAddress.city = value;
          break;
        case "bill-to-postal-code":
          dataObjectInstance.clientAddress.postCode = value;
          break;
        case "bill-to-country":
          dataObjectInstance.clientAddress.country = value;
          break;
        case "bill-to-clients-name":
          dataObjectInstance.clientName = value;
          break;
        case "bill-to-clients-email":
          dataObjectInstance.clientEmail = value;
          break;
      }
    });

    this._formatItemsInForm(dataObjectInstance);

    if (isPending && this._checkIfFormElIsBlank(formElements)) {
      handler(dataObjectInstance);
      this._closeNewInvoiceForm();
    }

    if (!isPending) {
      handler(dataObjectInstance);
      this._closeNewInvoiceForm();
    }
  }

  _formatItemsInForm(dataObjectInstance) {
    let itemsArray = [];

    [...this._formItemElements].forEach((item) => {
      const individualItem = {
        name: item.querySelector("#item-name").value,
        quantity: +item.querySelector("#item-quantity").value,
        price: +item.querySelector("#item-price").value,
      };

      individualItem.total = individualItem.quantity * individualItem.price;
      itemsArray.push(individualItem);
    });

    dataObjectInstance.items = itemsArray;

    this._setInvoiceTotal(itemsArray, dataObjectInstance);
  }

  _setInvoiceTotal(itemsArray, dataObjectInstance) {
    let invoiceTotal = 0;
    itemsArray.forEach((item) => {
      invoiceTotal += item.total;
    });

    dataObjectInstance.total = invoiceTotal;
  }

  _liveItemTotals(bool) {
    [...this._formItemElements].forEach((item) => {
      const itemTotal = item.querySelector(".total-price");

      if (bool) this._clearItemTotals(itemTotal);

      const quantity = item.querySelector("#item-quantity");

      const price = item.querySelector("#item-price");

      [price, quantity].forEach((el) =>
        el.addEventListener("input", function () {
          itemTotal.innerHTML = `$ ${(price.value * quantity.value).toFixed(
            2
          )}`;
        })
      );
    });
  }

  _clearItemTotals(itemTotal) {
    itemTotal.innerHTML = `$ 0.00`;
  }

  _checkIfFormElIsBlank(formElements) {
    const arr = [];
    formElements.slice(0, -1).forEach((el) => {
      if (el.value === "") {
        arr.push(1);
        el.style.border = "1px solid red";
      }

      if (el.value !== "") {
        // arr.push(0);
        el.style.border = "1px solid var(--clr-input-border)";
      }
    });

    if (arr.includes(1)) {
      this._allFieldsMustBeEl.style.display = "flex";
      this._addItemBtn.style.marginBottom = "10px";
    }

    if (!arr.includes(1)) {
      this._allFieldsMustBeEl.style.display = "none";
      return true;
    }
  }
}
export default new NewInvoiceView();
