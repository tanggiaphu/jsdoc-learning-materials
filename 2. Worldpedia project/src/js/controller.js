import * as Model from './model.js'
import countryView from './view/countryView.js'
import errorView from './view/errorView.js'
import searchView from "./view/searchView.js"
import resultView from './view/resultView.js'

const applicationInitiation = function () {
    searchView.addSearchEventHandler(controlSearch)
    countryView.addBorderEventHandler(renderBorders)
    resultView.addResultClickEventHandler(renderResults)
}

const controlSearch = async function () {
    try {
        const query = searchView.getCountryQuery()
        if (query === "") return;
        countryView.showLoadSpinner()
        const countryData = await Model.getCountryData(query)
        searchView.clearInput()
        console.log(Model.state.results)
        showResults(query)
    } catch (err) {
        errorView.showErrorModal(err.message)
        searchView.clearInput()
        console.log(err)
    }
}

const renderCountry = function () {
    countryView.renderCountryData(Model.state.currentCountry)
}

const renderBorders = async function (borderCode) {
    Model.state.currentBorderCode = borderCode
    countryView.showLoadSpinner()
    const data = await Model.getCountryData(Model.state.currentBorderCode, true)
    countryView.renderCountryData(data[0])
}

const showResults = function (query) {
    resultView.renderResults(Model.state.results, query)
}

const renderResults = function (clickedResultName) {
    const clickedResult = Model.state.results.find(country => country.name === clickedResultName)
    Model.state.currentCountry = clickedResult
    renderCountry()
    resultView.closeModal()
}

applicationInitiation()