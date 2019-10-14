function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function time() {
    const horaEntrada = document.querySelector("#horaEntrada").value;
    const horaSaidaAlmoco = document.querySelector("#horaSaidaAlmoco").value;
    const horaRetornoAlmoco = document.querySelector("#horaRetornoAlmoco").value;
    const quantidadeDeHoras = document.querySelector("#quantidadeDeHoras").value;

    const turnoManha = sub(horaSaidaAlmoco, horaEntrada); //MANHA
    const now = new Date();
    const hourNow = now.getHours().toString().length == 2 ? now.getHours().toString() : "0" + now.getHours().toString();
    const minutesNow = now.getMinutes().toString().length == 2 ? now.getMinutes().toString() : "0" + now.getMinutes().toString();
    const horasAgora = hourNow + ":" + minutesNow;
    let turnoTarde;
    if (new Number(sub(horasAgora, horaRetornoAlmoco).split(":")[0]) > 0) {
        turnoTarde = sub(horasAgora, horaRetornoAlmoco); //TARDE
    } else {
        turnoTarde = sub(horasAgora, horaSaidaAlmoco); //TARDE
    }
    const falta = sub(quantidadeDeHoras, add(turnoTarde, turnoManha));

    const humor = new Number(falta.split(":")[0]) > 1 ? "Tristeza :D" : "Alegria :)";

    const str = `<div class="modal-header">
    <h2 class="modal-title" id="exampleModalLabel">${humor}</h2>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div><h4>Trabalhado: ${turnoManha} hh:mm <br />
    Falta: ${falta} hh:mm  <br />
    Tchau: ${add(sub(quantidadeDeHoras, turnoManha), horaRetornoAlmoco)} hh:mm </h4>`;
    document.querySelector("#resultado").innerHTML = str;



}


function conv(val) {
    return `${Math.floor(val / 60)}`.padStart(2, "0") + ":" + `${(val % 60)}`.padStart(2, "0");
}
function sub(val1, val2) {
    const t1 = val1.split(':').map(v => +v);
    const t2 = val2.split(':').map(v => +v);
    return conv((t1[0] - t2[0]) * 60 + t1[1] - t2[1]);
};
function add(val1, val2) {
    const t1 = val1.split(':').map(v => +v);
    const t2 = val2.split(':').map(v => +v);
    return conv((t1[0] + t2[0]) * 60 + t1[1] + t2[1]);
};