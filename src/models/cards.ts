import mongoose from "mongoose";
import { IUser } from "./user";

interface ICard {
  name: string,
  link: string,
  owner: IUser,
  likes: IUser[],
  createdAt: Date
}

const cardSchema = new mongoose.Schema<ICard>({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  link: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  likes: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<ICard>('card', cardSchema);