
    var head = document.getElementsByTagName('head')[0];
    document.write('<script src="myscript.js" type="text/javascript"></script>');

function DimBoostReset(dbdim = 4){
    console.log('started')
    matter = new Decimal("1");
    var m1mult = new Decimal("0.5");
    var m1cost = new Decimal("1");
    var m1scaling = new Decimal("1000");
    var m2count = new Decimal("0");
    var m2mult = new Decimal("0.5");
    var m2cost = new Decimal("10");
    var m2scaling = new Decimal("10000");
    var m3count = new Decimal("0");
    var m3mult = new Decimal("0.5");
    var m3cost = new Decimal("100");
    var m3scaling = new Decimal("100000");
    var m4count = new Decimal('0');
    var m4mult = new Decimal("0.5");
    var m4cost = new Decimal('1e+5');
    var m4scaling = new Decimal('1000000');
    var m5mult = new Decimal("0.5");
    var m5cost = new Decimal('1e+11');
    var m5scaling = new Decimal('1e+9');
    var m5count = new Decimal('0');
    var m6mult = new Decimal("0.5");
    var m6cost = new Decimal('1e+17');
    var m6scaling = new Decimal('1e+11');
    var m6count = new Decimal('0');
    var m7mult = new Decimal("0.5");
    var m7cost = new Decimal('1e+26');
    var m7scaling = new Decimal('1e+13');
    var m7count = new Decimal('0');
    var m8mult = new Decimal("0.5");
    var m8cost = new Decimal('1e+38');
    var m8scaling = new Decimal('1e+16');
    var m8count = new Decimal('0');

    tickspeedmult = new Decimal(1.1);
    tickspeedupgrades = 0;
    tickspeedscaling = new Decimal(10);
    tickspeedcost = new Decimal(100);

    m1 = new MatterDim(m1mult, m1cost, m1scaling, zerbo);
    m2 = new MatterDim(m2mult, m2cost, m2scaling, zerbo);
    m3 = new MatterDim(m3mult, m3cost, m3scaling, zerbo);
    m4 = new MatterDim(m4mult, m4cost, m4scaling, zerbo);
    m5 = new MatterDim(m5mult, m5cost, m5scaling, zerbo);
    m6 = new MatterDim(m6mult, m6cost, m6scaling, zerbo);
    m7 = new MatterDim(m7mult, m7cost, m7scaling, zerbo);
    m8 = new MatterDim(m8mult, m8cost, m8scaling, zerbo);
    console.log('done');
}