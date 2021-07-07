const getSearchQuery = (search: string) => {
  try {
    const searchParams = new URLSearchParams(search)
    const params = {}
    searchParams.forEach((value, key) => {
      const values = params[key]
      if (values) {
        if (Array.isArray(values)) {
          params[key].push(value)
        } else {
          params[key] = [values, value]
        }
      } else {
        params[key] = value
      }
    })
    return params
  } catch (e) {
    console.error("非法的search =>", search)
  }
}

export default getSearchQuery
