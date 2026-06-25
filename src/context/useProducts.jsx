import { useContext } from "react";
import { ProductContext } from "./product-context";

export function useProducts() {
  // Keep the consumer hook separate so fast refresh stays happy in this file structure.
  return useContext(ProductContext);
}
