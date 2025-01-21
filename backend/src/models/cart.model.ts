import { model, Schema } from "mongoose";

interface Product {
  _id:Schema.Types.ObjectId;
  name: string;
  description: string;
  price: number;
  size: string;
  images: [string];
  color:[string];
  soldQuantity: number;
  totalQuantity:number,
  discount: number;
  category: Schema.Types.ObjectId;
};
interface ICart {
  user: Schema.Types.ObjectId;
  productId:Schema.Types.ObjectId;
  products: Product[];
  totalAmount: Number;
};

const cartSchema =new Schema<ICart>(
 {
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required:true
  },
  productId:{
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required:true
  },
  products:[{
    _id:{
      type:Schema.Types.ObjectId
    },
    name: {
      type: String,
      required:true,
    },
    price:{
      type:Number,
      required:true, 
    },
    description:{
      type:String
    },
    size: {
      type: String,
      enum: ["XS", "S", "M", "L", "XL", "XXL"],
      default: "S",
    },
    images: {
      type: [String],
      default: ["image"],
    },
    color: {
      type:[String],
      default:["Black"],
    },
    soldQuantity: {
      type: Number,
      required: true,
    },
    totalQuantity:{
      type:Number,
    },
    discount: { type: Number, default: 0 },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
  }],
  totalAmount: {
    type: Number,
    default: 0,
  },
 },
 {
  timestamps:true,
 }
);
const Cart = model<ICart>("Cart", cartSchema);
export default Cart;