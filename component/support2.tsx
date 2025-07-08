export default function Suppt() {
  return (
    <>
      <div className="w-[70%] mx-auto mt-10 text-[17px]">
        <h1 className="text-[30px] font-medium mb-3">Popular Questions</h1>
        <div className="grid grid-cols-1 gap-5">
          <select name="" id="" className="outline-1 rounded-sm p-1">
            <option value="">How do I check my order status?</option>
            <option value="" className="font-light">
              You can easily track your order by logging into your account and
              navigating to the "My Orders" section.
            </option>
            <option value="" className="font-light">
              Each order will have a direct tracking link once it ships.
            </option>
          </select>
          <select name="" id="" className="outline-1 rounded-sm p-1">
            <option value="" className="font-light">
              How long does it take for orders to be delivered?
            </option>
            <option value="" className="font-light">
              Standard delivery within Nigeria typically takes 3-5 business
              days.....
            </option>
          </select>
          <select name="" id="" className="outline-1 rounded-sm p-1">
            <option value="" >What payment methods are accepted?</option>
            <option value="" className="font-light">
              We securely accept all major credit/debit cards (Visa, MasterCard,
              Verve) and PayPal for your convenience.{" "}
            </option>
            <option value="" className="font-light">All transactions are encrypted.</option>
          </select>
        </div>
      </div>
    </>
  );
}
