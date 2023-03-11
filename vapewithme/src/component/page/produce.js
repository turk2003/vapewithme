function Produce(){
    const image = [
        'https://scontent.fbkk21-1.fna.fbcdn.net/v/t39.30808-6/240523523_3018981928375852_8243629680370202378_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE4goHuPgTrkKE_eH6wVEfYIxX9G46WpLsjFf0bjpaku04PDYPNpZurChB06gnnc90nB2-AFB9a6XevY_ZWrToW&_nc_ohc=TYe7ixVsF2sAX-kCaw-&_nc_ht=scontent.fbkk21-1.fna&oh=00_AfCY0rs0G8jdudNt7dfhiiRg-EMeJKm5JgkL48V8ZxCpzQ&oe=63F6436B',
        'https://scontent.fbkk21-1.fna.fbcdn.net/v/t39.30808-6/241041197_932907733988027_3014907654641544874_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGwuhaO5QAoxPWBCiUR9M-maSy_iVfXs55pLL-JV9eznnvePdPUcfBUK7CcM70ZTiRh1h-IjZv-qgspNrWjHgw1&_nc_ohc=X0X0EEKgKEQAX8Ol7bx&tn=zBkk8hGbfX6Tk770&_nc_ht=scontent.fbkk21-1.fna&oh=00_AfDuFTKV7j97zGkB7cgCeWXR_SW7xLXKqyh5wjjo91D9cA&oe=63F66C8C',
        'https://scontent.fbkk21-1.fna.fbcdn.net/v/t1.6435-9/68429578_363294537674149_8286238489586958336_n.jpg?stp=dst-jpg_s851x315&_nc_cat=101&ccb=1-7&_nc_sid=da31f3&_nc_ohc=Qdj-Ju9WJjAAX9UZLR4&_nc_ht=scontent.fbkk21-1.fna&oh=00_AfAubYKAghsIsKiyDhC2OnvQ4xa8hxuTQkSrgVwc7cXogQ&oe=6409709C'
            
    ]
    return(
        <div>
        <div className="producebg">
            <h1>เเผนผังองค์กร</h1>
            <div className="ceo">
            <img src={image[0]} alt="ceo" />
            <div className="ceotext">
                <h2>ตำเเหน่ง : หัวเรือไฟฟ้าเเกลง</h2>
                <p>ชื่อ : นาย กฤษดากร ใจเที่ยง</p>
                <p>ประวัติ : หลังเขาได้ออกจากเรือนจำคลองเปรมก็ได้มุ่งมั่นทำธุรกิจขายบุหรี่ไฟฟ้า</p>
                <p>เพื่อนำเงินไปเปย์ทรงซ้อ</p>
            </div>


            </div>
            
            </div>
            <div className = 'secondbg'>
            <div className="second">
            <img src={image[1]} alt="sec" />
            <div className="ceotext">
                <h2>ตำเเหน่ง : มือซ้าย  ไฟฟ้าเเกลง</h2>
                <p>ชื่อ : นาย พีรภัทร์ วงษ์ศักดดิ์</p>
                <p>ประวัติ : ติดตามหัวเรือมาตั้งเเต่บางขวางถึงคลองเปรม</p>
            </div>

            </div>
            <div className="second">
            <img src={image[2]} alt="thd" />
            <div className="ceotext">
                <h2>ตำเเหน่ง : มือขวา ไฟฟ้าเเกลง   </h2>
                <p>ชื่อ : นาย อัศวิน โพธิ์เเจ้ง</p>
                <p>ประวัติ : หลังธุรกิจกระท่อมรายได้ไม่ค่อยดีจึงมาร่วมมือ</p>
                <p>กับหัวเรือ</p>
            </div>

            </div>
            </div>
        </div>
            
    )
}
export default Produce
