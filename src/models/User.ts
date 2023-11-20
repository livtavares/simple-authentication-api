import mongoose, { Schema, Document} from "mongoose";

export interface IUser extends Document{
    username: string;
    email: string;
    password: string;
}

const userSchema: Schema = new Schema({
    username: String,
    email: String,
    password: String,
})

const User = mongoose.model<IUser>('User', userSchema);

export default User;