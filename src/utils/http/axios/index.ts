import axiosRequest from 'axios'

// import { auth } from '@/services/auth'
// let session = await auth()

export const axios = axiosRequest.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
    // Authorization: session ? `Bearer ${session.jwt}` : ``
  }
})

export const axiosInstance = axios
