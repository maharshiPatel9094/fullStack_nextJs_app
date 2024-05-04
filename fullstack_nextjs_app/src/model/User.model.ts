import mongoose, { Schema, Document } from "mongoose";

// export interface Message extends Document {: Here, an interface named Message is declared, extending the Document interface provided by Mongoose. This means any object that conforms to the Message interface will also have the properties and methods defined in the Document interface, which are useful for interacting with MongoDB.
// type safety
export interface Message extends Document {
  Content: string;
  createdAt: Date;
}

// message schema
const MessageSchema: Schema<Message> = new Schema({
  Content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

// user interface
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessage: boolean;
  messages: Message[];
}

// user schema
const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, " Username is Required "],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, " Username is Required "],
    unique: true,
    match: [
      /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>_+\-=\[\]\\\/\s]*$/,
      " Please use a valid email address ",
    ],
  },
  password: {
    type: String,
    required: [true, " Password is Required "],
  },
  verifyCode: {
    type: String,
    required: [true, " VerifyCode is Required "],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, " VerifyCodeExpiry is Required "],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },
  messages: [MessageSchema],
});

// nextjs run on edge so we have to always check other models in the database
const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);


export default UserModel;

















// schema creation --- const schemaname = new Schema()
// schema export ----  
// // Define the model
// const Message = mongoose.model<Message>("Message", messageSchema);

// Export the model
// export default Message;