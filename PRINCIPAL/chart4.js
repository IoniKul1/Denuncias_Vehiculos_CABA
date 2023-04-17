
d3.dsv(',',"Barrios_2.csv", d3.autoType).then((data) => {
    let chart4 = Plot.plot({
        marks: [
        Plot.barX(
            data,
            Plot.groupy({ y: "count" },
            { x: "domicilio_barrio", 
            y: "", 
            sort: { x: "y", reverse: true },
            }) ),
        ],
        color: {
        legend: true,
        scheme: 'blues',
        },
        grid:true,
        line:true,
        nice:true,
        width: 1000,
        height: 500,
        style: {
        color: "black",
        fontFamily: "helvetica",
        fontSize: "10px",
        },
        marginLeft: 55,
        marginRight: 55,
        marginTop: 50,
        marginBottom: 100,
        insetTop: 10,
        insetBottom: 10,
        insetLeft:10,
        insetRight: 10,
        x: {
        label:"Canal",
        tickRotate: -29,
        round : true,
        },
        y: {
        label:"Count",
        }
    });
    
    d3.select("#chart4").append(() => chart4);
    });
    