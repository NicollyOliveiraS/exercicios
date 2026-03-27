const salarioBruto = document.getElementById("salarioBruto")
const horasExtrasNormais = document.getElementById("horasExtrasNormais")
const horasExtrasFinaisSemana = document.getElementById("horasExtrasFinaisSemana")
const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

calcular.addEventListener("click", function () {

    const salario = Number(salarioBruto.value)
    const horasNormais = Number(horasExtrasNormais.value)
    const horasFds = Number(horasExtrasFinaisSemana.value)

    if (!salario || salario <= 0) {
        resultado.textContent = "Digite um salário válido"
        return
    }

   const valorHora = salario / 200

    const valorExtrasNormais = valorHora * horasNormais * 1.5
    const valorExtrasFinaisSemana = valorHora * horasFds * 2 // pode ser 100% em alguns casos

    const total = salario + valorExtrasNormais + valorExtrasFinaisSemana
    const displayresultado = document.getElementById('resultado')
    displayresultado.innerText = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            

})
