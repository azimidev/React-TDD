import axios from 'axios'

export const getSecretWord = async (secretWord) => {
  const { data } = await axios('http://localhost')
  secretWord(data)
}

export default {
  getSecretWord,
}
