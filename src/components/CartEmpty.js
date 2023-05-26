import { Link } from "react-router-dom"


const CartEmpty=()=>{
    return(
        <div className=" flex flex-col justify-start items-center">
        <div>
          <img
            src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/media/314560586aef7f1eae694d78a015c69c.gif"
            alt="cart-empty"
            width="600px"
          />
        </div>
        <p className="font-semibold text-lg  ">
          Your Cart is Empty <span className="text-blue-400 font-bold">
            <Link to='/'>Back to Main Menu</Link>
            </span>{" "}
        </p>
      </div>
    )
}

export default CartEmpty