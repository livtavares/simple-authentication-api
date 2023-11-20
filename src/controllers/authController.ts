import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export const register = async (req: Request, res: Response): Promise<void> => {
    const { username, email, password} = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({username, email, password: hashedPassword});
        await user.save();

        res.status(201).json({ message: 'User registration successfully!' })
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
};

export const login =async (req: Request, res: Response): Promise<void> => {
    const { username, password} = req.body;

    try {
        const user = await User.findOne({ username });

        if(!user) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        const token = jwt.sign({ userId: user._id }, 'secret-key', { expiresIn: '1h'});
        res.status(200).json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};