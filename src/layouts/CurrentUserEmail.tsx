import { getAccessToken } from '../redux/api/apiSlice'

const CurrentUserEmail = () => {
  const accessToken = getAccessToken()
  const tokenParts = accessToken!.split('.')
  const tokenPayload = tokenParts[1]
  const decodedPayload = atob(tokenPayload)
  const payloadObj = JSON.parse(decodedPayload)
  const userEmail = payloadObj.userEmail
  return userEmail
}

export default CurrentUserEmail
