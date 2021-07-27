class searchView {
    searchField = document.querySelector('.search-field')

    clearInput() {
        this.searchField.value = ''
        this.searchField.blur()
    }

    getCountryQuery() {
        return this.searchField.value
    }

    addSearchEventHandler(handler) {
        document.querySelector('.search-container').addEventListener('submit', async function (e) {
            e.preventDefault()
            await handler()
        })
    }
}

export default new searchView()