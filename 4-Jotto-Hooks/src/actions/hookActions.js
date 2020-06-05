import axios from 'axios'

export const getSecretWord = async (secretWord) => {
  const { data } = await axios('http://localhost')
  // party // { "data" : "party" }
  secretWord(data)
}

export default {
  getSecretWord,
}
