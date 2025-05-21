<template>
  <div class="flex flex-col h-[calc(100vh-var(--navbar-height,80px))]">
    <!-- Conteneur des boutons -->
    <div class="flex w-full gap-4 px-2">
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

      <!-- Carte en bas à gauche -->
      <div class="absolute bottom-12 left-12 bg-white rounded-xl p-6 shadow-lg max-w-md">
        <h2 class="text-2xl font-bold mb-2">Transformez votre espace extérieur</h2>
        <p class="text-gray-700 mb-4">
          Confiez-nous votre jardin et découvrez notre expertise en aménagement paysager, entretien et élagage pour un
          résultat qui dépasse vos attentes.
        </p>
        <div class="flex gap-4">
          <button class="bg-black text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition-colors duration-300">
            Demander devis
          </button>
          <button
            class="border border-black text-black py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Nos réalisations
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Tableau d'images (à remplacer par vos propres images)
const images = ["/images/jardin1.jpg", "/images/jardin2.jpg", "/images/jardin3.jpg"];

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
