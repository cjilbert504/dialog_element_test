import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="modal"
export default class extends Controller {

  static targets = [ "dialog" ]

  connect() {
    console.log("connected!!!");
  }

  show() {
    this.dialogTarget.showModal();
  }
}
