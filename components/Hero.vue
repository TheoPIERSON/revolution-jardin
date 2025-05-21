<template>
  <div class="flex flex-col h-[87vh]">
    <!-- Conteneur de l'image -->
    <div class="flex-1 overflow-hidden px-6 pb-4 relative">
      <img
        src="/public/images/haie.jpg"
        alt="Image de jardin"
        class="w-full h-full object-cover transition-opacity duration-500 rounded-xl"
      />

      <!-- Carte en bas à gauche -->
      <div class="absolute bottom-12 left-12 bg-white rounded-xl p-6 shadow-lg max-w-lg">
        <h2 class="text-2xl font-bold mb-2">Transformez votre espace extérieur avec</h2>
        <h1 class="text-4xl font-bold">
          <span class="font-poppins text-red-600">Révolution </span>
          <span class="text-[#5D9C74] font-normal">Jardin</span>
        </h1>
        <p class="text-gray-700 mb-4">
          Confiez-nous votre jardin et découvrez notre expertise en aménagement paysager, entretien et élagage pour un
          résultat qui dépasse vos attentes.
        </p>
        <div class="flex gap-4">
          <button class="bg-black text-white py-4 px-4 rounded-md hover:bg-opacity-80 transition-colors duration-300">
            Demander devis
          </button>
          <button
            class="border border-black text-black py-4 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Nos réalisations
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
