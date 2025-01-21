import { model, Schema } from "mongoose";

interface IProduct {
  name: string;
  description: string;
  price: number;
  size: string;
  images: [string];
  isBrandNew: boolean;
  color:[string];
  soldQuantity: number;
  totalQuantity:number,
  discount: number;
  category: Schema.Types.ObjectId;
}
const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      default: "comment",
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
    isBrandNew: {
      type: Boolean,
      default: true,
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
  },
  {
    timestamps: true,
  }
);

const Product = model<IProduct>("Product", productSchema);

export default Product;
