import React from 'react'
import Pic1 from '../assets/images/pic01.jpg'
import '../css/gallery2.css'
                                   

class Product extends React.Component {
    render() {
        return (  
           <>            
            <a href="#">						
				<span class="image fit">
					<img src={Pic1} alt="" button
                    		                className='snipcart-add-item buyBtn'
                    						data-item-id="1"
                    						data-item-price="11"
                    						data-item-image={Pic1}
                    						data-item-name= "Product Name"
                    						data-item-description= "Description"
                    						data-item-url={"http://snipcart-gatsby.netlify.com"}>
				    </img>
													
				</span>
			</a>
           </> 
        )
    }
}

export default Product
