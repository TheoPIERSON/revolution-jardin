<template>
  <nav class="flex justify-between items-center px-8 py-2 bg-secondary">
    <div class="flex-1">
      <img src="/public/logo.webp" class="w-1/3" alt="Revolution Jardin Logo" />
    </div>

    <div class="flex-2 flex justify-center gap-8">
      <a href="/" class="font-sans text-primary font-medium hover:text-accent-green transition-colors duration-300"
        >Accueil</a
      >
      <a
        href="/a-propos"
        class="font-sans text-primary font-medium hover:text-accent-green transition-colors duration-300"
        >A Propos</a
      >
      <a
        href="/realisations"
        class="font-sans text-primary font-medium hover:text-accent-green transition-colors duration-300"
        >Réalisations</a
      >
      <a
        href="/contact"
        class="font-sans text-primary font-medium hover:text-accent-green transition-colors duration-300"
        >Contact</a
      >
    </div>

    <div class="flex-1 flex justify-end">
      <button
        class="text-primary border border-primary py-4 px-4 rounded-lg font-sans hover:bg-black hover:text-white hover:border-black transition-colors duration-300"
      >
        Demander Devis
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { NuxtImg } from "#components";
</script>
