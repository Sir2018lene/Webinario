// Base de datos unificada sin duplicaciones
const modalData = {
    info1: {
        btn1: {
            title: "Modelo de Mitchel Resnick",
            image: "img/img-resnick.png",
            texto1: "La Espiral del Pensamiento Creativo de Mitchel Resnick es un modelo de aprendizaje activo que se basa en experiencias lúdicas y creativas. Este proceso es continuo y se desarrolla a través de los siguientes pasos principales:",
            texto2: "Esta espiral favorece el desarrollo de la creatividad, la expresión, la resolución de problemas y el pensamiento crítico, permitiendo que el aprendizaje artístico sea significativo y centrado en el proceso de exploración y descubrimiento.",
            vinetas: [
                { titulo: "Imaginar", desc: "El proceso inicia cuando las personas estudiantes imaginan ideas iniciales para sus proyectos." },
                { titulo: "Crear", desc: "Las ideas se materializan al crear producciones, como obras artísticas." },
                { titulo: "Jugar", desc: "Los estudiantes juegan y experimentan con diversos materiales, explorando nuevas posibilidades." },
                { titulo: "Compartir", desc: "En este momento, se procede a compartir las creaciones realizadas con los demás." },
                { titulo: "Reflexionar", desc: "Finalmente, se realiza un proceso de reflexión sobre lo aprendido durante toda la experiencia" }
            ],
            audio: { nombre: "Audio Guía: Fundamentos Curriculares", url: "audios/modelo/podcast-fundamentos.mp3" },
            pdf: { nombre: "Documento Completo de Fundamentos", url: "txt/fundamentos-programa.pdf" }
        },
        btn2: {
            title: "Modelo de Parsons",
            image: "img/img-Parson.png",
            texto1: "Orientación metodológica utilizada en la educación artística, especialmente en Artes Plásticas, busca fortalecer el aprendizaje estético de las personas estudiantes. Michael Parsons desarrolló una propuesta centrada en la experiencia estética, es decir, en la manera en que las personas observan, interpretan, sienten y valoran las obras de arte.",
            texto2: "De esta manera el arte se convierte en un espacio para desarrollar pensamiento crítico, sensibilidad estética, creatividad y construcción de significado.",
            vinetas: [
                { titulo: "Favoritismo", desc: "Las niñas y los niños valoran una obra según lo que más les gusta visualmente." },
                { titulo: "Belleza y realismo", desc: "La valoración se centra en qué tan 'bonita' o 'real' parece la obra." },
                { titulo: "Expresividad", desc: "Las personas estudiantes comienzan a identificar emociones, sentimientos e intenciones." },
                { titulo: "Estilo y forma", desc: "Se reconoce que existen distintas maneras de hacer arte. Se analizan técnicas y materiales." },
                { titulo: "Juicio crítico", desc: "La persona logra argumentar considerando contexto, intención y significado." },
                { titulo: "Fase integradora", desc: "Integra todas las fases anteriores desde múltiples perspectivas." }
            ],
            audio: { nombre: "Audio Guía: Estrategias Metodológicas", url: "audios/modelo/podcast-metodologias.mp3" },
            pdf: { nombre: "Manual de Estrategias Didácticas PDF", url: "txt/manual-metodologias.pdf" }
        }
    },
    // DATOS CORREGIDOS Y OPERATIVOS PARA INFO2
    info2_doc1: {
        title: "Visualización: Planeamiento Artes Plásticas",
        pdfUrl: "txt/PLANEAMIENTO ARTES PLÁSTICAS 2026_IITRIMESTRE.pdf",
        text: "Documento técnico institucional correspondiente al Segundo Trimestre del periodo lectivo 2026."
    },
    info2_doc2: {
        title: "Visualización: Plantilla de Planeamiento Correlacionado",
        pdfUrl: "txt/Planeamiento_Correlacionado_AP.pdf",
        text: "Matriz pedagógica de correlación de contenidos curriculares del programa."
    },
    // SECCIONES GENERALES CON LISTADOS DE AUDIOS Y DOCUMENTOS
    info3: {
        title: "El componente de Proyecto en la clase de Artes Plásticas",
        text: "El componente Proyecto en la asignatura de Artes Plásticas para I y II Ciclo.",
        image: "img/componente-proyecto.png",
     
        pdfs: [
            { nombre: "Orientaciones para el desarrollo y evaluación del componente Proyecto", url: "txt/El proyecto I y II Ciclos Versión Diagramado.pdf" }
        ]
    },
   // DATOS PARA INFO4
    info4_doc1: {
        title: "Visualización: Planeamiento Correlacionado de Artes Plásticas",
        pdfUrl: "txt/Planeamiento Correlacionado AP.pdf",
        text: "Documento técnico institucional correspondiente al Segundo Trimestre del periodo lectivo 2026."
    },
    info4_doc2: {
        title: "Visualización: Orientaciones para escuelas unidocentes. ",
        pdfUrl: "txt/Orientaciones Unidocentes AP.pdf",
        text: "Matriz pedagógica de correlación de contenidos curriculares del programa."
    }, 

     info4_doc3: {
        title: "Visualización: Cartel de alcance y secuencia para escuelas unidocentes",
        pdfUrl: "txt/CARTEL DE ALCANCE Y SECUENCIA ARTES PLASTICAS (2).pdf",
        text: "Matriz pedagógica de correlación de contenidos curriculares del programa."
    },

    info5: {
        title: "Flexibilidad Curricular",
        text: "Estrategias de flexibilización y apoyo didáctico complementario.",
        image: "img/museo.png",
        audios: [
            { nombre: "Criterios de Flexibilidad", url: "audios/cultural/audio1.mp3" }
        ],
        pdfs: [
            { nombre: "Estrategias de Aula.pdf", url: "txt/plan-cultural.pdf" }
        ]
    },
    info6: {
        title: "Buenas prácticas docentes",
        text: "Recopilación de experiencias pedagógicas memorables compartidas por los docentes.",
        image: "img/alegria.png",
        audios: [
            { nombre: "Socialización de Experiencias", url: "audios/practicas/audio1.mp3" }
        ],
        pdfs: [
            { nombre: "Memoria de Buenas Prácticas.pdf", url: "txt/buenas-practicas.pdf" }
        ]
    }
};




// ==========================================================================
// FUNCIÓN PRINCIPAL DE APERTURA Y CONTROL DE MODALES (openModal)
// ==========================================================================
function openModal(id, tipo) {
    const modal = document.getElementById('customModal');
    const body = document.getElementById('modal-body');

    // CASO ESPECIAL: Vista ampliada de imágenes de la galería (info6) al 60% de la pantalla
    if (tipo === 'visualizar_imagen') {
        body.innerHTML = `
            <h2 style="color: #01263f; margin-top: 0; text-align: center;">Vista Ampliada</h2>
            <div style="text-align: center; width: 100%; display: flex; justify-content: center; align-items: center;">
                <img src="${id}" alt="Imagen Ampliada" style="width: 60vw; max-height: 60vh; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
            </div>
        `;
        modal.style.display = 'flex';
        return; // Interrumpe la ejecución para evitar leer la base de datos común
    }

    let data;
    let esBotonInfo1 = false;

    // Control de ruteo inteligente de datos según el ID de origen
    if (id.startsWith('info1-')) {
        const subClave = id.split('-')[1]; // Extrae 'btn1' o 'btn2'
        data = modalData['info1'][subClave];
        esBotonInfo1 = true;
    } else {
        data = modalData[id];
    }

    if (!data) return;

    let contenidoHTML = '';

    // RENDERIZADO EXCLUSIVO PREMIUM PARA LOS BOTONES INTERNOS DE INFO1
    if (esBotonInfo1) {
        contenidoHTML += `<p style="text-align: left; color: #333; font-size: 1rem; line-height: 1.5; margin-bottom: 20px;">${data.texto1}</p>`;
        contenidoHTML += `<ul style="text-align: left; list-style-type: disc; padding-left: 20px; margin-bottom: 25px;">`;
        data.vinetas.forEach((vineta) => {
            contenidoHTML += `
                <li style="margin-bottom: 12px;">
                    <h4 style="margin: 0 0 4px 0; color: #01263f;">${vineta.titulo}</h4>
                    <p style="margin: 0; color: #555; font-size: 0.95rem;">${vineta.desc}</p>
                </li>`;
        });
        contenidoHTML += `</ul>`;
        contenidoHTML += `<p style="text-align: left; color: #666; font-style: italic; margin-bottom: 25px; border-left: 4px solid #fcda6fff; padding-left: 10px;">${data.texto2}</p>`;
        contenidoHTML += `
            <hr style="border: 1px solid #eee; margin: 20px 0;">
            <div style="display: flex; flex-direction: column; gap: 15px; background: #f8f9fa; padding: 20px; border-radius: 10px; border-left: 5px solid #0496ff;">
                <div class="audio-item" style="border: none; padding: 0; background: transparent; margin: 0;">
                    <div class="audio-info" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <label style="font-weight: bold; color: #01263f;">${data.audio.nombre}</label>
                        <a href="${data.audio.url}" download="${data.audio.nombre}.mp3" class="download-link" style="background-color: #01263f; padding: 5px 12px; font-size: 0.8rem; border-radius: 4px; text-decoration: none; color: white;">Descargar Audio</a>
                    </div>
                    <audio controls src="${data.audio.url}" style="width: 100%;"></audio>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding-top: 15px; border-top: 1px dashed #ccc;">
                    <span style="font-weight: bold; color: #01263f; font-size: 0.95rem;">${data.pdf.nombre}</span>
                    <a href="${data.pdf.url}" class="download-link" download target="_blank" style="background-color: #27ae60; padding: 8px 15px; font-size: 0.85rem; border-radius: 5px; text-decoration: none; color: white; font-weight: bold;">Descargar PDF</a>
                </div>
            </div>`;

        body.innerHTML = `
            <h2 style="color: #01263f; margin-top: 0; text-align: center;">${data.title}</h2>
            <div style="text-align: center; margin: 20px 0;">
                <img src="${data.image}" class="modal-img" alt="Miniatura de la sección" style="display: inline-block; max-width: 90%; height: auto; border-radius: 10px;">
            </div>
            <hr style="border: 1px solid #fcda6fff; margin: 20px 0;">
            ${contenidoHTML}
        `;

    } else {
        // RENDERIZADO ESTÁNDAR PARA COMPONENTES DE LISTADOS (AUDIOS / TRANCRIPCIONES)
        if (tipo === 'audios' && data.audios) {
            contenidoHTML = `<h3>Lista de Reproducción</h3><div class="audio-list-modal">`;
            data.audios.forEach((audio) => {
                contenidoHTML += `
                    <div class="audio-item">
                        <div class="audio-info">
                            <label>${audio.nombre}</label>
                            <a href="${audio.url}" download="${audio.nombre}.mp3" class="download-audio-btn" style="background-color:#01263f; color:white; padding: 2px 8px; font-size:0.8rem; text-decoration:none; border-radius:4px;">Descargar</a>
                        </div>
                        <audio controls src="${audio.url}"></audio>
                    </div>`;
            });
            contenidoHTML += `</div>`;
        } 
        else if (tipo === 'pdfs' && data.pdfs) {
            contenidoHTML = `<h3>Documentos descargables</h3><div class="pdf-list-modal">`;
            data.pdfs.forEach((doc) => {
                contenidoHTML += `
                    <div class="pdf-item">
                        <span>${doc.nombre}</span>
                        <a href="${doc.url}" class="download-link" download target="_blank">Descargar PDF</a>
                    </div>`;
            });
            contenidoHTML += `</div>`;
        }

        // INYECTOR DE ELEMENTO MULTIMEDIA PRINCIPAL (Imagen estática o Visor Iframe PDF)
        let elementoMultimediaHTML = '';
        if (tipo === 'visualizar_pdf') {
            elementoMultimediaHTML = `
                <div style="text-align: center; margin: 15px 0; width: 100%;">
                    <iframe src="${data.pdfUrl}" style="width: 100%; height: 48vh; border: 1px solid #ccc; border-radius: 8px;" frameborder="0"></iframe>
                    <div style="margin-top: 12px;">
                        <a href="${data.pdfUrl}" target="_blank" class="action-btn" style="display: inline-block; text-decoration: none; padding: 8px 20px; font-size: 0.9rem; background-color: #27ae60; color: white; border-radius: 5px; font-weight: bold;">Abrir PDF en ventana completa</a>
                    </div>
                </div>`;
        } else {
            elementoMultimediaHTML = `
                <div style="text-align: center;"><img src="${data.image}" class="modal-img" alt="Miniatura"></div>`;
        }

        let separadorOpcional = contenidoHTML !== '' ? `<hr style="border: 1px solid #fcda6fff; margin: 20px 0;">` : '';

        body.innerHTML = `
            <h2 style="color: #01263f; margin-top: 0; text-align: center;">${data.title}</h2>
            ${elementoMultimediaHTML}
            <p style="margin-top: 15px; color: #555;">${data.text}</p>
            ${separadorOpcional}
            ${contenidoHTML}
        `;
    }

    modal.style.display = 'flex';
}

// ==========================================================================
// FUNCIÓN DE CIERRE SEGURO Y LIMPIEZA MULTIMEDIA (closeModal)
// ==========================================================================
function closeModal() {
    const modal = document.getElementById('customModal');
    modal.style.display = 'none';
    
    // Pausar y resetear pistas de audio activas dentro del modal
    const audios = modal.querySelectorAll('audio');
    audios.forEach(a => { a.pause(); a.currentTime = 0; });

    // Pausar y resetear pistas de video activas si las hubiera
    const videos = modal.querySelectorAll('video');
    videos.forEach(v => { v.pause(); v.currentTime = 0; });
}

// ==========================================================================
// CONTROL INTERACTIVO DE PESTAÑAS PRINCIPALES (showInfo)
// ==========================================================================
function showInfo(event, id) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('show'));
    
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(id).classList.add('show');
    event.currentTarget.classList.add('active');
}

// ==========================================================================
// EVENTOS ADICIONALES DE CIERRE PERIMETRAL
// ==========================================================================
window.onclick = function(event) {
    const modal = document.getElementById('customModal');
    if (event.target == modal) {
        closeModal();
    }
};