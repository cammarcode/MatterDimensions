
function ToDecimal(inp){
    return new Decimal(inp);
}

function ToInteger(inp){
    return parseInt(inp);
}

function dimsload(){
    if (localStorage.getItem("nondecimal") != null && localStorage.getItem("nondecimal") != undefined){
        matter = new Decimal(localStorage.getItem("matter"));
        [m1.mult, m1.cost, m1.scaling, m1.count,  m2.mult, m2.cost, m2.scaling, m2.count,  m3.mult, m3.cost, m3.scaling, m3.count,  m4.mult, m4.cost, m4.scaling, m4.count,  m5.mult, m5.cost, m5.scaling, m5.count,  m6.mult, m6.cost, m6.scaling, m6.count,  m7.mult, m7.cost, m7.scaling, m7.count,  m8.mult, m8.cost, m8.scaling, m8.count,  tickspeedcost, tickspeedscaling, tickspeedmult] = (localStorage.getItem("matterdims").split(',')).map(ToDecimal);
        [dbmult, dbcount, dbscaling, dbcost, galaxyadd, galaxycount, galaxyscaling, galaxycost] = (localStorage.getItem('dimboosts').split(',')).map(ToDecimal);
        [tickspeedupgrades, dbdim] = (localStorage.getItem('nondecimal').split(',')).map(ToInteger);
        console.log(typeof(dbcost), dbcost)
        
    }
}

function dimssave(){
    localStorage.setItem("matter", matter);
    localStorage.setItem("matterdims", [m1.mult, m1.cost, m1.scaling, m1.count,  m2.mult, m2.cost, m2.scaling, m2.count,  m3.mult, m3.cost, m3.scaling, m3.count,  m4.mult, m4.cost, m4.scaling, m4.count,  m5.mult, m5.cost, m5.scaling, m5.count,  m6.mult, m6.cost, m6.scaling, m6.count,  m7.mult, m7.cost, m7.scaling, m7.count,  m8.mult, m8.cost, m8.scaling, m8.count,  tickspeedcost, tickspeedscaling, tickspeedmult]);
    localStorage.setItem('nondecimal', [tickspeedupgrades, dbdim]);
    localStorage.setItem('dimboosts', [dbmult, dbcount, dbscaling, dbcost, galaxyadd, galaxycount, galaxyscaling, galaxycost]);
}