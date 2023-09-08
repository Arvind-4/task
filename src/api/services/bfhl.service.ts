import { type Request, type Response } from 'express'

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
    let dob = body.dob || '11/03/2002'
    const name = body.name || 'Arvind'
    const roll_number = body.roll_number || '123456789'
    const email = body.email || 'aa4011@srmist.edu.in'

    dob = dob.replace(/\//g, '')
    const numbers = extractNumbers(body.data)
    const alphabets = extractAlphabets(body.data)
    const highest_alphabet = alphabets.sort().reverse()[0]

    return res.status(200).json({
      is_status: true,
      user_id: name.toLowerCase() + '_' + dob,
      email: email,
      roll_number: roll_number,
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
