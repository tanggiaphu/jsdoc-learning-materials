import * as Model from './model.js'
import countryView from './view/countryView.js'
import errorView from './view/errorView.js'
import searchView from "./view/searchView.js"
import resultView from './view/resultView.js'

const applicationInitiation = function () {
    document.querySelector('.search-container').addEventListener('submit', async function (e) {
        e.preventDefault()
        await controlSearch()
        showResults(Model.state.search.query)
    })

    document.querySelector('.country').addEventListener('click', function (e) {
        if (!e.target.classList.contains('country-border')) return;
        const borderCode = e.target.innerText
        renderBorders(borderCode)
    })

    document.querySelector('.results-container').addEventListener('click', (e) => {
        const targetEl = e.target.closest('.result')
        if (!targetEl) return;
        const targetName = targetEl.querySelector('.result-name').innerHTML
        renderResults(targetName)
        renderCountry()
    })
}

const controlSearch = async function () {
    try {
        const query = searchView.getCountryQuery()
        if (query === "") return;
        countryView.showLoadSpinner()
        const countryData = await Model.getCountryData(query)
        searchView.clearInput()
        Model.state.search.query = query
        Model.state.search.results = countryData
    } catch (err) {
        errorView.showErrorModal(err.message)
        searchView.clearInput()
        console.log(err)
    }
}

const renderCountry = function () {
    countryView.renderCountryData(Model.state.currentCountry, countryView.createCountryMarkup)
}

const renderBorders = async function (borderCode) {
    countryView.showLoadSpinner()
    const data = await Model.getCountryData(borderCode, true)
    countryView.renderCountryData(data[0], countryView.createCountryMarkup)
}

const showResults = function (query) {
    resultView.renderResults(Model.state.search.results, query)
}

const renderResults = function (clickedResultName) {
    const clickedResult = Model.state.search.results.find(country => country.name === clickedResultName)
    Model.state.currentCountry = clickedResult
    resultView.closeModal()
}

applicationInitiation()