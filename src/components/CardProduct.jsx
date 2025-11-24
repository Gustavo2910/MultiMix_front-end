import React from 'react';

export default function CardProduct({ product, onEdit, onDelete }) {
    // URL de placeholder para fallback caso a imagem falhe
    const placeholderImage = "https://placehold.co/100x100/CCCCCC/000000?text=Produto";

    return (
        <div className="product-card-item">
            
            {/* 1. CONTAINER E IMAGEM (NOVIDADE) */}
            <div className="product-image-container">
                <img 
                    src={product.image || placeholderImage} 
                    alt={product.name} 
                    className="product-image"
                    // Fallback se a URL da imagem falhar
                    onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }} 
                />
            </div>
            
           

            <h4 className="product-name">{product.name}</h4>
            <p className="product-price">R$ {product.price ? product.price.toFixed(2) : 'N/A'}</p>
            
            
            <div className="card-actions">
                <button 
                    className="action-btn edit-btn" 
                    onClick={() => onEdit(product)}
                >
                    Editar
                </button>
                <button 
                    className="action-btn delete-btn" 
                    onClick={() => onDelete(product.id)}
                >
                    Excluir
                </button>
            </div>
        </div>
    );
}