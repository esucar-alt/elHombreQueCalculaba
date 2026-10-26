// ---------------------------------------------------------
// 1. FUNCIÓN PARA CAMBIAR ENTRE EJERCICIOS (MOSTRAR / OCULTAR)
// ---------------------------------------------------------
function cambiarEjercicio() {
    // Obtener la opción seleccionada en el <select>
    var seleccion = document.getElementById("selectorEjercicio").value;

    // Obtener las secciones HTML por su ID
    var sec3 = document.getElementById("seccionCap3");
    var sec8 = document.getElementById("seccionCap8");

    // Ocultar o mostrar según la elección
    if (seleccion === "cap3") {
        sec3.style.display = "block";
        sec8.style.display = "none";
    } else if (seleccion === "cap8") {
        sec3.style.display = "none";
        sec8.style.display = "block";
    }
}

// ---------------------------------------------------------
// 2. LÓGICA DEL CAPÍTULO 3 (LOS CAMELLOS)
// ---------------------------------------------------------
function calcularCapitulo3() {
    // Leer datos del formulario
    var iniciales = parseInt(document.getElementById("camellosIniciales").value);
    var d1 = parseInt(document.getElementById("divisor1").value);
    var d2 = parseInt(document.getElementById("divisor2").value);
    var d3 = parseInt(document.getElementById("divisor3").value);

    // Validar que los campos sean válidos
    if (isNaN(iniciales) || isNaN(d1) || isNaN(d2) || isNaN(d3) || iniciales <= 0) {
        document.getElementById("resCap3").innerHTML = "<p style='color:red;'>Por favor, ingresa números válidos mayores a cero.</p>";
        return;
    }

    // Aplicar la lógica de Beremiz: Añadir 1 camello prestado
    var totalTemporal = iniciales + 1;

    // Calcular asignaciones usando divisiones enteras (Math.floor)
    var h1 = Math.floor(totalTemporal / d1);
    var h2 = Math.floor(totalTemporal / d2);
    var h3 = Math.floor(totalTemporal / d3);

    // Suma total repartida entre los 3 hermanos
    var sumaRepartida = h1 + h2 + h3;
    var sobrantes = totalTemporal - sumaRepartida;

    // Construir resultado HTML
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

    // Escribir resultado en el DOM
    document.getElementById("resCap3").innerHTML = html;
}

// ---------------------------------------------------------
// 3. LÓGICA DEL CAPÍTULO 8 (LOS 8 PANES)
// ---------------------------------------------------------
function calcularCapitulo8() {
    // Leer datos del formulario
    var pA = parseInt(document.getElementById("panesA").value);
    var pB = parseInt(document.getElementById("panesB").value);
    var monedas = parseInt(document.getElementById("monedasTotal").value);

    // Validar entradas
    if (isNaN(pA) || isNaN(pB) || isNaN(monedas) || pA <= 0 || pB <= 0 || monedas <= 0) {
        document.getElementById("resCap8").innerHTML = "<p style='color:red;'>Por favor, ingresa datos válidos para los panes y monedas.</p>";
        return;
    }

    // Lógica de porciones:
    // Cada pan se divide en 3 porciones (para que 3 personas puedan comer exacto).
    var porcionesA = pA * 3;
    var porcionesB = pB * 3;
    var totalPorciones = porcionesA + porcionesB;

    // Hay 3 personas comiendo (Viajero A, Viajero B, y el Jeque)
    var porcionesPorPersona = totalPorciones / 3;

    // Calcular cuánto dio realmente cada viajero al Jeque extra:
    var entregadoA = porcionesA - porcionesPorPersona;
    var entregadoB = porcionesB - porcionesPorPersona;

    var totalEntregadoAlExtrano = entregadoA + entregadoB;

    // Calcular monedas proporcionales a las porciones donadas al extraño
    var monedasA = Math.round((entregadoA / totalEntregadoAlExtrano) * monedas);
    var monedasB = Math.round((entregadoB / totalEntregadoAlExtrano) * monedas);

    // Construir resultado HTML
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

    // Escribir resultado en el DOM
    document.getElementById("resCap8").innerHTML = html;
}

// ---------------------------------------------------------
// 4. INICIALIZACIÓN AL CARGAR LA PÁGINA
// ---------------------------------------------------------
window.onload = function () {
    // Calcular ambos por primera vez para tener datos iniciales listos
    calcularCapitulo3();
    calcularCapitulo8();
};