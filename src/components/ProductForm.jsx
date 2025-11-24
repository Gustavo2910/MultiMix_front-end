import React, { useState, useEffect } from "react";
import '../styles/Products.css'

export default function ProductForm({ selectedProduct, onSave }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(''); 
    const [formError, setFormError] = useState('');

    // Efeito para carregar os dados do produto quando o selectedProduct muda (Modo Edição)
    useEffect(() => {
        if (selectedProduct) {
            // Preenche todos os campos
            setName(selectedProduct.name || '');
            setPrice(selectedProduct.price ? selectedProduct.price.toString() : '');
            setDescription(selectedProduct.description || '');
            setImage(selectedProduct.image || ''); 
            
            setFormError(''); 
        } else {
            // Limpa o formulário se não houver produto selecionado
            setName('');
            setPrice('');
            setDescription('');
            setImage(''); 
            setFormError('');
        }
    }, [selectedProduct]);

    function handleSubmit(e) {
        e.preventDefault();
        setFormError('');

        if (!name || !price) {
            setFormError('Por favor, preencha o Nome e o Preço para continuar.');
            return;
        }

        const newProduct = {
            // Mantém o ID existente para edição ou gera um novo para criação
            id: selectedProduct ? selectedProduct.id : Date.now(), 
            name,
            price: parseFloat(price), 
            description,
            image, 
        };

        // Chama a função de salvar no componente pai (Products.jsx)
        onSave(newProduct);

        // Limpa o formulário após salvar
        setName('');
        setPrice('');
        setDescription('');
        setImage(''); 
    }

    // Componente de Erro Simples
    const ErrorMessage = ({ message }) => {
        if (!message) return null;
        return (
            <div className="form-error-message">
                {message}
            </div>
        );
    };

    return (
        <div className="form-card">
            <h3>{selectedProduct ? 'Editar Produto' : 'Novo Produto'}</h3>
            
            <ErrorMessage message={formError} /> 

            <form onSubmit={handleSubmit} className="product-form-layout">
                {/* Campo Nome */}
                <input
                    type="text"
                    placeholder="Nome do Produto"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field"
                    required
                />
                {/* Campo Preço */}
                <input
                    type="number"
                    placeholder="Preço"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="input-field"
                    min="0"
                    step="0.01"
                    required
                />
                {/* Campo Descrição */}
                <textarea
                    placeholder="Descrição (Opcional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="input-field textarea-field"
                    rows="2"
                />
                {/* Campo Imagem */}
                <input
                    type="url"
                    placeholder="URL da Imagem (Opcional)"
                    value={image} 
                    onChange={(e) => setImage(e.target.value)}
                    className="input-field"
                />

                <button type="submit" className="save-btn">
                    {selectedProduct ? 'Salvar Edição' : 'Adicionar Produto'}
                </button>
            </form>
        </div>
    );
}