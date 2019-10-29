const quotesURL = `http://localhost:3000/quotes`
const genresURL = `http://localhost:3000/genres`

class Quote{
        constructor(quoteObj){
                this.id = quoteObj.id
                this.title = quoteObj.title
                this.content = quoteObj.content
                this.author = quoteObj.author.name
                this.genre = quoteObj.genre.name 
                this.image = quoteObj.image 
        }

        render(){
                const quotesContainer = document.getElementById(`quotehalf`)
                const quoteCard = document.createElement(`div`)
                quoteCard.dataset.id = this.id 
                quoteCard.className = `quotecard`
                const quoteTextDiv = document.createElement(`div`)
                quoteTextDiv.className = `quotetext`
                const quoteTextTitleDiv = document.createElement(`div`)
                const quoteTextTitle = document.createElement(`h3`)
                quoteTextTitle.innerText = this.title
                quoteTextTitleDiv.append(quoteTextTitle)
                const quoteTextGenreDiv = document.createElement(`div`)
                const quoteTextGenre = document.createElement(`h4`)
                quoteTextGenre.innerText = `Genre: ${this.genre}`
                quoteTextGenreDiv.append(quoteTextGenre)
                const quoteTextContentDiv = document.createElement(`div`)
                const quoteTextContent = document.createElement(`p`)
                quoteTextContent.innerText = this.content
                quoteTextContentDiv.append(quoteTextContent)
                const quoteTextAuthorDiv = document.createElement(`div`)
                const quoteTextAuthor = document.createElement(`h4`)
                quoteTextAuthor.innerText = `by ${this.author}`
                quoteTextAuthorDiv.append(quoteTextAuthor)
                const deleteBtn = document.createElement(`button`)
                deleteBtn.className = `deletebtn`
                deleteBtn.innerText = `Delete`
                deleteBtn.dataset.id = this.id 
                deleteBtn.addEventListener('click', (e) => {
                        let deleteAnswer = confirm(`Are you sure you want to delete that quote?`)
                        if (deleteAnswer == true) {
                                deleteQuoteCard(e)
                        } 
                })
                quoteTextDiv.append(quoteTextTitleDiv)
                quoteTextDiv.append(quoteTextAuthorDiv)
                quoteTextDiv.append(quoteTextGenreDiv)
                quoteTextDiv.append(quoteTextContentDiv)
                quoteTextDiv.append(deleteBtn)
                quoteCard.append(quoteTextDiv)
                const quoteImgDiv = document.createElement(`div`)
                quoteImgDiv.className = `quoteimg`
                const quoteImg = document.createElement(`img`)
                quoteImg.src = this.image 
                quoteImg.alt = `Book Cover Art`
                quoteImgDiv.append(quoteImg)
                quoteCard.append(quoteImgDiv) 
                quotesContainer.append(quoteCard)
        }
}

class Genre{
        constructor(genreObj){
                this.id = genreObj.id 
                this.name = genreObj.name
        }

        render(){
                const genreSelect = document.querySelector(`#choosegenre`);
                const newOption = document.createElement(`option`)
                newOption.value = this.id
                newOption.innerText = this.name
                genreSelect.append(newOption)
        }
}

const addGenre = (genre) => {
        const newGenre = new Genre(genre)
        newGenre.render()
}

const addGenres = (genresObj) => {
        genresObj.forEach((genre) => {
                addGenre(genre)
        })
}

const fetchGenresForNewQuoteForm = () => {
        fetch(genresURL)
        .then(resp => resp.json())
        .then(genresObj => {
                addGenres(genresObj)
        })
}

const saveNewQuoteToBackend = (formData) => {  
        const reqObj = {
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify(formData)
        }
        fetch(quotesURL, reqObj)
        .then(resp => resp.json())
        .then(newQuoteObj => {
                renderQuote(newQuoteObj)
        })
}

const scrapeFormData = (formArray) => {
        return {
                title:formArray[0].value,
                author:formArray[1].value, 
                image:formArray[2].value, 
                genre:formArray[3].value, 
                content:formArray[4].value
        }
}

const clearNewQuoteForm = () => {
        const newQuoteForm = document.getElementById(`newquoteform`)
        newQuoteForm[0].value = ``
        newQuoteForm[1].value = ``
        newQuoteForm[2].value = ``
        newQuoteForm[3].value = `not selected`
        newQuoteForm[4].value = ``
}

const addSubmitNewQuoteListener = () => {
        const submitNewQuoteBtn = document.getElementById(`submit`)
        submitNewQuoteBtn.addEventListener(`click`, (e) => {
                e.preventDefault()
                const formToScrape = e.target.parentNode 
                if (formToScrape[0].value === ``) {
                        alert(`Please provide a title.`)
                } else if (formToScrape[1].value === ``) {
                        alert(`Please provide an author.`)
                } else if (formToScrape[2].value === ``) {
                        alert(`Please provide an image URL.`)
                } else if (formToScrape[3].value === `not selected`) {
                        alert(`Please select a genre.`)
                } else if(formToScrape[4].value === ``) {
                        alert(`Please provide a quote.`)
                } else {
                        saveNewQuoteToBackend(scrapeFormData(formToScrape)) 
                        clearNewQuoteForm()
                        closeNewQuoteForm()
                }
        })
}

const closeNewQuoteForm = () => {
        const addNewQuoteFormModal = document.getElementById(`modal`)
        const pageBackground = document.getElementById(`pagecontent`)
        addNewQuoteFormModal.style.display = `none`
        pageBackground.removeAttribute(`style`)
}

const addCancelListener = () => {
        const cancelBtn = document.getElementById(`cancelnewquote`)
        cancelBtn.addEventListener(`click`, (e) => {
                e.preventDefault()
                closeNewQuoteForm()
        })
}

const addXSymbolListener = () => {
        const xSymbol = document.getElementById(`close`)
        xSymbol.addEventListener(`click`, (e) => {
                e.preventDefault()
                closeNewQuoteForm()
        })
}

const addCloseNewQuoteModalListeners = () => {
        addXSymbolListener()
        addCancelListener()
}

const showNewQuoteForm = () => { 
        const addNewQuoteFormModal = document.getElementById(`modal`)
        const pageBackground = document.getElementById(`pagecontent`)
        addNewQuoteFormModal.style.display = `block`
        pageBackground.style.position = `fixed`
}

const addNewQuoteListener = () => {
        const newQuoteBtn = document.getElementById(`addnewquotebtn`)
        newQuoteBtn.addEventListener(`click`, () => {
                showNewQuoteForm()
        })
}

const removeCardFromBackend = (cardToDeleteId) => {
        const reqObj = {
                method:"DELETE"
        }
        fetch(quotesURL + `/${cardToDeleteId}`, reqObj)
        .then(resp => resp.json())
        .then(returnObj => {
                alert(returnObj)
        })
}

const deleteQuoteCard = (e) => {
        const cardToDelete = e.target.parentNode.parentNode
        const cardToDeleteId = cardToDelete.dataset.id 
        cardToDelete.remove()
        removeCardFromBackend(cardToDeleteId)
}

const addPageListeners = () => {
        addNewQuoteListener()
        addCloseNewQuoteModalListeners()
        addSubmitNewQuoteListener()
}

const renderQuote = (quote) => {
        const newQuote = new Quote(quote)
        newQuote.render()
}

const renderQuotes = (quotesObj) => {
        quotesObj.forEach((quote) => {
                renderQuote(quote)
        })
        addPageListeners()
}

const fetchQuotes = () => {
        fetch(quotesURL)
        .then(resp => resp.json())
        .then(quotesObj => {
                renderQuotes(quotesObj)
        })
}

const main = () => {
        document.addEventListener("DOMContentLoaded", () => {
                fetchQuotes(); 
                fetchGenresForNewQuoteForm(); 
        })
}

main(); 

