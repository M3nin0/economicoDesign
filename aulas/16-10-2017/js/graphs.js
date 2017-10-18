function line(contx, nome, dado, la){

    var ctx = document.getElementById(contx);
    ctx.height = 50;

    var chartG = new Chart(ctx, {
        type: 'line',
        data: {
            labels: la,
            datasets: [{
                label: nome,
                data: dado,
                borderWidth: 6,
                borderColor: 'rgba(77, 166, 253, 0.85)',
                backgroundColor: 'transparent'
            }]
        }
    });
}

function bar(contx, nome, dado, la){
    var ctx = document.getElementById(contx);
    ctx.height = 70;

    var chartG = new Chart(ctx, {

        type: 'bar',
        data: {
            labels: la,
            datasets: [{
                label: nome,
                data: dado,
                borderWidth: 4,
                borderColor: 'rgba(56, 133, 253, 0.85)',
                backgroundColor: 'transparent'
            }]
        } 
    });
}

// Teste function
function constLine(contx, nome, dado, la){

    var envData = {
        labels: la,
        datasets: dado
    }

    var ctx = document.getElementById(contx).getContext("2d");

    Chart.types.Line.extend({
        name: "Linha vertical",
        initialize: () => {
            this.chart.ctx.beginPath();
            this.chart.ctx.moveTo(0, 15);
            this.chart.ctx.lineTo(123, 321);
            this.chart.ctx.stroke();

            Chart.types.Line.prototype.initialize.apply(this, arguments);
        }
    })

    new Chart(ctx).LineAlt(envData);

}