import { H1 } from "../ui/Headers";
import { SearchInput } from "../ui/Search";

function Orders() {
  return (
    <>
      <H1>Orders</H1>
      <SearchInput type="text" placeholder="Search for orders..." />
    </>
  );
}

export default Orders;
