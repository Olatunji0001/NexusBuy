import product1 from "@/public/product1.jpg";
type Product = {
  id: number;
  name: string;
  price: string;
  image: typeof product1;
  oldPrice: string;
  brand: string;
};
export default Product;

