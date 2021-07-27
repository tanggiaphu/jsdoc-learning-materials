class countryView {
    countryContainer = document.querySelector('.country')
    loadSpinner = document.querySelector('.spinner')

    renderCountryData(countryData) {
        this.clearCountryContainer()
        this.countryContainer.insertAdjacentHTML('afterbegin', this.createCountryMarkup(countryData))
        this.hideLoadSpinner()
    }

    createCountryMarkup(countryData) {
        console.log(countryData)
        return `
        <div class="country-first-content country-child-content col-md-5">
            <img src="${countryData.flag}" title="country-flag" alt="country-flag" class="country-flag">
            <h2 class="country-region big-information">${this._checkRegionIcon(countryData.region)} Region: ${countryData.region}</h2>
            <h2 class="country-languages big-information">🗣 Languages: ${countryData.languages.join(', ')}</h2>
            <h2 class="country-population big-information">👫 Population: ${this.formatLargeNumber(countryData.population, 1)}
            </h2>
            <h2 class="country-alphacode big-information">🔤 Alpha Codes: ${countryData.alphaCodes[0]}, ${countryData.alphaCodes[1]}</h2>
        </div>
        <div class="country-second-content country-child-content col-md-7">
            <h1 class="country-name">${countryData.name}</h1>
            <div class="information-container row">
                <div class="information-col col-6">
                    <h3 class="small-information">Latitude/Longitude: ${countryData.latlng.length == 0 ? "19.28/166.63" : countryData.latlng[0].toFixed(2) + "/" + countryData.latlng[1].toFixed(2)}</h3>
                    <h3 class="small-information">Timezone: ${countryData.timezones.length === 1 ? countryData.timezones[0] : `<div href="#" class="timezone-link">${countryData.timezones.length} timezones</div>`}</h3>
                    <h3 class="small-information">Capital: ${countryData.capital}</h3>
                    <h3 class="small-information">Area: ${this.formatLargeNumber(countryData.area, 1)} km²</h3>
                    <h3 class="small-information">Currenc${countryData.currencyCode.length > 1 ? 'ies' : 'y'} Code${countryData.currencyCode.length > 1 ? 's' : ''}: ${countryData.currencyCode.join(', ')}</h3>
                </div>
                <div class="information-col col-6">
                    <h3 class="small-information">Currenc${countryData.currencySymbol.length > 1 ? 'ies' : 'y'} Symbol${countryData.currencySymbol.length > 1 ? 's' : ''}: ${countryData.currencySymbol.join(', ')}</h3>
                    <h3 class="small-information">Gini Coefficient: ${countryData.gini}</h3>
                    <h3 class="small-information">Calling Code: ${countryData.callingCode}</h3>
                    <h3 class="small-information">Numeric Code: ${countryData.numericCode}</h3>
                    <h3 class="small-information" id="country-borders"> Borders: ${countryData.borders.length === 0 ? `${countryData.name} don't have any border country` : countryData.borders.map(border => `<a class="country-border">${border}</a>`).join(', ')}</h3>
                </div>
                <a href="https://en.wikipedia.org/wiki/${countryData.name}" target="_blank" class="btn show-all-btn">More informations...</a>
            </div>
        </div>
        `
    }

    clearCountryContainer() {
        this.countryContainer.innerHTML = ''
    }

    showLoadSpinner() {
        this.removeWelcomeMessage()
        this.clearCountryContainer()
        this.loadSpinner.classList.remove('hidden')
    }

    hideLoadSpinner() {
        this.loadSpinner.classList.add('hidden')
    }

    formatLargeNumber(number, roundingToDecimal = 2) {
        if (number <= 999) return number.toFixed(roundingToDecimal)
        return `${number <= 99999 ? (number / 1000).toFixed(roundingToDecimal) : (number / 1000000).toFixed(roundingToDecimal)}${number <= 99999 ? 'K' : 'M'}`
    }

    _checkRegionIcon(countryRegion) {
        if (countryRegion === 'Americas') return '🌎'
        if (countryRegion === 'Africa' || countryRegion === 'Europe') return '🌍'
        if (countryRegion === 'Asia' || countryRegion === 'Oceania') return '🌏'
    }

    removeWelcomeMessage() {
        document.querySelector('.welcome').classList.add('hidden')
    }

    addBorderEventHandler(handler) {
        this.countryContainer.addEventListener('click', function (e) {
            if (!e.target.classList.contains('country-border')) return;
            const borderCode = e.target.innerText
            console.log(borderCode)
            handler(borderCode)
        })
    }
}

export default new countryView()
