import * as model from "../JavaScript/model.js";
import invoicePanelView from "./Views/invoicePanelView.js";
import InvoicePanelView from "./Views/invoicePanelView.js";
import NewInvoiceView from "./Views/newInvoiceView.js";

const controlSaveAsDraft = function (data) {
  model.saveToLocalStorage(data);

  invoicePanelView.renderInvoices(model.getData("invoices"));
};

const controlSaveAndSend = function (data) {
  model.saveToLocalStorage(data);

  invoicePanelView.renderInvoices(model.getData("invoices"));
};

const init = () => {
  // this is an optional function which would be used if the user signed in as a guest, it just puts some test data into localstorage
  model.stateInit();

  InvoicePanelView.addHandlerRender("load", model.getData("invoices"));
  InvoicePanelView.addFilterByFunctionality(model.getData("invoices"));

  NewInvoiceView.addHandlersWhenFormIsOpen();

  NewInvoiceView.addHandlerSaveAsDraft(
    controlSaveAsDraft,
    model.formDataFormat
  );

  NewInvoiceView.addHandlerSaveAndSend(
    controlSaveAndSend,
    model.formDataFormat
  );
};
init();
