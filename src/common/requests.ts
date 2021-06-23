import axios, { AxiosResponse } from "axios"

export async function _request(
  endpoint: string,
  path: string,
  params: Record<string, unknown> | undefined,
): Promise<string> {
  const queryParam: string[] = []
  if (params !== undefined) {
    for (const [key, param] of Object.entries(params)) {
      if (param) {
        queryParam.push(key + "=" + encodeURI(String(param)))
      }
    }
  }
  return endpoint + path + "?" + queryParam.join("&")
}

export async function performGetRequest(
  endpoint: string,
  path: string,
  params: Record<string, unknown> | undefined,
  headers: Record<string, unknown> | null = null,
): Promise<AxiosResponse<unknown> | Error> {
  const url = await _request(endpoint, path, params)
  try {
    return await axios.get(url, { headers })
  } catch (error) {
    return Error(error)
  }
}
