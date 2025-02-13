// Form.jsx
"use client"
import React, { useState } from 'react';
import Product from "@/components/Product";
import styles from "../app/page.module.css";

const Form = () => {
 const [product, setProduct] = useState({ name: "", brand: "", quantity: "", price: "" });
 const [products, setProducts] = useState([]);

 const handleChange = (e) => {
 setProduct({ ...product, [e.target.name]: e.target.value });
 };

 const handleClick = () => {
 if (!product.name || !product.brand || !product.quantity || !product.price) {
 alert('Todos los campos son obligatorios');
 return;
 }
 setProducts([...products, product]);
 setProduct({ name: "", brand: "", quantity: "", price: "" });
 };

 const deleteProduct = (index) => {
 const newProducts = [...products];
 newProducts.splice(index, 1);
 setProducts(newProducts);
 };

 const total = products.reduce((acc, item) => acc + (parseFloat(item.price) * parseInt(item.quantity)), 0);

 return (
 <>
 <form onSubmit={(e) => e.preventDefault()}>
 <label>Nombre del producto</label>
 <input className={styles.form_input} type="text" name='name' value={product.name} onChange={handleChange} />
 <label>Marca</label>
 <input className={styles.form_input} type="text" name='brand' value={product.brand} onChange={handleChange} />
 <label>Cantidad</label>
 <input className={styles.form_input} type="number" name='quantity' value={product.quantity} onChange={handleChange} />
 <label>Precio</label>
 <input className={styles.form_input} type="number" name='price' value={product.price} onChange={handleChange} />
 <button className={styles.form_button} onClick={handleClick}>Agregar</button>
 </form>
 <h3>Total: ${total.toFixed(2)}</h3>
 {products.map((item, index) => (
 <Product key={index} index={index} product={item} deleteProduct={deleteProduct} />
 ))}
 </>
 );
};

export default Form;