import mongoose from 'mongoose'
import doctors from './doctors'

const User = new mongoose.model('User')


export default async function handler(req, res) {
    const { method } = req

    switch (method) {
        case "GET":
            try {
                const user = await User.find()
                return res.status(200).json(user)
            } catch (error) {
                res.status(500).json({ error: "Server Side Error" })
            }
    }
}