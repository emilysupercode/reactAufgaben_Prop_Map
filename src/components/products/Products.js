import BuyNowButton from "../buynowbutton/BuyNowButton";

function Product(props) {
    return (
        < div className="singleProductDiv" >
            <img src={props.image} alt="shampoo bottles" />
            <p className="productName">{
                props.name}</p>
            <p className="productPrice">{props.price}</p>
            <BuyNowButton />
        </div >
    )
}

export default Product;