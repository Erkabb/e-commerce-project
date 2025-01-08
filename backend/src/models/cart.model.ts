import { model, Schema } from "mongoose";

interface ICart {
  user: Schema.Types.ObjectId;
  products: [{ product: Schema.Types.ObjectId; soldQuantity: Number; }];
  totalAmount: Number;
}

const cartSchema = new Schema<ICart>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required:true
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },

        soldQuantity: { type: Number },
      },
    ],
    totalAmount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
const Cart = model<ICart>("Cart", cartSchema);
export default Cart;
