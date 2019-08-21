import config from '../config'

const ThingApiService = {
  // getThings() {
  //   return fetch(`${config.API_ENDPOINT}/things`, {
  //     headers: {
  //     },
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // },
  // getThing(thingId) {
  //   return fetch(`${config.API_ENDPOINT}/things/${thingId}`, {
  //     headers: {
  //     },
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // },
  // getThingReviews(thingId) {
  //   return fetch(`${config.API_ENDPOINT}/things/${thingId}/reviews`, {
  //     headers: {
  //     },
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // },
  // postReview(thingId, text, rating) {
  //   return fetch(`${config.API_ENDPOINT}/reviews`, {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       thing_id: thingId,
  //       rating,
  //       text,
  //     }),
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // }
  updateProduct(thingId, text, rating) {
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        thing_id: thingId,
        rating,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }  
}

export default ThingApiService