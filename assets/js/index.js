const propiedades_alquiler = [
    {
        nombre: 'Departamento en Recoleta',
        src: 'https://cf.chilepropiedades.cl/imagenes/publicacion/arriendo-mensual/departamento/santiago/2/79f0cc8b41cd4ceb9a234c510901656b.jpeg',
        descripcion: 'Luminoso y moderno departamento en zona popular de Santiago.',
        ubicacion: 'Recoleta, RM',
        habitaciones: 3,
        costo: 7,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Home Studio en Santiago centro',
        src: 'https://cf.chilepropiedades.cl/imagenes/publicacion/arriendo-mensual/departamento/santiago/2/4767a247e7a74338a92e50a6a4ff612f.jpeg',
        descripcion: 'Ideal para parejas',
        ubicacion: 'Santiago centro, RM',
        habitaciones: 1,
        costo: 6,
        smoke: false,
        pets: false
    },
    {
     nombre: 'Departamento en Santiago',
        src: 'https://cf.chilepropiedades.cl/imagenes/publicacion/arriendo-mensual/departamento/santiago/1/3ddc4350296742868f0a60592759b661.jpeg',
        descripcion: 'Departamento bien ubicado a 5 minutos del metro.',
        ubicacion: 'Providencia, RM',
        habitaciones: 3,
        costo: 15,
        smoke: true,
        pets: true
    },
];

const propiedades_ventas = [
    {
        nombre: 'Departamento en Santiago',
        src: 'https://cf.chilepropiedades.cl/imagenes/publicacion/venta/departamento/santiago/1/f490cfe46b0945ab96a83100e98c1dfe.jpeg',
        descripcion: 'Un espacio seguro y confortable para toda la familia',
        ubicacion: 'Santiago, RM',
        habitaciones: 4,
        costo: 17000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Departamento en Santiago',
        src: 'https://cf.chilepropiedades.cl/imagenes/publicacion/venta/departamento/santiago/1/0cbd7c6f36434a7298842d1d5e035c2d.jpeg',
        descripcion: 'Ideal para oficina o vivienda.',
        ubicacion: 'Santiago, RM',
        habitaciones: 2,
        costo: 20000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa en Santiago',
        src: 'https://cf.chilepropiedades.cl/imagenes/publicacion/venta/casa/santiago/2/ee34e6145e394172ab2d9ecc293f0bf8.jpeg',
        descripcion: 'Estilo moderno, piscina excelente espacio familiar',
        ubicacion: 'Santiago, RM',
        habitaciones: 6,
        costo: 29000,
        smoke: true,
        pets: true
    },
];

// Función para mostrar propiedades en HTML
function mostrarPropiedades(lista, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    let html = '';
    lista.forEach(prop => {
      html += `
        <div class="card m-3" style="width: 25rem;">
          <img src="${prop.src}" class="card-img-top" alt="${prop.nombre}">
          <div class="card-body">
            <h5 class="card-title text-center">${prop.nombre}</h5>
            <p><strong>Ubicación:</strong> ${prop.ubicacion}</p>
            <p><strong>Descripción:</strong> ${prop.descripcion}</p>
            <p><strong>Habitaciones:</strong> ${prop.habitaciones}</p>
            <p><strong>Precio:</strong> UF ${prop.costo}</p>
            <p>
              <span class="badge bg-${prop.smoke ? 'success' : 'danger'}">
                ${prop.smoke ? ' <i class="fas fa-smoking text-dark"></i> Permitido fumar' : '<i class="fas fa-smoking-ban text-dark"></i> No fumar'}
              </span>
              <span class="badge bg-${prop.pets ? 'success' : 'danger'}">
                ${prop.pets ? '<i class="fas fa-paw text-dark"></i> Mascotas Permitidas' : '<i class="fa-solid fa-ban text-dark"></i> Mascotas no permitidas'}
              </span>
            </p>
          </div>
        </div>
      `;
    });
    contenedor.innerHTML = html;
  }


// Llamadas
mostrarPropiedades(propiedades_alquiler, 'alquiler');
mostrarPropiedades(propiedades_ventas, 'venta');