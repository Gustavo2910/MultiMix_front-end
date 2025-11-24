export async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error(`Erro ao buscar produtos: ${response.status}`);
        }
        const data = await response.json();
        
        return data.map(item => ({
            id: item.id.toString(), // Garante que o ID seja uma string
            name: item.title,
            price: item.price,
            description: item.description,
            image: item.image, // URL da imagem
        
        }));

    } catch (error) {
        console.error("Falha ao carregar produtos da API:", error);
        // Retorna um array vazio em caso de falha
        return [];
    }
}