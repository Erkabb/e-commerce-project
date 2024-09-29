const Sidebar = () => {
    return (
        <div className="flex flex-col text-[18px] gap-5">
            <div className="flex flex-col gap-2">
                <h1><strong>Ангилал</strong></h1>
                <ul className="text-[16px]">
                    <li><input type="checkbox"  className="checkbox" />Малгай</li>
                    <li><input type="checkbox"  className="checkbox" />Усны сав</li>
                    <li><input type="checkbox"  className="checkbox" />T-Shirt</li>
                    <li><input type="checkbox"  className="checkbox" />Hoodie</li>
                    <li><input type="checkbox"  className="checkbox" />Tee</li>
                    <li><input type="checkbox"  className="checkbox" />Цүнх</li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <h1><strong>Хэмжээ</strong></h1>
                <ul className="text-[16px]">
                <li><input type="checkbox"  className="checkbox" />Free</li>
                    <li><input type="checkbox"  className="checkbox" />XS</li>
                    <li><input type="checkbox"  className="checkbox" />S</li>
                    <li><input type="checkbox"  className="checkbox" />M</li>
                    <li><input type="checkbox"  className="checkbox" />L</li>
                    <li><input type="checkbox"  className="checkbox" />XL</li>
                    <li><input type="checkbox"  className="checkbox" />XXL</li>
                    <li><input type="checkbox"  className="checkbox" />XXXL</li>
           </ul> </div>
        </div>
    )
}
export default Sidebar;