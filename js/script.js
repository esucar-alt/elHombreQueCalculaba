// =========================================================
// 1. NAVEGACIÓN Y CAMBIO DE SECCIONES
// =========================================================
function cambiarSeccionPrincipal() {
    var seleccion = document.getElementById("selectorSeccion").value;

    // Ocultar todas las secciones
    document.getElementById("seccionCap3").style.display = "none";
    document.getElementById("seccionCap8").style.display = "none";
    document.getElementById("secProblema12").style.display = "none";
    document.getElementById("secProblema13").style.display = "none";

    // Mostrar la sección correspondiente
    if (seleccion === "cap3") {
        document.getElementById("seccionCap3").style.display = "block";
    } else if (seleccion === "cap8") {
        document.getElementById("seccionCap8").style.display = "block";
    } else if (seleccion === "p12") {
        document.getElementById("secProblema12").style.display = "block";
    } else if (seleccion === "p13") {
        document.getElementById("secProblema13").style.display = "block";
    }
}

// Compatibilidad por si se invocan los métodos antiguos
function cambiarEjercicio() { cambiarSeccionPrincipal(); }
function cambiarProblema() { cambiarSeccionPrincipal(); }


// =========================================================
// 2. LÓGICA DEL CAPÍTULO 3: LOS 35 CAMELLOS
// =========================================================
function calcularCapitulo3() {
    var iniciales = parseInt(document.getElementById("camellosIniciales").value);
    var d1 = parseInt(document.getElementById("divisor1").value);
    var d2 = parseInt(document.getElementById("divisor2").value);
    var d3 = parseInt(document.getElementById("divisor3").value);

    if (isNaN(iniciales) || isNaN(d1) || isNaN(d2) || isNaN(d3) || iniciales <= 0) {
        document.getElementById("resCap3").innerHTML = "<p style='color:red;'>Por favor, ingresa números válidos mayores a cero.</p>";
        return;
    }

    var totalTemporal = iniciales + 1;

    var h1 = Math.floor(totalTemporal / d1);
    var h2 = Math.floor(totalTemporal / d2);
    var h3 = Math.floor(totalTemporal / d3);

    var sumaRepartida = h1 + h2 + h3;
    var sobrantes = totalTemporal - sumaRepartida;

    var html = "";
    html += "<div class='resultado-linea'><strong>Camellos iniciales:</strong> " + iniciales + "</div>";
    html += "<div class='resultado-linea'><strong>Camello prestado por Beremiz:</strong> +1 (Total ajustado = " + totalTemporal + ")</div>";
    html += "<div class='resultado-linea'><strong>Hermano 1 (1/" + d1 + "):</strong> Recibe <span class='destacado'>" + h1 + "</span> camellos</div>";
    html += "<div class='resultado-linea'><strong>Hermano 2 (1/" + d2 + "):</strong> Recibe <span class='destacado'>" + h2 + "</span> camellos</div>";
    html += "<div class='resultado-linea'><strong>Hermano 3 (1/" + d3 + "):</strong> Recibe <span class='destacado'>" + h3 + "</span> camellos</div>";
    html += "<div class='resultado-linea'><strong>Suma asignada:</strong> " + h1 + " + " + h2 + " + " + h3 + " = <span class='destacado'>" + sumaRepartida + "</span> camellos</div>";

    html += "<div class='conclusion'>";
    html += "<strong>¡Resolución de Beremiz!</strong><br>";
    html += "Quedan <span class='destacado'>" + sobrantes + "</span> camellos disponibles:<br>";
    html += "• 1 camello es devuelto a Beremiz (el prestado).<br>";
    html += "• " + (sobrantes - 1) + " camello sobrante le queda a Beremiz como recompensa por su ingenio.";
    html += "</div>";

    document.getElementById("resCap3").innerHTML = html;
}


// =========================================================
// 3. LÓGICA DEL CAPÍTULO 8: EL PAGO JUSTO DE LOS 8 PANES
// =========================================================
function calcularCapitulo8() {
    var pA = parseInt(document.getElementById("panesA").value);
    var pB = parseInt(document.getElementById("panesB").value);
    var monedas = parseInt(document.getElementById("monedasTotal").value);

    if (isNaN(pA) || isNaN(pB) || isNaN(monedas) || pA <= 0 || pB <= 0 || monedas <= 0) {
        document.getElementById("resCap8").innerHTML = "<p style='color:red;'>Por favor, ingresa datos válidos para los panes y monedas.</p>";
        return;
    }

    var porcionesA = pA * 3;
    var porcionesB = pB * 3;
    var totalPorciones = porcionesA + porcionesB;

    var porcionesPorPersona = totalPorciones / 3;

    var entregadoA = porcionesA - porcionesPorPersona;
    var entregadoB = porcionesB - porcionesPorPersona;

    var totalEntregadoAlExtrano = entregadoA + entregadoB;

    var monedasA = Math.round((entregadoA / totalEntregadoAlExtrano) * monedas);
    var monedasB = Math.round((entregadoB / totalEntregadoAlExtrano) * monedas);

    var html = "";
    html += "<div class='resultado-linea'><strong>Panes totales:</strong> " + pA + " + " + pB + " = " + (pA + pB) + " panes.</div>";
    html += "<div class='resultado-linea'><strong>Total porciones (cada pan en 3 partes):</strong> " + totalPorciones + " porciones.</div>";
    html += "<div class='resultado-linea'><strong>Consumo por persona (3 comedores):</strong> " + totalPorciones + " / 3 = " + porcionesPorPersona.toFixed(1) + " porciones cada uno.</div>";
    html += "<hr>";
    html += "<div class='resultado-linea'><strong>Viajero A aportó:</strong> " + porcionesA + " porciones. Se comió " + porcionesPorPersona.toFixed(1) + ". Entregó al extraño = <span class='destacado'>" + entregadoA.toFixed(1) + " porciones</span>.</div>";
    html += "<div class='resultado-linea'><strong>Viajero B aportó:</strong> " + porcionesB + " porciones. Se comió " + porcionesPorPersona.toFixed(1) + ". Entregó al extraño = <span class='destacado'>" + entregadoB.toFixed(1) + " porciones</span>.</div>";

    html += "<div class='conclusion'>";
    html += "<strong>¡Reparto Justo de Monedas!</strong><br>";
    html += "• <strong>Viajero A:</strong> Recibe <span class='destacado'>" + monedasA + " monedas</span> de oro.<br>";
    html += "• <strong>Viajero B:</strong> Recibe <span class='destacado'>" + monedasB + " monedas</span> de oro.<br><br>";
    html += "<em>Explicación:</em> Aunque el Viajero B aportó 3 panes, él mismo se comió casi todo su aporte (" + porcionesPorPersona.toFixed(1) + " porciones), entregando solo " + entregadoB.toFixed(1) + " porción al visitante.";
    html += "</div>";

    document.getElementById("resCap8").innerHTML = html;
}


// =========================================================
// 4. LÓGICA DEL PROBLEMA 12: RAÍCES CUADRÁTICAS (quadroots)
// =========================================================
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

    var D = (b * b) - (4 * a * c);
    var html = "";

    html += "<div class='linea-resultado'>Ecuación: <b>(" + a + ")x² + (" + b + ")x + (" + c + ") = 0</b></div>";
    html += "<div class='linea-resultado'>Discriminante (D): <b>" + D.toFixed(4) + "</b></div>";
    html += "<hr style='border: 0; border-top: 1px solid #bcccdc;'>";

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

    } else {
        html += "<div class='mensaje-oficial'>The equation has no real roots.</div>";
    }

    document.getElementById("resProblema12").innerHTML = html;
}


// =========================================================
// 5. LÓGICA DEL PROBLEMA 13: ESTIMACIÓN DE PI POR BUCLE
// =========================================================
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

    // Bucle según la fórmula del problema 13: pi = sqrt(6 * sum(1 / n^2))
    var suma = 0;
    for (var i = 1; i <= n; i++) {
        suma += 1 / (i * i);
    }

    var piAproximado = Math.sqrt(6 * suma);
    var piReal = Math.PI;
    var errorAbsoluto = Math.abs(piReal - piAproximado);

    // Formato de alta precisión (format long equivalencia)
    var html = "";
    html += "<div class='linea-resultado'>Iteraciones (n): <b>" + n.toLocaleString() + "</b></div>";
    html += "<div class='linea-resultado'>π estimado: &nbsp;&nbsp;<b>" + piAproximado.toFixed(15) + "</b></div>";
    html += "<div class='linea-resultado'>π real (Math.PI): <b>" + piReal.toFixed(15) + "</b></div>";
    html += "<div class='linea-resultado'>Diferencia/Error: <b>" + errorAbsoluto.toExponential(6) + "</b></div>";

    document.getElementById("resProblema13").innerHTML = html;
}


// =========================================================
// 6. INICIALIZACIÓN AL CARGAR LA PÁGINA
// =========================================================
window.onload = function () {
    calcularCapitulo3();
    calcularCapitulo8();
    resolverCuadratica();
    estimarPi();
};