import { Api } from 'src/api/request'
import { urls } from 'src/api/urls'

const CardsApi = {
  getCardsList: () => Api.get(urls.get)
}

export default CardsApi
