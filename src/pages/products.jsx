import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import CardProduct from "../components/CardProduct";
import { getProducts } from "../services/api.js"; // Para simular o carregamento inicial

import '../styles/Products.css'; 

export default function Products() {
    // Lista de todos os produtos
    const [products, setProducts] = useState([]);
    // Produto selecionado para edição (null para modo 'Novo Produto')
    const [selectedProduct, setSelectedProduct] = useState(null);

    
    // Carregar produtos iniciais 
    useEffect(() => {
      
        async function loadInitialData() {
            // Tenta carregar dados do LocalStorage ou da API FakeStore
            const initialApiData = await getProducts();
            
            // Prioriza dados do LocalStorage para manter o estado do CRUD
            const localProducts = JSON.parse(localStorage.getItem('crud_products_list') || '[]');
            
            if (localProducts.length > 0) {
                setProducts(localProducts);
            }
            
        }
        loadInitialData();
    }, []);

    // Função para salvar ou atualizar um produto
    const saveProduct = (productToSave) => {
        let updatedProducts;
        if (products.some(p => p.id === productToSave.id)) {
            // Edição: Mapeia para substituir o produto existente
            updatedProducts = products.map(p => 
                p.id === productToSave.id ? productToSave : p
            );
        } else {
            // Criação: Adiciona o novo produto no início da lista
            updatedProducts = [productToSave, ...products];
        }
        
        setProducts(updatedProducts);
        localStorage.setItem('crud_products_list', JSON.stringify(updatedProducts));
        setSelectedProduct(null); // Limpa o formulário após salvar
    };

    // Função para deletar um produto
    const deleteProduct = (id) => {
        if (window.confirm("Tem certeza que deseja excluir este produto?")) {
            const updatedProducts = products.filter(p => p.id !== id);
            setProducts(updatedProducts);
            localStorage.setItem('crud_products_list', JSON.stringify(updatedProducts));
        }
    };
    
    //Renderização do Layout
    return (
        <div className="products-page-container">
            <h1 className="page-title">Gerenciar Produtos</h1>
            
           
            <div className="crud-layout">
                
                {/* Coluna 1: Formulário (Fica fixo na lateral em tela grande) */}
                <ProductForm 
                    selectedProduct={selectedProduct} 
                    onSave={saveProduct} 
                />
                
                {/* Coluna 2: Lista de Produtos (Ocupa o restante da largura) */}
                <div className="product-list">
                    {products.length === 0 ? (
                         <p className="no-products-message">Nenhum produto cadastrado. Adicione um novo!</p>
                    ) : (
                        products.map(prod => (
                            <CardProduct
                                key={prod.id}
                                product={prod}
                                onEdit={setSelectedProduct} // Define o produto para edição
                                onDelete={deleteProduct}
                            />
                        ))
                    )}
                </div>
            </div>

        </div>
    );
}