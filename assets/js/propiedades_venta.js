document.addEventListener("DOMContentLoaded", () => {
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
      {
        nombre: 'Casa en Las Condes',
        src: 'https://cf.chilepropiedades.cl/imagenes/publicacion/venta/casa/santiago/2/45d3cd336567485092a5b1ea52e6c64a.jpeg',
        descripcion: 'Vista panorámica y excelente conectividad.',
        ubicacion: 'Las Condes, RM',
        habitaciones: 4,
        costo: 25500,
        smoke: false,
        pets: true
      },
      {
        nombre: 'Casa en Las Condes',
        src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20200121/1426567/2024011631133081635.jpg',
        descripcion: 'Cerca de malls y buenas escuelas conectividad',
        ubicacion: 'Las Condes, RM',
        habitaciones: 3,
        costo: 20500,
        smoke: true,
        pets: true
      },
      {
        nombre: 'Casa en Renca',
        src: 'https://http2.mlstatic.com/D_NQ_NP_800100-MLC78413924564_082024-O.webp',
        descripcion: 'Acogedora casa cerca de colectividad y autopista',
        ubicacion: 'Renca, RM',
        habitaciones: 2,
        costo: 3700,
        smoke: false,
        pets: true
      },
    ];
  
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

    mostrarPropiedades(propiedades_ventas, 'venta');
  });
  