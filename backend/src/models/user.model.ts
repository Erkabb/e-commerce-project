import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

interface IUser {
  _id: Schema.Types.ObjectId;
  firstname: String;
  lastname: String;
  email: String;
  password: string;
  cellphone: String;
  role: String;
  pfp: String;
  address: String;
  created_at: Date;
  updated_at: Date;
}
const userSchema = new Schema<IUser>({
  firstname: {
    type: String,
    required: [true, "Хэрэглэгчийн нэрийг заавал оруулна."],
  },
  lastname: {
    type: String,
    required: [true, "Хэрэглэгчийн овгийг заавал оруулна уу."],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Хэрэглэгчийн имэйл хаягийг заавал оруулна."],
  },
  password: {
    type: String,
    minLength: [8, "Хэрэглэгчийн нууц үг 8 тэмдэгтээс доошгүй байна."],
    required: [true, "Нууц үг заавал оруулна уу."],
  },
  cellphone: String,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  pfp: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  address: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    next();
  } else {
    const hashedPass = bcrypt.hashSync(this.password, 8);
    this.password = hashedPass;
    next();
  }
});

const User = model("user", userSchema);

export default User;
