import { type Request, type Response } from 'express'
import { yupUserSchema } from '@src/api/models/user'

function extractNumbers(arr) {
  let numbers = []
  for (let i = 0; i < arr.length; i++) {
    let num = parseFloat(arr[i])
    if (!isNaN(num)) {
      numbers.push(num)
    }
  }
  return numbers
}

function extractAlphabets(arr) {
  let alphabets = []
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'string') {
      continue
    }
    let str = arr[i].replace(/[^a-zA-Z]/g, '')
    if (str.length > 0) {
      alphabets.push(str)
    }
  }
  return alphabets
}

export const bfhlPost = async (req: Request, res: Response) => {
  try {
    const { body } = req
    const user = await yupUserSchema.validate(body)
    if (!user) {
      return res.status(400).json({
        is_status: false,
        message: 'Invalid user data',
      })
    }
    // const user = body

    user.dob = user.dob.replace(/\//g, '')
    const numbers = extractNumbers(user.data)
    const alphabets = extractAlphabets(user.data)
    const highest_alphabet = alphabets.sort().reverse()[0]

    return res.status(200).json({
      is_status: true,
      user_id: user.name.toLowerCase() + '_' + user.dob,
      email: user.email,
      roll_number: user.roll_number,
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: [highest_alphabet],
    })
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      status: false,
      message: err.message,
      data: null,
    })
  }
}

export const bfhlGet = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      is_status: true,
      operation_code: 1,
    })
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      status: false,
      message: err.message,
      data: null,
    })
  }
}
