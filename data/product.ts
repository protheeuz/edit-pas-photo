/* Static data about product */

interface Product {
  name: string
  description: {
    short: string
    long: string
  }
  tagline: string
  keywords: string
  url: string
  img: string
  author: string
  favicon: string
}

export const product: Product = {
  name: "Edit Pas Photo",
  description: {
    short: "Edit Almamater, Jas Formal, dan Ganti Latar Foto",
    long: "Editpasfoto merupakan aplikasi swaedit pas foto berbasis web dengan fitur mengganti rasio ukuran foto dan menambah layer almamater kampus & jas formal",
  },
  tagline: "Edit pas photo, tanpa skill edit photo",
  keywords: "edit pas foto, pas foto, ganti rasio, almamater, jas formal",
  url: "https://editfoto.vercel.app",
  img: "/img/og.png",
  author: "Iqbal F",
  favicon: "/img/favicon.png",
}
