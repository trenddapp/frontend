import { decodeAccessToken, getAccessToken } from 'lib/util/auth'
import customAxios from 'lib/api'

const SERVICE_BASE = '/wordle'

export enum WordleStatus {
  Unspecified,
  Open,
  Complete,
  Canceled,
}

export enum WordleCharStatus {
  Unspecified,
  NotPresent,
  Present,
  Correct,
}

export interface Wordle {
  id: string
  status: WordleStatus
  guesses: string[]
  char_status: WordleCharStatus[][]
  solution?: string
}

export async function getWordle(id: string) {
  const token = getAccessToken()
  if (token === '') {
    throw new Error('invalid token')
  }
  const claims = decodeAccessToken(token)
  const { data } = await customAxios.request<{ wordle: Wordle }>({
    headers: { Authorization: token },
    method: 'get',
    url: `${SERVICE_BASE}/users/${claims['id']}/wordles/${id}`,
  })
  return data.wordle
}

export async function createWordle(wordle: Wordle) {
  const token = getAccessToken()
  if (token === '') {
    throw new Error('invalid token')
  }
  const claims = decodeAccessToken(token)
  const { data } = await customAxios.request<{ wordle: Wordle }>({
    data: wordle,
    headers: { Authorization: token },
    method: 'post',
    url: `${SERVICE_BASE}/users/${claims['id']}/wordles`,
  })
  return data.wordle
}

export async function updateWordle(wordle: Wordle) {
  const token = getAccessToken()
  if (token === '') {
    throw new Error('invalid token')
  }
  const claims = decodeAccessToken(token)
  const { data } = await customAxios.request<{ wordle: Wordle }>({
    data: wordle,
    headers: { Authorization: token },
    method: 'patch',
    url: `${SERVICE_BASE}/users/${claims['id']}/wordles/${wordle.id}`,
  })
  return data.wordle
}

export async function deleteWordle(id: string) {
  const token = getAccessToken()
  if (token === '') {
    throw new Error('invalid token')
  }
  const claims = decodeAccessToken(token)
  const { data } = await customAxios.request<{}>({
    headers: { Authorization: token },
    method: 'delete',
    url: `${SERVICE_BASE}/users/${claims['id']}/wordles/${id}`,
  })
  return data
}

export async function listWordles(pageToken?: string, pageSize?: number, status?: WordleStatus) {
  const token = getAccessToken()
  if (token === '') {
    throw new Error('invalid token')
  }
  const claims = decodeAccessToken(token)
  const { data } = await customAxios.request<{ next_page_token: string; wordles: Wordle[] }>({
    headers: { Authorization: token },
    method: 'get',
    params: {
      pageToken: pageToken,
      pageSize: pageSize,
      status: statusFromModel(status),
    },
    url: `${SERVICE_BASE}/users/${claims['id']}/wordles`,
  })
  return data.wordles
}

function statusFromModel(input: WordleStatus | undefined): string | undefined {
  switch (input) {
    case WordleStatus.Open:
      return 'open'
    case WordleStatus.Complete:
      return 'complete'
    case WordleStatus.Canceled:
      return 'canceled'
  }
}
