// Flamenco Academy — Complete Course Inventory
// Each course includes: curriculum (5 lessons), bundledIn (bundle ID that contains this course),
// and available (controls whether the course is visible in the catalog).

const inventory = [

  // ─── PAYO — NIVEL 1 ───────────────────────────────────────────────────────

  {
    id: "0",
    type: "individual",
    title: "Introducción a los Tangos",
    price: "24,99 €",
    level: "Payo",
    levelSlug: "payo",
    category: "Curso • Core Nivel 1",
    desc: "Domina el compás de 12 tiempos y los acentos fundamentales de los Tangos flamencos. Aprende las falsetas tradicionales esenciales y el ritmo de acompañamiento para empezar a sonar con duende.",
    bundledIn: "11",   // Included in "Deja de ser Payo: El Pack"
    curriculum: [
      { title: "El compás de los Tangos: Acentos y estructura base", duration: "10:45" },
      { title: "Postura de la mano y marcaje de pulgar", duration: "12:15" },
      { title: "Tu primera falseta tradicional paso a paso", duration: "15:20" },
      { title: "Acompañamiento básico y transiciones entre acordes", duration: "11:05" },
      { title: "Cierres y remates por Tangos con metrónomo", duration: "13:30" }
    ],
    available: false
  },

  {
    id: "1",
    type: "individual",
    title: "Introducción a las Alegrías",
    price: "24,99 €",
    level: "Payo",
    levelSlug: "payo",
    category: "Curso • Core Nivel 1",
    desc: "Aprende el compás alegre y festivo de las Alegrías de Cádiz. Analiza la estructura tradicional, el silencio, la castellana y las falsetas clásicas con todo el aire del mar.",
    bundledIn: "11",
    curriculum: [
      { title: "El compás de las Alegrías de Cádiz: Origen y acentuación", duration: "09:50" },
      { title: "El silencio flamenco y la castellana explicados", duration: "13:40" },
      { title: "Rasgueos suaves y dinámicas propias del palo", duration: "11:15" },
      { title: "Falseta introductoria con aire de salina", duration: "16:25" },
      { title: "Final por Bulerías de Cádiz (Juguetillos)", duration: "12:05" }
    ],
    available: false
  },

  {
    id: "2",
    type: "individual",
    title: "Introducción a la Soleá",
    price: "24,99 €",
    level: "Payo",
    levelSlug: "payo",
    category: "Curso • Core Nivel 1",
    desc: "Adéntrate en la Soleá, considerada la madre del flamenco. Aprende a controlar el compás lento, la solemnidad del toque y las falsetas básicas para comprender la base de la guitarra.",
    bundledIn: "11",
    curriculum: [
      { title: "El compás de Soleá: Tempo, peso y solemnidad", duration: "11:30" },
      { title: "Toque de pulgar y ligado en la Soleá clásica", duration: "13:10" },
      { title: "Estructura armónica del modo frigio y tensión", duration: "10:45" },
      { title: "Estudio detallado de falseta introductoria", duration: "17:40" },
      { title: "Remate final y resolución al tono", duration: "09:55" }
    ],
    available: false
  },

  {
    id: "3",
    type: "individual",
    title: "Introducción a los Fandangos",
    price: "24,99 €",
    level: "Payo",
    levelSlug: "payo",
    category: "Curso • Core Nivel 1",
    desc: "Explora la belleza melódica y el compás de 3/4 de los Fandangos. Aprende la rueda de acordes clásica, las variaciones de pulgar y la expresividad necesaria para este palo fundamental.",
    bundledIn: "11",
    curriculum: [
      { title: "El compás ternario del Fandango: 3/4 y rueda clásica", duration: "08:45" },
      { title: "Variaciones de pulgar y arrastres iniciales", duration: "11:20" },
      { title: "Estilo y ligados suaves en la melodía principal", duration: "10:35" },
      { title: "Desarrollo de variaciones del patrón base", duration: "14:50" },
      { title: "Toque libre vs compasado al servicio del cante", duration: "12:15" }
    ],
    available: false
  },

  {
    id: "4",
    type: "individual",
    title: "Introducción a las Bulerías",
    price: "24,99 €",
    level: "Payo",
    levelSlug: "payo",
    category: "Curso • Core Nivel 1",
    desc: "Conquista el latido absoluto del flamenco. Aprende el ciclo esencial de 12 tiempos, rasgueos básicos y falsetas introductorias de alto impacto que le dan a tu guitarra ese auténtico sabor a Jerez.",
    bundledIn: "11",
    curriculum: [
      { title: "El ciclo de 12 tiempos de la Bulería: Acentuación de Jerez", duration: "12:40" },
      { title: "Rasgueos de tres y cuatro dedos sobre el compás", duration: "14:15" },
      { title: "Técnica de alzapúa y síncopas de pulgar básicas", duration: "11:55" },
      { title: "Montaje paso a paso de tu primera falseta por Bulería", duration: "18:30" },
      { title: "Cierres por Bulerías y cómo rematar con el cantaor", duration: "10:20" }
    ],
    available: false
  },

  {
    id: "5",
    type: "bundle",
    title: "5 Palos Clave del Flamenco",
    price: "89,99 €",
    level: "Payo",
    levelSlug: "payo",
    category: "Pack Temático • Nivel 1",
    desc: "El pack introductorio definitivo. Consigue acceso inmediato a los 5 palos clave del flamenco: Tangos, Alegrías, Soleá, Fandangos y Bulerías. Construye tu base rítmica y melódica.",
    bundledIn: "11",   // Even this sub-pack is included inside the master Payo pack
    curriculum: [
      { title: "Introducción a los Tangos: Compás y falseta base", duration: "10:45" },
      { title: "Introducción a las Alegrías: El silencio y la castellana", duration: "11:15" },
      { title: "Introducción a la Soleá: Peso y solemnidad del compás", duration: "11:30" },
      { title: "Introducción a los Fandangos: Rueda de acordes 3/4", duration: "08:45" },
      { title: "Introducción a las Bulerías: El ciclo de Jerez", duration: "12:40" }
    ],
    available: false
  },

  {
    id: "6",
    type: "individual",
    title: "Técnica para Principiantes: Mano Derecha",
    price: "19,99 €",
    level: "Payo",
    levelSlug: "payo",
    category: "Técnica • Nivel 1",
    desc: "Corrige vicios y tensiones desde el primer día. Este módulo de biomecánica se enfoca en la postura de la mano derecha, la colocación del pulgar y la ejecución limpia del picado y rasgueo.",
    bundledIn: "11",
    curriculum: [
      { title: "Postura correcta de la mano derecha y del cuerpo", duration: "07:30" },
      { title: "Colocación del pulgar: Ángulo y presión sin tensión", duration: "10:20" },
      { title: "Ejercicios de independencia de dedos (i, m, a)", duration: "14:45" },
      { title: "Técnica de rasgueo limpio: Tres y cuatro dedos", duration: "12:10" },
      { title: "Picado básico: Velocidad progresiva con metrónomo", duration: "13:50" }
    ],
    available: false
  },

  {
    id: "7",
    type: "individual",
    title: "Técnica para Principiantes: Mano Izquierda",
    price: "19,99 €",
    level: "Payo",
    levelSlug: "payo",
    category: "Técnica • Nivel 1",
    desc: "Desarrolla fuerza, agilidad y precisión en la mano izquierda. Ejercicios específicos para mejorar la apertura de los dedos, la claridad de las notas y las transiciones fluidas de acordes.",
    bundledIn: "11",
    curriculum: [
      { title: "Postura del pulgar izquierdo y alineación del brazo", duration: "08:15" },
      { title: "Ejercicios de apertura y fuerza de dedos progresivos", duration: "12:40" },
      { title: "Ligados básicos: Pull-off y hammer-on limpios", duration: "11:30" },
      { title: "Transiciones entre acordes sin pausa: Entrenamiento", duration: "14:05" },
      { title: "Cejillas completas: Técnica y construcción gradual", duration: "15:10" }
    ],
    available: false
  },

  {
    id: "8",
    type: "bundle",
    title: "Técnica para principiantes: Las dos manos",
    price: "29,99 €",
    level: "Payo",
    levelSlug: "payo",
    category: "Pack de Técnica • Nivel 1",
    desc: "Consigue la sincronización perfecta entre ambas manos. Combina el entrenamiento biomecánico y los ejercicios de coordinación de mano izquierda y derecha para una ejecución limpia.",
    bundledIn: "11",
    curriculum: [
      { title: "Fundamentos de la mano derecha: Postura y rasgueo", duration: "07:30" },
      { title: "Fundamentos de la mano izquierda: Fuerza y ligados", duration: "08:15" },
      { title: "Ejercicios de sincronización y coordinación cruzada", duration: "13:00" },
      { title: "Estudio combinado: Picado + cambios de posición", duration: "14:30" },
      { title: "Rutina diaria de 20 minutos para consolidar técnica", duration: "11:45" }
    ],
    available: false
  },

  {
    id: "9",
    type: "individual",
    title: "Cadencia Andaluza",
    price: "29,99 €",
    level: "Payo",
    levelSlug: "payo",
    category: "Curso Especializado • Nivel 1",
    desc: "Domina el motor armónico del flamenco. Aprende a usar el modo frigio, las sustituciones de acordes, las resoluciones clásicas y los adornos que definen el sonido tradicional andaluz.",
    bundledIn: "11",
    curriculum: [
      { title: "El modo frigio: Origen árabe y aplicación flamenca", duration: "09:20" },
      { title: "La cadencia Mi-Re-Do-Si y sus variaciones", duration: "12:45" },
      { title: "Sustituciones armónicas y adornos clásicos", duration: "11:10" },
      { title: "La cadencia como motor de la tensión dramática", duration: "14:35" },
      { title: "Aplicación práctica sobre Soleá, Seguiriya y Bulerías", duration: "16:00" }
    ],
    available: false
  },

  {
    id: "10",
    type: "individual",
    title: "Todos los Rasgueos que necesitas",
    price: "39,99 €",
    level: "Payo",
    levelSlug: "payo",
    category: "Curso Especializado • Nivel 1",
    desc: "Desarrolla un reloj interno inquebrantable. Aprende a marcar el compás, entender los contratiempos y realizar las palmas base y de acompañamiento para los principales palos flamencos.",
    bundledIn: "11",
    curriculum: [
      { title: "El compás flamenco: Diferencias con el ritmo occidental", duration: "10:00" },
      { title: "Palmas abiertas y sordas: Técnica correcta", duration: "11:30" },
      { title: "El contratiempo y el contrapunto rítmico", duration: "13:15" },
      { title: "Compás de Soleá, Bulería y Tangos con metrónomo", duration: "15:20" },
      { title: "Ejercicio de escucha activa y respuesta al cantaor", duration: "12:40" }
    ],
    available: false
  },

  {
    id: "11",
    type: "bundle",
    title: "Deja de ser Payo: El Pack",
    price: "149,99 €",
    level: "Payo",
    levelSlug: "payo",
    category: "Pack Completo • Nivel 1",
    desc: "El plan de estudios básico definitivo. Incluye las introducciones a los 5 palos fundamentales, el sistema completo de técnica para principiantes, Cadencia Andaluza y Compás y Palmas. ¡Ahorra más de 70 €!",
    bundledIn: null,   // This IS the top-level Payo bundle — not inside anything else
    curriculum: [
      { title: "Los 5 Palos: Tangos, Alegrías, Soleá, Fandangos y Bulerías", duration: "10:30" },
      { title: "Sistema de Técnica: Mano Derecha e Izquierda", duration: "09:45" },
      { title: "Cadencia Andaluza: El motor armónico del flamenco", duration: "12:00" },
      { title: "Compás y Palmas: Construye tu reloj interno", duration: "11:15" },
      { title: "Sesión práctica integrada: Juntando todos los elementos", duration: "20:00" }
    ],
    available: false
  },


  // ─── FENÓMENO — NIVEL 2 ──────────────────────────────────────────────────

  {
    id: "12",
    type: "individual",
    title: "Las Mejores Falsetas por Bulerías",
    price: "29,99 €",
    level: "Fenómeno",
    levelSlug: "fenomeno",
    category: "Falsetas • Nivel 2",
    desc: "Lleva tu toque de Bulerías al siguiente nivel. Aprende falsetas modernas y sincopadas que incorporan contratiempos, patrones rápidos de alzapúa y las melodías de pulgar más populares.",
    bundledIn: "29",
    curriculum: [
      { title: "Análisis de la falseta de Bulerías moderna sincopada", duration: "14:10" },
      { title: "Alzapúa rápida: Técnica y fragmentación por partes", duration: "16:30" },
      { title: "Melodías de pulgar con contratiempos de la mano izquierda", duration: "13:45" },
      { title: "Montaje completo de la falseta a velocidad real", duration: "18:00" },
      { title: "Variaciones y personalización del material aprendido", duration: "12:20" }
    ],
    available: false
  },

  {
    id: "13",
    type: "individual",
    title: "Las Mejores Falsetas por Malagueña",
    price: "29,99 €",
    level: "Fenómeno",
    levelSlug: "fenomeno",
    category: "Falsetas • Nivel 2",
    desc: "Siente el aire de la Malagueña. Aprende falsetas en el estilo clásico de toque libre, centrándote en la expresión dramática, el trémolo y el control del tono y volumen de la guitarra.",
    bundledIn: "29",
    curriculum: [
      { title: "La Malagueña: Toque libre y expresión sin compás", duration: "11:00" },
      { title: "Trémolo flamenco: Técnica paso a paso (p, a, m, i)", duration: "17:20" },
      { title: "Dinámica y matiz: Del pianissimo al fortissimo", duration: "12:50" },
      { title: "Falseta clásica de Malagueña con trémolo integrado", duration: "19:40" },
      { title: "El cierre dramático y la cadencia final de la Malagueña", duration: "10:30" }
    ],
    available: false
  },

  {
    id: "14",
    type: "individual",
    title: "Las Mejores Falsetas por Seguiriya",
    price: "29,99 €",
    level: "Fenómeno",
    levelSlug: "fenomeno",
    category: "Falsetas • Nivel 2",
    desc: "El palo más profundo y jondo. Domina la compleja estructura rítmica y las solemnes falsetas de la Seguiriya, combinando la tensión armónica con una gran carga emocional.",
    bundledIn: "29",
    curriculum: [
      { title: "El compás de la Seguiriya: Fusión de tiempos impares", duration: "13:15" },
      { title: "El peso y el duende en cada golpe de pulsar", duration: "11:40" },
      { title: "Tensión armónica: La cadencia en la Seguiriya", duration: "14:00" },
      { title: "Falseta oscura de Seguiriya: Montaje progresivo", duration: "20:10" },
      { title: "Cierre y remate: La resolución del dolor flamenco", duration: "09:45" }
    ],
    available: false
  },

  {
    id: "15",
    type: "individual",
    title: "Las Mejores Falsetas por Tientos-Tangos",
    price: "29,99 €",
    level: "Fenómeno",
    levelSlug: "fenomeno",
    category: "Falsetas • Nivel 2",
    desc: "Aprende a jugar con el ritmo en la transición de los Tientos (lentos y majestuosos) a los Tangos (rápidos y festivos). Falsetas ideales para dar dinamismo a tu repertorio.",
    bundledIn: "29",
    curriculum: [
      { title: "Los Tientos: Compás, carácter y diferencias con los Tangos", duration: "10:30" },
      { title: "Falseta de Tientos pausada: Majestuosidad y peso", duration: "15:20" },
      { title: "La transición Tientos-Tangos: Cómo acelerar sin perder", duration: "13:10" },
      { title: "Falseta de Tangos rápida sobre la base aprendida", duration: "16:45" },
      { title: "Montaje completo: Tientos y Tangos como suite", duration: "18:00" }
    ],
    available: false
  },

  {
    id: "16",
    type: "individual",
    title: "Las Mejores Falsetas por Soleá",
    price: "29,99 €",
    level: "Fenómeno",
    levelSlug: "fenomeno",
    category: "Falsetas • Nivel 2",
    desc: "Profundiza en la Soleá con falsetas de concierto. Aprende a combinar la tradición de la escuela clásica con las armonías modernas de la Soleá contemporánea.",
    bundledIn: "29",
    curriculum: [
      { title: "Escuela clásica de Soleá: Referentes históricos", duration: "10:00" },
      { title: "Falseta clásica de Soleá: Análisis y desglose completo", duration: "16:30" },
      { title: "Armonías contemporáneas aplicadas a la Soleá", duration: "13:45" },
      { title: "Técnica de bordón y respuesta melodía-bajo", duration: "14:20" },
      { title: "Montaje completo a velocidad de concierto", duration: "19:00" }
    ],
    available: false
  },

  {
    id: "17",
    type: "bundle",
    title: "Falsetero, falsetero",
    price: "99,99 €",
    level: "Fenómeno",
    levelSlug: "fenomeno",
    category: "Pack de Falsetas • Nivel 2",
    desc: "El arsenal definitivo de falsetas intermedias. Consigue las colecciones completas para Bulerías, Malagueña, Seguiriya, Tientos-Tangos y Soleá. Enriquece tu repertorio de concierto al instante.",
    bundledIn: "29",
    curriculum: [
      { title: "Falsetas por Bulerías: Síncopas y alzapúa rápida", duration: "16:30" },
      { title: "Falsetas por Malagueña: Trémolo y toque libre", duration: "17:20" },
      { title: "Falsetas por Seguiriya: Oscuridad y duende jondo", duration: "14:00" },
      { title: "Falsetas por Tientos-Tangos: Transición y suite", duration: "13:10" },
      { title: "Falsetas por Soleá: Clásico y contemporáneo", duration: "16:30" }
    ],
    available: false
  },

  {
    id: "18",
    type: "individual",
    title: "Técnica para Fenómenos: Mano Derecha",
    price: "24,99 €",
    level: "Fenómeno",
    levelSlug: "fenomeno",
    category: "Técnica • Nivel 2",
    desc: "Supera tus límites de velocidad. Ejercicios avanzados para picado rápido de tres dedos, trémolo flamenco continuo, arpegios complejos y rasgueos de cuatro dedos de alta velocidad.",
    bundledIn: "29",
    curriculum: [
      { title: "Picado de tres dedos: Calibración y velocidad avanzada", duration: "13:20" },
      { title: "Trémolo continuo p-a-m-i: Uniformidad y expresión", duration: "15:40" },
      { title: "Arpegios complejos: p-i-m-a y sus variaciones", duration: "12:55" },
      { title: "Rasgueo abierto-cerrado de cuatro dedos a tempo", duration: "14:10" },
      { title: "Rutina de velocidad: Método progresivo de 4 semanas", duration: "11:30" }
    ],
    available: false
  },

  {
    id: "19",
    type: "individual",
    title: "Técnica para Fenómenos: Mano Izquierda",
    price: "24,99 €",
    level: "Fenómeno",
    levelSlug: "fenomeno",
    category: "Técnica • Nivel 2",
    desc: "Desarrolla la agilidad extrema de la mano izquierda. Prácticas enfocadas en ligados rápidos (pull-offs y hammer-ons), cejillas extendidas, desplazamientos largos y estiramientos avanzados.",
    bundledIn: "29",
    curriculum: [
      { title: "Ligados rápidos: Pull-off y hammer-on explosivos", duration: "12:30" },
      { title: "Cejillas extendidas y semiparciales sin dolor", duration: "14:00" },
      { title: "Desplazamientos largos (shifting): Control de afinación", duration: "11:45" },
      { title: "Estiramientos avanzados: Preparación biomecánica", duration: "13:20" },
      { title: "Ejercicio integrado: Velocidad + Claridad + Mano relajada", duration: "15:10" }
    ],
    available: false
  },

  {
    id: "20",
    type: "bundle",
    title: "Técnica para Fenómenos: Las Dos Manos",
    price: "34,99 €",
    level: "Fenómeno",
    levelSlug: "fenomeno",
    category: "Pack de Técnica • Nivel 2",
    desc: "Calibración biomecánica para romper barreras. Sincroniza ambas manos para ejecutar pasajes picados a más de 130 BPM con total claridad, relajación y potencia de sonido.",
    bundledIn: "29",
    curriculum: [
      { title: "Mano Derecha Avanzada: Picado, trémolo y arpegios", duration: "13:20" },
      { title: "Mano Izquierda Avanzada: Ligados y desplazamientos", duration: "12:30" },
      { title: "Sincronización a velocidad real: Método por capas", duration: "16:00" },
      { title: "Estudio de fragmentos difíciles frame a frame", duration: "17:30" },
      { title: "Sesión de consolidación: Ambas manos a 130+ BPM", duration: "14:45" }
    ],
    available: false
  },

  {
    id: "21",
    type: "individual",
    title: "Acompaña al Cante: Teoría y Ejemplos",
    price: "19,99 €",
    level: "Fenómeno",
    levelSlug: "fenomeno",
    category: "Acompañamiento al Cante • Nivel 2",
    desc: "El arte de respaldar la voz. Aprende las reglas de oro de la interacción con el cantaor, cómo escuchar las respiraciones, cuándo responder con falsetas y cómo mantener la base.",
    bundledIn: "29",
    curriculum: [
      { title: "El rol del guitarrista: Acompañar no es seguir", duration: "10:00" },
      { title: "Escucha activa: Respiraciones, silencios y tercios", duration: "11:30" },
      { title: "Cómo y cuándo meter una falseta de respuesta", duration: "13:15" },
      { title: "Afinación y transposición: Cambio de tono en vivo", duration: "12:40" },
      { title: "Práctica con cante grabado: Análisis y reacción", duration: "15:00" }
    ],
    available: false
  },

  {
    id: "22",
    type: "individual",
    title: "Acompaña al Cante: Tangos",
    price: "49,99 €",
    level: "Fenómeno",
    levelSlug: "fenomeno",
    category: "Acompañamiento al Cante • Nivel 2",
    desc: "Acompañamiento práctico por Tangos. Aprende a marcar el cante, reaccionar a las diferentes letras tradicionales y usar las llamadas y cierres adecuados en cada momento.",
    bundledIn: "29",
    curriculum: [
      { title: "La letra del Tango: Estructura y tipos de coplas", duration: "10:30" },
      { title: "El marcaje y llamada de entrada al cante", duration: "12:10" },
      { title: "Falsetas de respuesta entre tercios por Tangos", duration: "14:50" },
      { title: "Cierres y remates en diferentes momentos del cante", duration: "13:30" },
      { title: "Sesión completa de acompañamiento con cante real", duration: "18:00" }
    ],
    available: false
  },

  {
    id: "23",
    type: "individual",
    title: "Acompaña al Cante: Alegrías",
    price: "49,99 €",
    level: "Fenómeno",
    levelSlug: "fenomeno",
    category: "Acompañamiento al Cante • Nivel 2",
    desc: "Domina el acompañamiento en las Alegrías. Aprende la estructura del baile y el cante: la introducción, las letras, la escobilla con el silencio y el dinámico final por Bulerías de Cádiz.",
    bundledIn: "29",
    curriculum: [
      { title: "Estructura del patrón de Alegrías de cabo a rabo", duration: "11:00" },
      { title: "La llamada de entrada y el castellana al cante", duration: "13:20" },
      { title: "El silencio flamenco: Cómo marcar y no perderse", duration: "12:05" },
      { title: "Falsetas entre los tercios del cante de Alegrías", duration: "15:40" },
      { title: "El final: Transición a Bulerías de Cádiz con el cantaor", duration: "14:10" }
    ],
    available: false
  },

  {
    id: "24",
    type: "individual",
    title: "Acompaña al Cante: Bulerías",
    price: "49,99 €",
    level: "Fenómeno",
    levelSlug: "fenomeno",
    category: "Acompañamiento al Cante • Nivel 2",
    desc: "El reto máximo de la guitarra de acompañamiento. Aprende a reaccionar en tiempo real a las improvisaciones del cantaor por Bulerías, marcando los acentos y respondiendo con decisión.",
    bundledIn: "29",
    curriculum: [
      { title: "La Bulería cantaora: Diferencias con la de concierto", duration: "10:00" },
      { title: "Acentos críticos y cómo reforzarlos con la guitarra", duration: "13:30" },
      { title: "Reacciones improvisadas: El diálogo con el cantaor", duration: "15:00" },
      { title: "Falsetas cortas de respuesta entre coplas", duration: "14:20" },
      { title: "Sesión completa de acompañamiento: Bulerías en vivo", duration: "19:00" }
    ],
    available: false
  },

  {
    id: "25",
    type: "individual",
    title: "Acompaña al Cante: Fandangos Naturales y Personales",
    price: "49,99 €",
    level: "Fenómeno",
    levelSlug: "fenomeno",
    category: "Acompañamiento al Cante • Nivel 2",
    desc: "Sigue la libre expresión del cantaor en los Fandangos Naturales. Aprende a guiar armónicamente al cantante sin un compás rígido, respondiendo a su intensidad emocional.",
    bundledIn: "29",
    curriculum: [
      { title: "Fandango Natural vs Personal: Diferencias y estilos", duration: "09:45" },
      { title: "El toque libre: Sin metrónomo, con feeling", duration: "12:20" },
      { title: "Cómo liderar la modulación al cantaor en tiempo real", duration: "14:00" },
      { title: "Falsetas personales de respuesta al estilo", duration: "16:10" },
      { title: "Práctica completa con cantaor por Fandangos Personales", duration: "17:30" }
    ],
    available: false
  },

  {
    id: "26",
    type: "individual",
    title: "Acompaña al Cante: Fandangos de Huelva y Alosneros",
    price: "49,99 €",
    level: "Fenómeno",
    levelSlug: "fenomeno",
    category: "Acompañamiento al Cante • Nivel 2",
    desc: "Acompaña el compás alegre y definido de los Fandangos de Huelva. Domina el ritmo característico de tres tiempos y las falsetas tradicionales de respuesta.",
    bundledIn: "29",
    curriculum: [
      { title: "Fandangos de Huelva: Identidad, orígenes y compás", duration: "10:15" },
      { title: "Acompañamiento compasado: Sello y marcaje propio", duration: "11:50" },
      { title: "Falseta de respuesta entre coplas huelvanas", duration: "15:30" },
      { title: "Los Alosneros: Variante y su carácter diferencial", duration: "12:40" },
      { title: "Sesión completa de acompañamiento grabado", duration: "17:00" }
    ],
    available: false
  },

  {
    id: "27",
    type: "individual",
    title: "Acompaña al Cante: Cantes de Ida y Vuelta",
    price: "49,99 €",
    level: "Fenómeno",
    levelSlug: "fenomeno",
    category: "Acompañamiento al Cante • Nivel 2",
    desc: "Explora la dulzura de la Guajira, Colombiana y Rumba. Aprende a acompañar estos cantes de influencia latinoamericana, adaptando tu rítmica a sus acentos distintivos.",
    bundledIn: "29",
    curriculum: [
      { title: "Cantes de Ida y Vuelta: Historia del intercambio atlántico", duration: "09:30" },
      { title: "La Guajira: Compás cruzado y sabor cubano", duration: "13:10" },
      { title: "La Colombiana: Suavidad y rima melódica", duration: "12:20" },
      { title: "La Rumba flamenca: Groove y percusión de cuerpo", duration: "14:50" },
      { title: "Práctica de acompañamiento con los tres cantes", duration: "16:00" }
    ],
    available: false
  },

  {
    id: "28",
    type: "bundle",
    title: "Acompaña al Cante: Más que el Cantaor",
    price: "199,99 €",
    level: "Fenómeno",
    levelSlug: "fenomeno",
    category: "Pack de Acompañamiento • Nivel 2",
    desc: "La biblioteca de acompañamiento al cante más completa del mercado. Consigue la teoría general y los 6 módulos prácticos para convertirte en el apoyo perfecto de cualquier cantaor.",
    bundledIn: "29",
    curriculum: [
      { title: "Teoría del acompañamiento: Del principio a la práctica", duration: "12:00" },
      { title: "Tangos y Alegrías: Dominio del compás festero", duration: "13:00" },
      { title: "Bulerías: La reacción improvisada al cantaor", duration: "15:00" },
      { title: "Fandangos Naturales, de Huelva y Personales", duration: "14:00" },
      { title: "Cantes de Ida y Vuelta: Guajira, Colombiana y Rumba", duration: "16:00" }
    ],
    available: false
  },

  {
    id: "29",
    type: "bundle",
    title: "Soy un Fenómeno: El Pack",
    price: "279,99 €",
    level: "Fenómeno",
    levelSlug: "fenomeno",
    category: "Pack Completo • Nivel 2",
    desc: "El pack intermedio definitivo. Todo el repertorio de falsetas de nivel fenómeno, el sistema completo de técnica avanzada y la academia completa de acompañamiento al cante.",
    bundledIn: null,
    curriculum: [
      { title: "Las 5 Falsetas de Concierto: Bulerías, Malagueña, Seguiriya, Tientos y Soleá", duration: "16:00" },
      { title: "Técnica Avanzada: Picado, Trémolo y Sincronía", duration: "15:00" },
      { title: "Acompañamiento al Cante: Todos los palos intermedios", duration: "15:00" },
      { title: "Análisis de actuación: Afinación, matiz y presencia", duration: "13:00" },
      { title: "Sesión integradora: Concierto Fenómeno completo", duration: "25:00" }
    ],
    available: false
  },


  // ─── MAESTRO — NIVEL 3 ────────────────────────────────────────────────────

  {
    id: "30",
    type: "individual",
    title: "Analiza a los Maestros: Paco de Lucía",
    price: "49,99 €",
    level: "Maestro",
    levelSlug: "maestro",
    category: "Análisis de Maestros • Nivel 3",
    desc: "Estudio exhaustivo del estilo del genio de Algeciras. Analiza los recursos técnicos, las armonías y los conceptos revolucionarios que Paco de Lucía aportó a la guitarra flamenca.",
    bundledIn: "44",
    curriculum: [
      { title: "La vida y la visión musical de Paco de Lucía", duration: "12:00" },
      { title: "Sus revoluciones técnicas: Alzapúa, picado y trémolo", duration: "16:20" },
      { title: "Armonías jazz-flamenco: Sus progresiones favoritas", duration: "14:30" },
      { title: "Análisis de 'Entre Dos Aguas' y 'La Barrosa'", duration: "22:15" },
      { title: "Cómo incorporar su vocabulario a tu toque propio", duration: "15:00" }
    ],
    available: false
  },

  {
    id: "31",
    type: "individual",
    title: "Analiza a los Maestros: Javier Arcos",
    price: "49,99 €",
    level: "Maestro",
    levelSlug: "maestro",
    category: "Análisis de Maestros • Nivel 3",
    desc: "Accede directamente al lenguaje musical de Javier Arcos. Deconstrucción detallada de sus falsetas de concierto, técnicas predilectas y trucos compositivos.",
    bundledIn: "44",
    curriculum: [
      { title: "El estilo de Javier Arcos: Pureza y modernidad", duration: "10:30" },
      { title: "Sus falsetas de concierto: Análisis de la mano derecha", duration: "17:10" },
      { title: "Recursos armónicos personales y cómo usarlos", duration: "13:40" },
      { title: "Fragmentos difíciles desglosados frame a frame", duration: "19:50" },
      { title: "La composición según Javier: Desde la idea al tema", duration: "14:20" }
    ],
    available: false
  },

  {
    id: "32",
    type: "individual",
    title: "Analiza a los Maestros: Gerardo Núñez",
    price: "49,99 €",
    level: "Maestro",
    levelSlug: "maestro",
    category: "Análisis de Maestros • Nivel 3",
    desc: "Explora la velocidad y el lenguaje armónico de Gerardo Núñez. Analiza su increíble picado, sus influencias del jazz y su potente empuje rítmico.",
    bundledIn: "44",
    curriculum: [
      { title: "Gerardo Núñez: El jazz entra en el flamenco", duration: "11:00" },
      { title: "Picado explosivo: Análisis técnico de su método", duration: "16:50" },
      { title: "Sus escapes armónicos y sustituciones de jazz", duration: "14:10" },
      { title: "Análisis de 'Caminando' y su estructura armónica", duration: "21:30" },
      { title: "Adaptando el lenguaje de Gerardo a tu flamenco", duration: "13:50" }
    ],
    available: false
  },

  {
    id: "33",
    type: "individual",
    title: "Analiza a los Maestros: Manolo Sanlúcar",
    price: "49,99 €",
    level: "Maestro",
    levelSlug: "maestro",
    category: "Análisis de Maestros • Nivel 3",
    desc: "Comprende la escuela de Sanlúcar. Deconstrucción de su toque sinfónico, conceptos modales avanzados y el uso de arpegios complejos para pintar paisajes sonoros.",
    bundledIn: "44",
    curriculum: [
      { title: "La escuela de Manolo Sanlúcar: Sinfonismo flamenco", duration: "12:30" },
      { title: "Arpegios complejos como melodía: Su técnica", duration: "15:40" },
      { title: "Modos y colores: Del frigio al lidia dominante", duration: "13:20" },
      { title: "Análisis de 'Locura de Brisa y Trino'", duration: "20:00" },
      { title: "Composición pictórica: Crear imágenes con notas", duration: "14:00" }
    ],
    available: false
  },

  {
    id: "34",
    type: "bundle",
    title: "Analiza a los Maestros: El Maestro eres Tú",
    price: "149,99 €",
    level: "Maestro",
    levelSlug: "maestro",
    category: "Pack de Análisis • Nivel 3",
    desc: "La enciclopedia del análisis de los grandes maestros. Aprende los secretos compositivos y de ejecución de Paco de Lucía, Javier Arcos, Gerardo Núñez y Manolo Sanlúcar.",
    bundledIn: "44",
    curriculum: [
      { title: "Paco de Lucía: Revolución y legado", duration: "22:00" },
      { title: "Gerardo Núñez: Jazz y velocidad explosiva", duration: "21:00" },
      { title: "Manolo Sanlúcar: Sinfonismo y modalismo avanzado", duration: "20:00" },
      { title: "Javier Arcos: Pureza académica y expresión moderna", duration: "19:00" },
      { title: "Síntesis: Construyendo tu voz con la de los maestros", duration: "16:00" }
    ],
    available: false
  },

  {
    id: "35",
    type: "individual",
    title: "Compón tu Primera Pieza",
    price: "79,99 €",
    level: "Maestro",
    levelSlug: "maestro",
    category: "Teoría y Creación • Nivel 3",
    desc: "Descubre el camino para crear tus propias piezas. Aprende a estructurar una falseta, desarrollar variaciones, conectar diferentes secciones y componer un tema completo y coherente.",
    bundledIn: "44",
    curriculum: [
      { title: "La semilla musical: Cómo nace una idea en el flamenco", duration: "09:45" },
      { title: "Estructurar una falseta: Inicio, desarrollo y cierre", duration: "13:30" },
      { title: "Variaciones: Cómo enriquecer el material base", duration: "14:50" },
      { title: "Conectar secciones: El arco narrativo de una pieza", duration: "15:20" },
      { title: "Grabación y análisis de tu propia composición", duration: "18:00" }
    ],
    available: false
  },

  {
    id: "36",
    type: "individual",
    title: "Armonía e Improvisación",
    price: "79,99 €",
    level: "Maestro",
    levelSlug: "maestro",
    category: "Teoría y Creación • Nivel 3",
    desc: "Amplía tu vocabulario musical. Modulaciones complejas, acordes de jazz adaptados a la guitarra flamenca, improvisación sobre el modo frigio y escalas alternativas.",
    bundledIn: "44",
    curriculum: [
      { title: "Teoría avanzada: Modos griegos sobre la guitarra", duration: "12:00" },
      { title: "Acordes de jazz adaptados al flamenco: Sustituciones", duration: "14:30" },
      { title: "Improvisación sobre el modo frigio: Escalas y patrones", duration: "16:00" },
      { title: "Modulaciones complejas sin perder el duende", duration: "13:40" },
      { title: "Sesión de improvisación libre: Aplica todo lo aprendido", duration: "20:00" }
    ],
    available: false
  },

  {
    id: "37",
    type: "individual",
    title: "Maestros Invitados: Javier Arcos",
    price: "99,99 €",
    level: "Maestro",
    levelSlug: "maestro",
    category: "Clase Magistral • Nivel 3",
    desc: "Clase magistral con Javier Arcos enfocada en la preparación profesional. Consejos de grabación en estudio, sonorización en vivo, control del pánico escénico y desarrollo de carrera.",
    bundledIn: "44",
    curriculum: [
      { title: "La preparación del concierto: Mentalmente y técnicamente", duration: "12:20" },
      { title: "El estudio de grabación: Cómo sonar perfecto en micro", duration: "15:00" },
      { title: "Sonorización en vivo: La relación con el técnico de sonido", duration: "13:10" },
      { title: "El pánico escénico: Técnicas de control y preparación", duration: "11:50" },
      { title: "Desarrollo de carrera profesional en el flamenco actual", duration: "14:30" }
    ],
    available: false
  },

  {
    id: "38",
    type: "individual",
    title: "Maestros Invitados: Diego del Morao",
    price: "99,99 €",
    level: "Maestro",
    levelSlug: "maestro",
    category: "Clase Magistral • Nivel 3",
    desc: "Aprende del rey del swing de Jerez. Diego del Morao explica sus característicos deslizamientos de pulgar, variaciones rítmicas de rasgueo y su filosofía para inyectar un groove inigualable.",
    bundledIn: "44",
    curriculum: [
      { title: "Diego del Morao: Su historia y su filosofía de toque", duration: "11:00" },
      { title: "El slide de pulgar de Jerez: Técnica exclusiva", duration: "17:30" },
      { title: "Variaciones rítmicas del rasgueo de Diego", duration: "15:20" },
      { title: "El groove de Jerez: Cómo encuadrarlo en el compás", duration: "13:40" },
      { title: "Sesión de preguntas y demostración en directo", duration: "20:00" }
    ],
    available: false
  },

  {
    id: "39",
    type: "individual",
    title: "Maestros Invitados: Joni Jiménez",
    price: "99,99 €",
    level: "Maestro",
    levelSlug: "maestro",
    category: "Clase Magistral • Nivel 3",
    desc: "Estudia el elegante estilo de Madrid con Joni Jiménez. Aprende sus falsetas contemporáneas de picado limpio, su uso del pulgar y su forma de entender la Soleá y las Bulerías de hoy.",
    bundledIn: "44",
    curriculum: [
      { title: "El estilo de Madrid: Joni Jiménez y la nueva escuela", duration: "10:30" },
      { title: "Picado limpio y contemporáneo: El sello de Joni", duration: "16:00" },
      { title: "Uso inteligente del pulgar en falsetas modernas", duration: "14:20" },
      { title: "La Soleá de hoy: Pureza y lenguaje del siglo XXI", duration: "17:10" },
      { title: "Las Bulerías de Madrid: Diferencias con Jerez y Cádiz", duration: "13:50" }
    ],
    available: false
  },

  {
    id: "40",
    type: "individual",
    title: "Maestros Invitados: José del Tomate",
    price: "99,99 €",
    level: "Maestro",
    levelSlug: "maestro",
    category: "Clase Magistral • Nivel 3",
    desc: "Explora el toque de la dinastía Tomate con José del Tomate. Analiza su velocidad endiablada, sus detalles rítmicos y el legado de su padre Tomatito adaptado al siglo XXI.",
    bundledIn: "44",
    curriculum: [
      { title: "La familia Tomate: Legado, evolución y nuevo capítulo", duration: "11:20" },
      { title: "Velocidad extrema: Cómo José entrena sus manos", duration: "15:50" },
      { title: "Detalles rítmicos micro: El sello de la familia", duration: "14:30" },
      { title: "Análisis de fragmento en vivo: Descomposición total", duration: "19:20" },
      { title: "El respeto al legado y la voz propia del artista", duration: "12:00" }
    ],
    available: false
  },

  {
    id: "41",
    type: "individual",
    title: "Maestros Invitados: Kilino Jiménez",
    price: "99,99 €",
    level: "Maestro",
    levelSlug: "maestro",
    category: "Clase Magistral • Nivel 3",
    desc: "Clase magistral con Kilino Jiménez. Domina su fusión de velocidad, síncopas perfectas y la precisión rítmica que lo caracteriza en los escenarios más exigentes.",
    bundledIn: "44",
    curriculum: [
      { title: "Kilino Jiménez: Precisión y rigor como filosofía", duration: "10:00" },
      { title: "Síncopas perfectas: El trabajo de Kilino a cámara lenta", duration: "16:40" },
      { title: "Fusión de velocidad y control: Su método secreto", duration: "14:10" },
      { title: "Presencia escénica y musicalidad: Lo que va más allá de las notas", duration: "12:30" },
      { title: "Demostración y análisis en directo con preguntas", duration: "19:00" }
    ],
    available: false
  },

  {
    id: "42",
    type: "bundle",
    title: "Maestros Invitados: A tu Casa",
    price: "199,99 €",
    level: "Maestro",
    levelSlug: "maestro",
    category: "Pack de Clases Magistrales • Nivel 3",
    desc: "El pase definitivo de clases magistrales. Accede a las sesiones exclusivas de Diego del Morao, Joni Jiménez, José del Tomate, Kilino Jiménez y Javier Arcos.",
    bundledIn: "44",
    curriculum: [
      { title: "Diego del Morao: El swing inimitable de Jerez", duration: "20:00" },
      { title: "Joni Jiménez: La nueva escuela madrileña", duration: "17:00" },
      { title: "José del Tomate: Velocidad y legado familiar", duration: "19:00" },
      { title: "Kilino Jiménez: Precisión y síncopa perfecta", duration: "19:00" },
      { title: "Javier Arcos: Carrera, estudio y actuación profesional", duration: "15:00" }
    ],
    available: false
  },

  {
    id: "43",
    type: "individual",
    title: "Toca con los Maestros",
    price: "99,99 €",
    level: "Maestro",
    levelSlug: "maestro",
    category: "Práctica Interactiva • Nivel 3",
    desc: "Práctica real en tu propia casa. Toca sobre pistas de audio interactivas con cante, palmas y percusión real. Ejercicios de llamada y respuesta para ganar seguridad en vivo.",
    bundledIn: "44",
    curriculum: [
      { title: "Pistas de práctica con palmas y cajón por Bulerías", duration: "10:00" },
      { title: "Pistas con cante real: Tocar detrás de una voz flamenca", duration: "15:00" },
      { title: "Ejercicios de llamada y respuesta con guía", duration: "13:00" },
      { title: "Simulación de actuación: Grabación de tu sesión", duration: "12:00" },
      { title: "Revisión y corrección de errores en tiempo real", duration: "14:00" }
    ],
    available: false
  },

  {
    id: "44",
    type: "bundle",
    title: "Soy un Maestro: El Pack",
    price: "399,99 €",
    level: "Maestro",
    levelSlug: "maestro",
    category: "Pack Completo • Nivel 3",
    desc: "La cima de la educación flamenca. Incluye el curso de Composición, Armonía avanzada, el pack de Análisis de Maestros, las 5 Clases Magistrales y las sesiones de Toca con los Maestros.",
    bundledIn: null,
    curriculum: [
      { title: "Análisis de los 4 Grandes Maestros de la Guitarra Flamenca", duration: "22:00" },
      { title: "Composición: De la idea al tema completo grabado", duration: "18:00" },
      { title: "Armonía e Improvisación: Jazz y flamenco sin barreras", duration: "20:00" },
      { title: "Clases Magistrales exclusivas con 5 virtuosos en vivo", duration: "19:00" },
      { title: "Sesión Toca con los Maestros: Práctica real integrada", duration: "14:00" }
    ],
    available: false
  },


  // ─── TODOS LOS NIVELES ────────────────────────────────────────────────────

  {
    id: "45",
    type: "bundle",
    title: "Descarga completa por nivel",
    price: "499,99 €",
    level: "Todos",
    levelSlug: "todos",
    category: "Acceso Total • Academia",
    desc: "El pase definitivo de acceso total. Obtén acceso inmediato e ilimitado a todos los cursos, técnicas, acompañamientos y clases magistrales de los niveles Payo, Fenómeno y Maestro.",
    bundledIn: null,
    curriculum: [
      { title: "Nivel Payo: Los 12 módulos de iniciación (acceso completo)", duration: "Variado" },
      { title: "Nivel Fenómeno: Los 18 módulos intermedios (acceso completo)", duration: "Variado" },
      { title: "Nivel Maestro: Los 15 módulos avanzados (acceso completo)", duration: "Variado" },
      { title: "Clases Magistrales: Las 5 sesiones con maestros invitados", duration: "Variado" },
      { title: "Acceso anticipado a todos los nuevos cursos del futuro", duration: "∞" }
    ],
    available: false
  }

];
