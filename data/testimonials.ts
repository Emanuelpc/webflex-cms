import type { Testimonial } from "@/types/testimonial";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    nombre: "Carlos Rodríguez",
    cargo: "Emprendedor",
    comentario:
      "El resultado superó mis expectativas. La página quedó moderna y profesional.",
    avatar: "/avatars/avatar-1.jpg",
    rating: 5,
  },
  {
    id: 2,
    nombre: "María López",
    cargo: "Diseñadora",
    comentario:
      "Me gustó mucho la facilidad de uso y el diseño de la plataforma.",
    avatar: "/avatars/avatar-3.jpg",
    rating: 5,
  },
  {
    id: 3,
    nombre: "Daniel Pérez",
    cargo: "Desarrollador",
    comentario:
      "Una solución flexible y muy interesante para administrar contenido.",
    avatar: "/avatars/avatar-2.jpg",
    rating: 4,
  },
];