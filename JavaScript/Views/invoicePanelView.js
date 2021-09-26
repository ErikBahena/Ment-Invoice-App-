import helpers from "../helpers.js";
import InvoiceDetailsView from "./invoiceDetailsView.js";
import noInvoicesImage from "url:../../assets/illustration-empty.svg";
import invoiceDetailBtnImg from "url:../../assets/icon-arrow-right.svg";

class InvoiceViewPanel {
  invoiceControlContainer = document.querySelector(
    ".invoice-control-container"
  );

  populateContainer = document.querySelector(
    ".invoice-view-container-populate"
  );
  invoiceAmountText = document.querySelector(".amount-of-invoices");

  openFilterArea = document.querySelector(
    ".filter-text-and-filter-btn-container"
  );
  filterByStatusContainer = document.querySelector(
    ".filter-by-status-container"
  );

  filterByArrowBtn = document.querySelector(".filter-by-status");

  addHandlerRender(event, invoices) {
    window.addEventListener(event, this.renderInvoices(invoices));
  }

  addFilterByFunctionality() {
    var self = this;

    this.filterByArrowBtn.addEventListener(
      "click", this._showFilterByContainer.bind(this)
    );

    this.filterByStatusContainer.addEventListener("click", function (e) {
      const input = e.target
        .closest(".checkbox-container")
        ?.querySelector("input");

      if (!input?.classList) return; // since we are clicking on the filter by container, we need to make sure that what we are clicking has some type of classlist, making sure that we are only running this if we are actually clicking on an input square.

      const allOtherInputs = [...this.querySelectorAll("input")].filter(
        (inp) => inp !== input
      );

      if (input.hasAttribute("checked")) 
        input.removeAttribute("checked");
        self.renderInvoices(self._filterInvoicesByStatus("none"));
        self._hideFilterByContainer();
      

      if(!(input.hasAttribute("checked")))
        input.setAttribute("checked", "checked");
        self.renderInvoices(self._filterInvoicesByStatus(input.value));
        self._hideFilterByContainer();
      

      allOtherInputs.forEach((inp) => inp.removeAttribute("checked"));
    });
  }

  _showFilterByContainer() {
    if(helpers.getLocalStorageData("invoices") === null) return; // only want to "show" this container if there is data to filter by

    this.filterByStatusContainer.style.display = "flex";
    this.filterByArrowBtn.style.transform = "rotate(180deg)";
  }

  _hideFilterByContainer() {
    this.filterByStatusContainer.style.display = "none";
    this.filterByArrowBtn.style.transform = "rotate(360deg)";
  }

  _filterInvoicesByStatus(status) {
    const invoices = helpers.getLocalStorageData("invoices");

    const filteredInvoices = {
      draftInvoices: invoices.filter((inv) => inv.status === "draft"),
      pendingInvoices: invoices.filter((inv) => inv.status === "pending"),
      paidInvoices: invoices.filter((inv) => inv.status === "paid"),
    };

    if (status === "none") return invoices;

    if (status !== "none") {
      const allInvoiceTypes = ["draft", "pending", "paid"].filter(
        (type) => type !== status
      );

      const selectedInvoices = filteredInvoices[`${status}Invoices`];

      const allOtherInvoices = allInvoiceTypes.flatMap((type) => {
        if (filteredInvoices[`${type}Invoices`] !== undefined)
          return filteredInvoices[`${type}Invoices`];
      });

      return selectedInvoices.concat(allOtherInvoices);
    }
  }

  renderInvoices(invoices) {
    const html = this._generateMarkup(invoices === null ? [] : invoices);

    this.populateContainer.innerHTML = "";
    this.populateContainer.insertAdjacentHTML("afterbegin", html);

    this._addIndividualInvoiceHandler(invoices);

    if (invoices === null) {
      this.invoiceAmountText.innerHTML = `No Invoices`;
      localStorage.clear();
      return;
    }

    if (invoices.length > 0) {
      this.invoiceAmountText.innerHTML = `${invoices.length} Invoices`;
    }

    if (invoices.length === 1) {
      this.invoiceAmountText.innerHTML = `${invoices.length} Invoice`;
    }
  }

  _addIndividualInvoiceHandler(invoices) {
    this.populateContainer.addEventListener(
      "click",
      this._viewInvoiceDetails.bind(this, invoices)
    );
  }

  _viewInvoiceDetails(invoices, e) {
    if (!e.target.closest(".invoice") || !invoices) return;

    const invoiceId = e.target.closest(".invoice").dataset.id;
    const invoiceData = invoices.find((inv) => inv.id === invoiceId);

    this._toggleInvoicePanelVisibility();
    InvoiceDetailsView.toggleInvoiceDetailsVisibility();
    InvoiceDetailsView.renderInvoiceDetails(invoiceData);
  }

  _toggleInvoicePanelVisibility() {
    this.invoiceControlContainer.style.display = "none";
    this.populateContainer.style.display = "none";
  }

  _generateMarkup(invoices) {
    if (invoices.length === 0)
      return `<div class="no-invoices-container">
        <div class="empty-illustration-image-container">
          <img
            src="${noInvoicesImage}"
            alt="empty folder illustration"
            class="empty-illustration-svg"
          />
        </div>
        <div class="no-invoices-text-container">
          <h2 class="there-is-nothing-here-text no-marg-padd">
            There is nothing here
          </h2>
          <div class="create-an-invoice-text body-1">
            Create an invoice by clicking the <br />
            <b>New</b> button and get started
          </div>
        </div>
      </div> `;

    const html = [];

    invoices.forEach((invoice) => {
      const id = invoice.id;
      const dueDate = helpers.formatDate(invoice?.paymentDue);
      const invoiceRecipient = invoice.clientName;
      const invoiceTotal = invoice.total;
      //   capitalizing the first letter
      const invoiceStateText =
        invoice.status[0].toUpperCase() + invoice.status.slice(1);

      const individualInvoiceMarkup = `
    <div class="invoice" data-id="${id}">
        <h4 class="invoice-id no-marg-padd">
        <hash>#</hash><id>${id}</id>
        </h4>
        <div class="invoice-due-date body-1">
        <due>Due</due> <date>${dueDate}</date>
        </div>
        <div class="invoice-recipient body-1">${invoiceRecipient}</div>
        <h3 class="invoice-total no-marg-padd">$ ${invoiceTotal?.toFixed(
          2
        )}</h3>
        <div class="invoice-status-visual-container ${invoiceStateText}">
        <div class="invoice-status-circle ${invoiceStateText}"></div>
        <h4 class="invoice-state-text ${invoiceStateText}">${invoiceStateText}</h4>
        </div>
        <div class="view-invoice-btn">
        <img
            src="${invoiceDetailBtnImg}"
            alt="view invoice details button"
            class="arrow-right"/>
        </div>
  </div>`;

      html.push(individualInvoiceMarkup);
    });

    return html.join("");
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
}
export default new InvoiceViewPanel();
