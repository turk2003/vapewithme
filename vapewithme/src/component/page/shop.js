import Shopdata from "./shopdata"
function Shop(){
    return(
        <div>
            <div className="shopT">
                <h1 className="shoph1">สินค้าของร้าน</h1>
                <h2 className="shoph2">(12ชิ้น)</h2>
            </div>
            <div>
                <div className="ITEMshop">
                    {Shopdata.map((menu,index)=>{
                        return(
                            <div className="itemshop">
                            <img src={menu.img} alt={index}/>
                            <h4>{menu.title}</h4>   
                            <h3>ราคา {menu.price} บาท</h3>
                            <button className="btn">สั่งซื้อ</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        

    )
}
export default Shop