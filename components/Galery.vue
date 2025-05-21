<template>
  <div class="py-16 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Nos réalisations</h2>
        <p class="text-gray-600">Découvrez quelques exemples de nos projets d'aménagement paysager</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="group relative overflow-hidden rounded-lg cursor-pointer h-64"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end"
          >
            <div class="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 class="font-semibold">{{ image.title }}</h3>
              <p class="text-sm">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <button class="bg-black text-white py-4 px-4 rounded-md hover:bg-opacity-70 transition-colors duration-300">
          Voir plus de réalisations
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Tableau d'images pour la galerie
const images = [
  {
    src: "/images/portfolio/jardin1.jpg",
    alt: "Aménagement de jardin moderne",
    title: "Jardin contemporain",
    description: "Aménagement complet à Bordeaux",
  },
  {
    src: "/images/portfolio/jardin2.jpg",
    alt: "Terrasse en bois avec végétation",
    title: "Terrasse boisée",
    description: "Création d'espace détente",
  },
  {
    src: "/images/portfolio/jardin3.jpg",
    alt: "Massif de fleurs colorées",
    title: "Massif fleuri",
    description: "Composition saisonnière",
  },
  {
    src: "/images/portfolio/jardin4.jpg",
    alt: "Jardin japonais avec bassin",
    title: "Jardin zen",
    description: "Inspiration japonaise",
  },
  {
    src: "/images/portfolio/jardin5.jpg",
    alt: "Potager surélevé en bois",
    title: "Potager design",
    description: "Agriculture urbaine",
  },
  {
    src: "/images/portfolio/jardin6.jpg",
    alt: "Allée de jardin en pierre naturelle",
    title: "Allée pavée",
    description: "Pierres naturelles",
  },
  {
    src: "/images/portfolio/jardin7.jpg",
    alt: "Éclairage de jardin nocturne",
    title: "Mise en lumière",
    description: "Éclairage paysager",
  },
  {
    src: "/images/portfolio/jardin8.jpg",
    alt: "Pergola avec plantes grimpantes",
    title: "Pergola végétalisée",
    description: "Ombrage naturel",
  },
  {
    src: "/images/portfolio/jardin9.jpg",
    alt: "Bassin aquatique avec nénuphars",
    title: "Bassin aquatique",
    description: "Écosystème équilibré",
  },
  {
    src: "/images/portfolio/jardin10.jpg",
    alt: "Mur végétal extérieur",
    title: "Mur végétal",
    description: "Verdure verticale",
  },
  {
    src: "/images/portfolio/jardin11.jpg",
    alt: "Jardin méditerranéen avec oliviers",
    title: "Ambiance méditerranéenne",
    description: "Plantes adaptées à la sécheresse",
  },
  {
    src: "/images/portfolio/jardin12.jpg",
    alt: "Espace extérieur avec mobilier design",
    title: "Salon d'extérieur",
    description: "Convivialité et confort",
  },
];
</script>

<style scoped>
/* Animation subtile au survol des images */
.group:hover img {
  filter: brightness(0.9);
}
</style>
