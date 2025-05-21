<template>
  <div class="flex flex-col h-[calc(100vh-var(--navbar-height,80px))] py-12">
    <!-- Conteneur des boutons -->
    <h2 class="p-6 text-2xl font-bold mb-2">Transformez votre espace extérieur</h2>

    <div class="flex w-full gap-4 px-6">
      <button
        @click="changeImage(0)"
        class="flex-1 py-5 transition-colors duration-300 focus:outline-none rounded-lg"
        :class="activeImageIndex === 0 ? 'bg-black text-white' : 'bg-gray-100 text-black hover:bg-gray-200'"
      >
        Entretien de jardin
      </button>
      <button
        @click="changeImage(1)"
        class="flex-1 py-5 transition-colors duration-300 focus:outline-none rounded-lg"
        :class="activeImageIndex === 1 ? 'bg-black text-white' : 'bg-gray-100 text-black hover:bg-gray-200'"
      >
        Aménagement paysager
      </button>
      <button
        @click="changeImage(2)"
        class="flex-1 py-5 transition-colors duration-300 focus:outline-none rounded-lg"
        :class="activeImageIndex === 2 ? 'bg-black text-white' : 'bg-gray-100 text-black hover:bg-gray-200'"
      >
        Élagage et abattage
      </button>
    </div>

    <!-- Conteneur de l'image -->
    <div class="flex-1 overflow-hidden px-6 pt-2 pb-4 relative">
      <img
        :src="currentImage"
        alt="Image de jardin"
        class="w-full h-full object-cover transition-opacity duration-500 rounded-xl"
      />

      <!-- Carte en haut à gauche (modifiée) -->
      <div class="absolute top-12 left-12 bg-white rounded-xl p-6 shadow-lg max-w-md">
        <p class="text-gray-700 mb-4">
          {{ cardTexts[activeImageIndex] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Tableau d'images (à remplacer par vos propres images)
const images = ["/images/jardin1.jpg", "/images/jardin2.jpg", "/images/jardin3.jpg"];

// Textes pour chaque type de prestation
const cardTexts = [
  "Confiez-nous l'entretien de votre jardin pour un espace toujours impeccable. Nos experts s'occupent de la tonte, du désherbage et de l'entretien régulier pour un jardin en pleine santé.",
  "Transformez votre espace extérieur avec notre service d'aménagement paysager. Nous créons des jardins harmonieux et fonctionnels qui reflètent votre style et vos besoins.",
  "Nos spécialistes en élagage et abattage interviennent avec précision pour entretenir vos arbres ou les retirer en toute sécurité, préservant ainsi la beauté et la santé de votre espace vert."
];

// Index de l'image active
const activeImageIndex = ref(0);

// Image actuellement affichée
const currentImage = ref(images[0]);

// Fonction pour changer l'image
const changeImage = (index: number) => {
  activeImageIndex.value = index;
  currentImage.value = images[index];
};
</script>

<style scoped></style>
