import React from 'react';
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Home(){
    const images = [
        "https://kardinalstickpod.com/wp-content/uploads/2022/02/Banner_blog-2.jpg",
        "https://www.kardinalstickpodth.com/wp-content/uploads/2022/07/Banner-Web-Kardinalstickpodth-1.jpg.webp",
        "https://sv1.picz.in.th/images/2022/12/22/JfOE7P.png",
        'https://scontent.fbkk21-1.fna.fbcdn.net/v/t39.30808-6/312889754_444518587820617_6091817326407386102_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=d2OtA_6qS7IAX9ou68-&_nc_ht=scontent.fbkk21-1.fna&oh=00_AfD54vk6uWqCAkDagpKm6-ww58yhB3kx6dAwY8yDq4chpA&oe=63E4FF57'
    ];
    
    return(
        <Slide>
            <div className="each-slide-effect">
                <div className='aa' style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div className='aa' style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div className='ab' style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
        

        
        
    </Slide>
    )
}
export default Home