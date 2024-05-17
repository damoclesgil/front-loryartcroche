import { ErrorCode } from '@/utils/constant'
import { axiosInstance as axios } from '.'
// import { getBearerToken } from '@/services/localStorage';
import { auth } from '@/services/auth'

import { refreshToken } from '@/modules/authentication/authenticationService'

axios.interceptors.request.use(
  async (config) => {
    // Do something with request
    return config
  },
  async (error: any) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  async (response) => {
    return response
  },
  async (error: any) => {
    // @ts-ignore
    const res: ResponseError = error.response.data
    let session = await auth()
    if (
      res?.errorCode == ErrorCode.AccessTokenExpired &&
      !error.config._isRetry
    ) {
      // @ts-ignore
      return refreshToken().then((response) => {
        if (response) {
          error.config._isRetry = true
          const originalRequestConfig = error.config
          originalRequestConfig.headers.Authorization = session
            ? `Bearer ${session.jwt}`
            : ``
          return axios.request(originalRequestConfig)
        }
      })
    }

    return Promise.reject(error)
  }
)
