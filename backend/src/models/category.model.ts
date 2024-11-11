import { model, Schema } from "mongoose";

interface ICategory {
  season: String,
  material: String,
  size:String,
 
}
const categorySchema = new Schema<ICategory>(
  {
    
      season: {
        type: String,
      },
      material: {
        type:String
      },
      size: {
        type:String
      },
  },
  {
    timestamps: true,
  }
);

export const Category = model<ICategory>("Category", categorySchema);
export default Category;
