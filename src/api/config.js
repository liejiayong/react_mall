const env = process.env.NODE_ENV

const tw_pop_protocol = (('https:' == document.location.protocol) ? 'https:' : 'http:');

const urlConfig = {
  PRODUCTION_URL: `${tw_pop_protocol}//hd.tanwan.com/api/twapp/`,
  DEVELOPMENT_URL: '/twapi'
}

let baseUrl
switch (env) {
  case 'production':
    baseUrl = urlConfig.PRODUCTION_URL
    break
  case 'development':
    baseUrl = urlConfig.DEVELOPMENT_URL
    break
}

export default baseUrl
