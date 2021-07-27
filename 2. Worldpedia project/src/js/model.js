export const state = {
    currentCountry: {},
    results: [],
    currentBorderCode: ""
}

export const shortenCountryData = function (longCountryData) {
    const output = []
    longCountryData.forEach(country => {
        output.push({
            flag: country.flag,
            name: country.name,
            languages: country.languages.map(lang => lang['name']),
            region: country.region,
            population: country.population,
            capital: country.capital,
            borders: country.borders,
            area: country.area,
            numericCode: country.numericCode,
            timezones: country.timezones,
            callingCode: country.callingCodes[0],
            latlng: country.latlng,
            currencyCode: country.currencies.map(cur => cur['code']),
            currencySymbol: country.currencies.map(cur => cur['symbol']),
            gini: country.gini ? country.gini : "this country don't have Gini coefficient",
            alphaCodes: [country.alpha2Code, country.alpha3Code],
        })
    })
    return output
}

export async function getCountryData(inputData, getBorderData = false) {
    try {
        const url = getBorderData ? `https://restcountries.eu/rest/v2/alpha?codes=${inputData}` : `https://restcountries.eu/rest/v2/name/${inputData}`
        const response = await fetch(url)
        if (!response.ok) throw new Error(`Could not find any country matching '${inputData}' query!`)
        const data = await response.json()
        const compactCountriesData = shortenCountryData(data)
        state.results = compactCountriesData
        console.log(compactCountriesData)
        return compactCountriesData
    } catch (err) {
        throw err
    }
}