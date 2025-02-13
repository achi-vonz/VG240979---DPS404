// Product.jsx
import React from 'react';
import styles from "../app/page.module.css";

const Product = ({ product, index, deleteProduct }) => {
 return (
 <div className={styles.list}>
 <h3>{product.name} - {product.brand} ({product.quantity} unidades) - ${product.price} c/u</h3>
 <button className={styles.btn_delete} onClick={() => deleteProduct(index)}>x</button>
 </div>
 );
};

export default Product;