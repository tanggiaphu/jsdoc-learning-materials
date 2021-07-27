import searchView from './searchView.js'
import countryView from './countryView.js'
import modalView from './modalView.js'

class errorView extends modalView {
    errorTitle = document.querySelector('.error-title')
    errorMessage = document.querySelector('.error-message')
    errorCloseBtn = document.querySelector('.error-close-btn')

    showErrorModal(message, errorTitle = "Error!") {
        this.modal = document.querySelector('.error')
        countryView.clearCountryContainer()
        searchView.clearInput()
        this.modal.classList.remove('hidden')
        this.overlay.classList.remove('hidden')
        this.errorTitle.innerHTML = errorTitle
        this.errorMessage.innerHTML = message
        countryView.hideLoadSpinner()
        this._modalCloseButtonEventListener()
    }
}

export default new errorView()