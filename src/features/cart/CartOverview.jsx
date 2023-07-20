import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-800 text-stone-200 uppercase p-4 sm:p-6 text-sm sm:text-base">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to={'/cart'}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;