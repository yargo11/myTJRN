const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
    PHASE_PRODUCTION_SERVER
} = require('next/constants')
  
// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
    // when started in development mode `yarn dev` regardless of the value of STAGING environmental variable
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `yarn build` or `yarn start`
    const isProd = phase === PHASE_PRODUCTION_BUILD || phase === PHASE_PRODUCTION_SERVER

    //console.log(`isDev:${isDev}  isProd:${isProd}`)

    const env = {
        PROJECT_URL: (() => {
            if (isDev) return 'http://localhost:3000'
            if (isProd) return ''
        })(),
    }

    // next.config.js object
    return {
        env,
    }
}