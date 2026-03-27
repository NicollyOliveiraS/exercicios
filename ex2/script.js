document.getElementById('calcular').addEventListener('click', function() {
            const salarioInput = document.getElementById('salario');
            const salario = parseFloat(salarioInput.value);
            let aumento = 0;

            if (salario <= 1200) {
                aumento = salario * 0.16;
            } else if (salario > 1200 && salario <= 2100) {
                aumento = salario * 0.13;
            } else if (salario > 2100 && salario <= 3000) {
                aumento = salario * 0.10;
            } else if (salario > 3000) {
                aumento = salario * 0.05;
            }

            const novoSalario = salario + aumento;
            document.getElementById('resultado').textContent = `Novo salário: R$ ${novoSalario.toFixed(2)}`;
        });