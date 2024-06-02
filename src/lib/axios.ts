import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    'X-GitHub-Api-Version': import.meta.env.VITE_GITHUB_API_VERSION,
  },
})
