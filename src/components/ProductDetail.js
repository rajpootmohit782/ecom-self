import Header from "./Header";
import { useParams } from "react-router-dom";
import { productsArr } from "./productsArr";

const ProductDetail = () => {
  const param = useParams();
  for (let i in productsArr) {
    if (productsArr[i].id === param.productId) {
      console.log(productsArr[i].id);
    } else {
      console.log("no");
    }
    i++;
  }
  console.log(param);
  return (
    <div>
      <Header />
      <div>products</div>
    </div>
  );
};

export default ProductDetail;
