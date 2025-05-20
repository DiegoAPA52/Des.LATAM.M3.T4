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
    {
        nombre: 'Casa en Chamisero',
        src: 'https://cf.chilepropiedades.cl/imagenes/publicacion/arriendo-mensual/casa/santiago/2/cd3694dbc9cb4d74883aef27e80520f9.jpeg',
        descripcion: 'Una lujosa casa comoda y amplio espacio',
        ubicacion: 'Chamisero, RM',
        habitaciones: 5,
        costo: 105,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Departamento en Providencia',
        src: 'https://pics.nuroa.com/amplio_y_luminoso_dpto_al_lado_del_metro_tobalaba_5530002744065628568.jpg',
        descripcion: 'Amplio departamento excelente ubicacion',
        ubicacion: 'Providencia, RM',
        habitaciones: 3,
        costo: 17,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Departamento en Estacion Central',
        src: 'https://cf.chilepropiedades.cl/imagenes/publicacion/arriendo-mensual/casa/santiago/1/91be5a04322441faa1a673c452a1770b.jpeg',
        descripcion: 'Departamento ideal para pequeña familia',
        ubicacion: 'Estacion Central, RM',
        habitaciones: 1,
        costo: 3,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa en Pudahuel',
        src: 'https://cf.chilepropiedades.cl/imagenes/publicacion/arriendo-mensual/casa/santiago/1/ad2ca84f50ea4cfab7c05e64712dcabd.jpeg',
        descripcion: 'Casa ideal tanto para vivir, cerca de la zona indistriul de la comuna',
        ubicacion: 'Pudahuel, RM',
        habitaciones: 3,
        costo: 15,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa en Lo Prado',
        src: 'https://www.pizarropropiedades.cl/imagebank/propiedades/K2620R354F-e66153086218b76720bb309792d1225b.jpg',
        descripcion: 'Hermosa y acogedora casa en zona muy tranquila',
        ubicacion: 'Lo Prado, RM',
        habitaciones: 4,
        costo: 18,
        smoke: true,
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


mostrarPropiedades(propiedades_alquiler, 'alquiler');
mostrarPropiedades(propiedades_venta, 'venta');