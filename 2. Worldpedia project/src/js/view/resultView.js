import modalView from './modalView.js'
import searchView from './searchView.js'
import countryView from './countryView.js'

class resultView extends modalView {
    title = document.querySelector('.result-title')
    resultsContainer = document.querySelector('.results-container')

    renderResults(results, query) {
        this.cleanModal()
        this.showResultModal()
        this.renderTitle(results.length, query)

        const markup = results.map((result, i) => {
            return `
            <div class="result ${((i + 1) % 2) === 0 ? "even-number" : ""}">
            <img src="${result.flag}" alt="flag" class="result-flag">
            <h2 class="result-name">${result.name}</h2>
            </div>
            `
        }).join('')
        this.resultsContainer.insertAdjacentHTML('beforeend', markup)
        this.compactResultsContainer()
    }

    showResultModal() {
        this.modal = document.querySelector('.results')
        countryView.clearCountryContainer()
        countryView.hideLoadSpinner()
        searchView.clearInput()
        this.modal.classList.remove('hidden')
        this.overlay.classList.remove('hidden')
        this._modalCloseButtonEventListener()
    }

    renderTitle(resultsAmount, query) {
        this.title.innerHTML = `Countr${resultsAmount === 1 ? "y" : "ies"} Found With "${query}" Query`
    }

    cleanModal() {
        this.resultsContainer.classList.remove('scrollable')
        this.title.innerHTML = ""
        this.resultsContainer.innerHTML = ""
    }

    compactResultsContainer() {
        const height = Number.parseInt(getComputedStyle(this.resultsContainer).height)
        if (height > 500) this.resultsContainer.classList.add('scrollable')
    }

    closeModal() {
        this.modal.classList.add('hidden')
        this.overlay.classList.add('hidden')
        this.cleanModal()
    }

    addResultClickEventHandler(handler) {
        document.querySelector('.results-container').addEventListener('click', (e) => {
            const targetEl = e.target.closest('.result')
            if (!targetEl) return;
            const targetName = targetEl.querySelector('.result-name').innerHTML
            handler(targetName)
        })
    }
}

export default new resultView()