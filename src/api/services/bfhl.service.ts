import { type Request, type Response } from 'express'
import { yupUserSchema } from '../models/user'

export const bfhlPost = async (req: Request, res: Response) => {
  try {
    const { body } = req
    const user = await yupUserSchema.validate(body)
    if (!user) {
      throw new Error('Invalid user')
    }
    const onlyNumbers = user.data.filter((element) => parseInt(element))

    const onlyAlphabets = user.data.filter((element) => !parseInt(element))
    user.dob = user.dob.replace(/\//g, '')
    const highestAlphabet = onlyAlphabets.sort().reverse()[0]

    return res.status(200).json({
      is_status: true,
      user_id: user.name.toLowerCase() + '_' + user.dob,
      numbers: onlyNumbers,
      alphabets: onlyAlphabets,
      highest_alphabet: [highestAlphabet],
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
