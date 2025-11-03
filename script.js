document.getElementById("calcular").addEventListener("click", function() {
    // Pega os valores do input
    const dataInicio = document.getElementById("inicio").value;
    const ciclo = document.getElementById("ciclo").value;

    // Validação de entradas
    if (!dataInicio || !ciclo || ciclo < 21 || ciclo > 35) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Converte a data de início para um objeto Date
    const inicio = new Date(dataInicio);

    // Calcula a próxima data do período
    const proximoPeriodo = new Date(inicio);
    proximoPeriodo.setDate(inicio.getDate() + parseInt(ciclo));

    // Exibe o resultado
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `Seu próximo período começará em: ${proximoPeriodo.toLocaleDateString("pt-BR")}`;
});
