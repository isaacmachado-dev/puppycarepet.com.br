export default function HistoricoPageDTO() {
    return {
        title: "Histórico de Pedidos",
        description: "Esta é a página de histórico de pedidos do cliente.",
        pagination: {
            currentPage: 1,
            totalPages: 10,
            pages: [1, 2, 3, "...", 10],
        },
    };
}