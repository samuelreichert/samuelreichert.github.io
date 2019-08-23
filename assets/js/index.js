const renderRepository = (repo) => {
  iconLanguage = repo.language.toLowerCase()
  if (iconLanguage === 'html') iconLanguage = 'html5'

  const card = document.createElement('li')
  card.className = 'repo-card'
  card.innerHTML = `
    <div class="repo-card__icon-wrapper">
      <i class="devicon-git-plain repo-card__icon"></i>
    </div>
    <div class="repo-card__content">
      <a class="repo-card__title" href="${repo.html_url}" target="_blank">${repo.name}</a>

      <div class="repo-card__details">
        <i class="devicon-${iconLanguage}-plain colored repo-card__icon--dev"></i>
        <span>${repo.language}</span>
        <i class="material-icons email__icon repo-card__icon--mini">update</i>
        <span>
          ${new Date(repo.updated_at).toLocaleDateString('PT-br')}
        </span>
      </div>
    </div>
  `

  return card
}

const displayRepositories = () => {
  const DEFAULT_ERROR_MESSAGE = 'Something wrong with GitHub request'
  const REQUEST_URL = 'https://api.github.com/users/samuelreichert/repos?sort=updated'
  const reposList = document.querySelector('[data-public-repositories]')

  const headers = new Headers({
    "Accept": "application/vnd.github.v3+json",
    "Content-Type": "application/json",
  })

  const options = {
    headers: headers,
    method: 'GET'
  }

  fetch(REQUEST_URL, options)
    .then((response, errors) => {
      if (errors) return console.error(DEFAULT_ERROR_MESSAGE, errors)
      return response.json()
    })
    .then((data) => {
      reposList.innerHTML = ""
      reposList.classList.remove("loading")

      data.forEach((repo) => {
        const repoCard = renderRepository(repo)
        reposList.appendChild(repoCard)
      })
    })
    .catch((error) => {
      console.error(DEFAULT_ERROR_MESSAGE, error)
    })
}

document.addEventListener('DOMContentLoaded', displayRepositories())

window.addEventListener('load', () => {
  const loader = document.querySelector(".full-page-loader")
  loader.classList.add('hidden')
})
