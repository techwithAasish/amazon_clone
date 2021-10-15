import Header from "../src/components/Header";
import Image from "next/dist/client/image";
import { selectItems, selectTotal } from "../src/slices/basketSlice";
import { useSelector } from "react-redux";
import CheckoutProduct from "../src/components/CheckoutProduct";
import Currency from "react-currency-formatter";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal); 

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="max-w-screen-xl mx-auto lg:flex">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="pb-4 text-3xl border-b">
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : "Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col p-10 bg-white shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items): {" "}
                <span className="font-bold"> 
                  <Currency quantity={total} currency="GBP"></Currency>
                </span>
              </h2>

              <button className="mt-2 button">Proceed to checkout</button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
