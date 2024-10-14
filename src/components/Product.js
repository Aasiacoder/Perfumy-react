//Product component
import imgone from "../assets/images/img1.jpg"
import imgtwo from '../assets/images/img2.jpg';
import imgthree from "../assets/images/img3.jpg"

function Product() {
    return (
        <div class="products">
            <div class="box">
                <img src={imgone} alt="image1"></img>
                <p>
                    <b>Miss Dior</b><br></br>
                    For women-Ylang-Ylang;Lily-of-the-Valley;Jasmine
                </p>
            </div>
            <div class="box">
                <img src={imgtwo} alt="image2"></img>
                <p>
                    <b>Irresistible Givenchy Perfume</b><br></br>
                    New Fragrances-cinnamon and vanilla
                </p>
            </div>
            <div class="box">
                <img src={imgthree} alt="image3"></img>
                <p>
                    <b>N5 Chanel Paris
                    </b><br></br>
                    Brand New – Genuine – Intact Floral fragrance - Made in Italy
                </p>
            </div>
        </div>
    )
}

export default Product