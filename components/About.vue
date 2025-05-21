<template>
  <div class="container-fluid px-6 py-16">
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Section texte de présentation (moitié gauche) -->
      <div class="w-full md:w-1/2 pr-0 md:pr-6">
        <div class="space-y-3 text-gray-800">
          <p class="text-lg leading-tight">
            Depuis plus de 20 ans j'ai accompagné et aidé des professionels, des collectivité à améliorer leur jardin
            avant de créer mon entreprise..
          </p>
          <p class="text-lg leading-tight">
            J'aime la nature évidemment, et le contact avec les personnes aussi, c'est naturellement que j'ai orienté
            mon activité vers le service à la personne.
          </p>
          <p class="text-lg leading-tight">
            Ma force est de proposer à mes clients un travail de qualité avec soin et efficacité. Je travaille pour vous
            et avec vous en vous donnant des conseils et en restant à votre écoute.
          </p>
          <p class="text-lg leading-tight">
            J'exerce mon métier avec passion auprès de vous, particuliers ; une solution rêvée pour votre jardin !
          </p>
        </div>
      </div>

      <!-- Section cartes de chiffres clés (moitié droite) -->
      <div class="w-full md:w-1/2 flex flex-col justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Carte 1 -->
          <div class="bg-white rounded-xl shadow-md p-5 text-center">
            <div class="text-5xl font-bold text-black mb-1">20+</div>
            <div class="text-gray-600 text-lg">Années d'expérience</div>
          </div>

          <!-- Carte 2 -->
          <div class="bg-white rounded-xl shadow-md p-5 text-center">
            <div class="text-5xl font-bold text-black mb-1">50%</div>
            <div class="text-gray-600 text-lg">Réduction d'impôt</div>
          </div>

          <!-- Carte 3 (plus longue, sous les deux autres) -->
          <div class="bg-white rounded-xl shadow-md p-5 text-center md:col-span-2 mt-2">
            <div class="text-5xl font-bold text-black mb-1">500+</div>
            <div class="text-gray-600 text-lg">Clients satisfaits</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
