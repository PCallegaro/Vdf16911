function gerarTexto() {
    const equipa = document.getElementById('equipa').value;
    const sfid = "54723695";
    const id_rc_pre_contrato = document.getElementById('id_rc_pre_contrato').value;
    const conta_titular = document.getElementById('conta_titular').value;
    const nome_cliente = document.getElementById('nome_cliente').value;
    const morada = document.getElementById('morada').value;
    const email = document.getElementById('email').value;
    const pacote = document.getElementById('pacote').value;
    const cartao_mandatorio = document.getElementById('cartao_mandatorio').value;
    const cartao_opcional1 = document.getElementById('cartao_opcional1').value;
    const cartao_opcional2 = document.getElementById('cartao_opcional2').value;
    const cartao_opcional3 = document.getElementById('cartao_opcional3').value;
    const troca_equipamentos = document.getElementById('troca_equipamentos').value;
    const equipamentos = document.getElementById('equipamentos').value;
    const alteracao_morada_sn = document.getElementById('alteracao_morada_sn').value;

    const texto = `
--------------------------------------------------
Equipa: ${equipa}
SFID: ${sfid}
ID RC Pré-Contrato: ${id_rc_pre_contrato}
--------------------------------------------------
Conta do Titular: ${conta_titular}
Nome Cliente: ${nome_cliente}
Morada: ${morada}
Endereço Email: ${email}
--------------------------------------------------
Pacote: ${pacote}
--------------------------------------------------
Nº Cartão móvel: 
  > Mandatório: ${cartao_mandatorio}
  > Opcional: ${cartao_opcional1}
  > Opcional: ${cartao_opcional2}
  > Opcional: ${cartao_opcional3}
--------------------------------------------------
Troca de equipamentos? ${troca_equipamentos}
Equipamentos: ${equipamentos}
Alteração de morada instalação S/N?: ${alteracao_morada_sn}
--------------------------------------------------
    `;

    document.getElementById('resultado_text').value = texto;
}

function copiarTexto() {
    const texto = document.getElementById('resultado_text');
    texto.select();
    texto.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
}