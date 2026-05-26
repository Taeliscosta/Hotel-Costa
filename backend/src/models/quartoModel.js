let quartos = [];

let nextId = 1;

export const quartoModel = {
    listarTodos(){
        return quartos;
    },

    buscarPorId(id){
        return quartos.find(
            quarto => quarto.id === id
        );
    },

    inserir({ numero, tipo, preco, disponivel}) {

        const novoQuarto = {
            id: nextId++,
            numero,
            tipo,
            preco,
            disponivel: true
        };

        quartos.push(novoQuarto);

        return novoQuarto;
    },

    atualizar(id, dados) {
        const index = quartos.findIndex(
            quarto => quarto.id == id
        );

        if (index === -1) {
            return null;
        }

        quartos[index] = { ...quartos[index], ...dados};

        return quartos[index];
    },

    remover(id) {
        const tamanhoAntes = quartos.length;

        quartos = quartos.filter(quarto => quarto.id !== id);

        return quartos.length < tamanhoAntes;
    }

};