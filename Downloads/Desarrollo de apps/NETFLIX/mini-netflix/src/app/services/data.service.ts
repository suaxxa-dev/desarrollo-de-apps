import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // 🎬 Catálogo de películas (5 por categoría)
  private peliculas = [
    // --- COMEDIA ---
    {
      id: 1,
      titulo: "Norbit",
      categoria: "Comedia",
      imagen: "https://m.media-amazon.com/images/M/MV5BZDAzOTBlNmMtODI4OC00MDc3LWEzMzAtZjU2NzU1NjhlMDE0XkEyXkFqcGc@._V1_.jpg",
      descripcion: "Un hombre amable se ve obligado a casarse con una mujer insoportable, pero luego encuentra a su alma gemela."
    },
    {
      id: 2,
      titulo: "¿Y dónde están las rubias?",
      categoria: "Comedia",
      imagen: "https://vignette.wikia.nocookie.net/doblaje/images/3/3d/Y-donde-estan-las-rubias-white-chicks-shawn-wayans-vhs-5439-MLA4389453419_052013-F.jpg/revision/latest?cb=20161018214826&path-prefix=es",
      descripcion: "Dos agentes del FBI se hacen pasar por chicas ricas para resolver un caso de secuestro."
    },
    {
      id: 3,
      titulo: "Shrek",
      categoria: "Comedia",
      imagen: "https://image.tmdb.org/t/p/original/phBeKjtDYmUpIT4VbNF1lYT0oEa.jpg",
      descripcion: "Un ogro rescata a una princesa para recuperar su pantano, pero termina enamorado."
    },
    {
      id: 4,
      titulo: "Mi Pobre Angelito",
      categoria: "Comedia",
      imagen: "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/24576/24576_800x1121.jpg",
      descripcion: "Un niño es olvidado en casa durante Navidad y debe defenderla de dos ladrones."
    },
    {
      id: 5,
      titulo: "Grown Ups",
      categoria: "Comedia",
      imagen: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/grown-ups.jpg",
      descripcion: "Cinco amigos de la infancia se reúnen años después para pasar un fin de semana divertido."
    },

    // --- TERROR ---
    {
      id: 6,
      titulo: "El Conjuro",
      categoria: "Terror",
      imagen: "https://imgv2-1-f.scribdassets.com/img/document/865045273/original/31c77a397d/1?v=1",
      descripcion: "Investigadores paranormales ayudan a una familia acosada por una presencia oscura."
    },
    {
      id: 7,
      titulo: "IT (Eso)",
      categoria: "Terror",
      imagen: "https://www.originalfilmart.com/cdn/shop/products/it_2017_advance_original_film_art.jpg?v=1646771546&width=1200",
      descripcion: "Un payaso diabólico aterroriza a un grupo de niños en un pequeño pueblo."
    },
    {
      id: 8,
      titulo: "El Exorcista",
      categoria: "Terror",
      imagen: "https://www.themoviedb.org/t/p/original/w9JjjSzepgAQuLDtA3rh8Edlj2S.jpg",
      descripcion: "Una niña es poseída y su madre recurre a sacerdotes para salvar su alma."
    },
    {
      id: 9,
      titulo: "Scream",
      categoria: "Terror",
      imagen: "https://posterspy.com/wp-content/uploads/2023/03/Scream-Poster-B.jpg",
      descripcion: "Un asesino enmascarado acosa a estudiantes siguiendo las reglas del cine de terror."
    },
    {
      id: 10,
      titulo: "Anabelle",
      categoria: "Terror",
      imagen: "https://image.tmdb.org/t/p/original/sCPwduyyqCrIpSk1kA0p8lwjveB.jpg",
      descripcion: "Una muñeca antigua se convierte en el recipiente de una entidad maligna."
    },

    // --- ROMANCE ---
    {
      id: 11,
      titulo: "Titanic",
      categoria: "Romance",
      imagen: "https://originalvintagemovieposters.com/wp-content/uploads/2020/02/TITANIC-8567-scaled.jpg",
      descripcion: "Un romance épico nace a bordo del trasatlántico más famoso del mundo."
    },
    {
      id: 12,
      titulo: "Diario de una pasión",
      categoria: "Romance",
      imagen: "https://m.media-amazon.com/images/M/MV5BM2RiMzcxYmYtNzQ3MC00NTQ4LWE0ZjktNGUwODI1MzhjNDNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      descripcion: "Un anciano lee a una mujer la historia de dos jóvenes amantes separados por la guerra."
    },
    {
      id: 13,
      titulo: "Yo antes de ti",
      categoria: "Romance",
      imagen: "https://http2.mlstatic.com/yo-antes-de-ti-jojo-moyes-portada-de-la-pelicula-dhl-D_NQ_NP_500421-MLM20774177470_062016-F.jpg",
      descripcion: "Una joven alegre cuida a un hombre exitoso que quedó paralítico tras un accidente."
    },
    {
      id: 14,
      titulo: "Orgullo y Prejuicio",
      categoria: "Romance",
      imagen: "https://pics.filmaffinity.com/Orgullo_y_prejuicio-197724218-large.jpg",
      descripcion: "En la Inglaterra del siglo XIX, Elizabeth Bennet lidia con problemas de amor y clase social."
    },
    {
      id: 15,
      titulo: "La La Land",
      categoria: "Romance",
      imagen: "https://i5.walmartimages.com/seo/La-La-Land-Movie-Poster-Poster-Print-24-x-36_20f02811-01b4-4aea-9bb2-a79942bd2642_1.856c035d66f8fd216f6d933259bc3dfb.jpeg",
      descripcion: "Un músico de jazz y una aspirante a actriz se enamoran mientras persiguen sus sueños."
    }
  ];

  constructor() { }

  // Retorna todas las películas
  obtenerPeliculas() {
    return this.peliculas;
  }

  // Obtiene la lista de LocalStorage de forma segura
  obtenerGuardadas() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const data = localStorage.getItem('peliculas_netflix');
      return data ? JSON.parse(data) : [];
    }
    return [];
  }

  // Guarda una película sin duplicarla
  guardarPelicula(pelicula: any) {
    if (typeof window !== 'undefined' && window.localStorage) {
      const guardadas = this.obtenerGuardadas();
      
      // Verificamos si ya existe por el ID o Título
      const existe = guardadas.find((p: any) => p.titulo === pelicula.titulo);
      
      if (!existe) {
        guardadas.push(pelicula);
        localStorage.setItem('peliculas_netflix', JSON.stringify(guardadas));
        alert('Película añadida a "Mis Películas"');
      } else {
        alert('Esta película ya está en tu lista');
      }
    }
  }
}