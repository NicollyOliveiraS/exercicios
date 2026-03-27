document.getElementById("calcular").addEventListener("click", function () {
    const quantidadeFuncionarios = parseInt(document.getElementById("colaboradores").value);
    const quantidadeDias = parseInt(document.getElementById("dias").value);

    let valorTransporte = 0;

    if (quantidadeFuncionarios >= 1 && quantidadeFuncionarios <= 49) {
        valorTransporte = 4.50;
    } else if (quantidadeFuncionarios >= 50 && quantidadeFuncionarios <= 99) {
        valorTransporte = 4.10;
    } else if (quantidadeFuncionarios >= 100 && quantidadeFuncionarios <= 149) {
        valorTransporte = 3.80;
    } else if (quantidadeFuncionarios >= 150) {
        valorTransporte = 3.60;
    }

    const valorTotal = quantidadeFuncionarios * quantidadeDias * valorTransporte;

    document.getElementById('resultado').textContent =
        `Valor total do transporte fretado: R$ ${valorTotal.toFixed(2)}`;
});