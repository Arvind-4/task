import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '@src/api/utils/token'

export const adminLoginRequired = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const header = req.header('Authorization')
    const token = header.split(' ')[1]
    const decoded: any = await verifyToken(token)
    if (!decoded) {
      return res.status(401).json({
        status: false,
        message: 'The token you provided is invalid',
        data: null,
      })
    }
    if (!decoded.isAdmin) {
      return res.status(401).json({
        status: false,
        message: "You don't have permission to access this route",
        data: null,
      })
    }
    next()
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: "You don't have permission to access this route",
      data: null,
    })
  }
}
