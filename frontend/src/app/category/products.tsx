

const Products = ({productImg}:any) => {
    return (
        <div><div className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl">
        <figure>
        
<img
src={productImg}
alt="Shoes" className="rounded-2xl h-[320px]" />
</figure>
<div className="card-body pl-5 text-[20px]">
<h2 className="card-title ">
The Prompt Magazine

</h2>
<p><strong>120 000₮</strong></p>

            </div>
        </div>
            </div>
    );
}
export default Products;