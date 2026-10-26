// ---------------------------------------------------------
// 1. CAMBIAR ENTRE PROBLEMAS (OCULTAR / MOSTRAR SECCIONES)
// ---------------------------------------------------------
function cambiarProblema() {
    var opcion = document.getElementById("selectProblema").value;
    var p12 = document.getElementById("secProblema12");
    var p13 = document.getElementById("secProblema13");

    if (opcion === "p12") {
        p12.style.display = "block";
        p13.style.display = "none";
    } else {
        p12.style.display = "none";
        p13.style.display = "block";
    }
}

// ---------------------------------------------------------
// 2. LÓGICA DEL PROBLEMA 12 (QUADROOTS)
// ---------------------------------------------------------
function cargarEjemplo12(a, b, c) {
    document.getElementById("coefA").value = a;
    document.getElementById("coefB").value = b;
    document.getElementById("coefC").value = c;
    resolverCuadratica();
}

function resolverCuadratica() {
    var a = parseFloat(document.getElementById("coefA").value);
    var b = parseFloat(document.getElementById("coefB").value);
    var c = parseFloat(document.getElementById("coefC").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("resProblema12").innerHTML = "<p style='color:red;'>Por favor ingresa coeficientes válidos.</p>";
        return;
    }

    if (a === 0) {
        document.getElementById("resProblema12").innerHTML = "<p style='color:red;'>El coeficiente 'a' no puede ser 0 en una ecuación cuadrática.</p>";
        return;
    }

    // Cálculo del Discriminante: D = b^2 - 4ac
    var D = (b * b) - (4 * a * c);
    var html = "";

    html += "<div class='linea-resultado'>Ecuación: <b>(" + a + ")x² + (" + b + ")x + (" + c + ") = 0</b></div>";
    html += "<div class='linea-resultado'>Discriminante (D): <b>" + D.toFixed(4) + "</b></div>";
    html += "<hr style='border: 0; border-top: 1px solid #bcccdc;'>";

    // Casos según el valor de D
    if (D > 0) {
        var x1 = (-b + Math.sqrt(D)) / (2 * a);
        var x2 = (-b - Math.sqrt(D)) / (2 * a);

        html += "<div class='mensaje-oficial'>The equation has two roots</div>";
        html += "<div class='linea-resultado'>x1 = " + x1.toFixed(4) + "</div>";
        html += "<div class='linea-resultado'>x2 = " + x2.toFixed(4) + "</div>";

    } else if (D === 0) {
        var x = -b / (2 * a);

        html += "<div class='mensaje-oficial'>The equation has one root</div>";
        html += "<div class='linea-resultado'>x = " + x.toFixed(4) + "</div>";

    } else { // D < 0
        html += "<div class='mensaje-oficial'>The equation has no real roots.</div>";
    }

    document.getElementById("resProblema12").innerHTML = html;
}

// ---------------------------------------------------------
// 3. LÓGICA DEL PROBLEMA 13 (ESTIMACIÓN DE PI CON BUCLE)
// ---------------------------------------------------------
function cargarN13(n) {
    document.getElementById("valN").value = n;
    estimarPi();
}

function estimarPi() {
    var n = parseInt(document.getElementById("valN").value);

    if (isNaN(n) || n <= 0) {
        document.getElementById("resProblema13").innerHTML = "<p style='color:red;'>Por favor ingresa un valor de n válido mayor a 0.</p>";
        return;
    }

    // Bucle para calcular la serie: pi/4 = 1 - 1/3 + 1/5 - 1/7 + 1/9 ...
    var suma = 0;
    for (var k = 0; k < n; k++) {
        if (k % 2 === 0) {
            suma += 1 / (2 * k + 1);
        } else {
            suma -= 1 / (2 * k + 1);
        }
    }

    var piAproximado = suma * 4;
    var piReal = Math.PI;
    var errorAbsoluto = Math.abs(piReal - piAproximado);

    // Simulación de "format long" (15 decimales de precisión)
    var html = "";
    html += "<div class='linea-resultado'>Iteraciones (n): <b>" + n.toLocaleString() + "</b></div>";
    html += "<div class='linea-resultado'>π estimado: &nbsp;&nbsp;<b>" + piAproximado.toFixed(15) + "</b></div>";
    html += "<div class='linea-resultado'>π real (Math.PI): <b>" + piReal.toFixed(15) + "</b></div>";
    html += "<div class='linea-resultado'>Diferencia/Error: <b>" + errorAbsoluto.toExponential(6) + "</b></div>";

    document.getElementById("resProblema13").innerHTML = html;
}

// Ejecutar los dos cálculos al cargar la página
window.onload = function () {
    resolverCuadratica();
    estimarPi();
};