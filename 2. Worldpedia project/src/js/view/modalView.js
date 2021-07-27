import searchView from './searchView.js'
import countryView from './countryView.js'

export default class modalView {
    overlay = document.querySelector('.overlay')
    modal;

    _modalCloseButtonEventListener() {
        this.modal.querySelector('.close-btn').addEventListener('click', function () {
            this.closest('.modal').classList.add('hidden')
            document.querySelector('.overlay').classList.add('hidden')
        })
    }
}