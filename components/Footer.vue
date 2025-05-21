<template>
  <footer class="py-8 bg-white w-full">
    <div class="container mx-auto px-4">
      <div class="bg-gray-100 rounded-xl shadow-sm p-8 flex flex-col justify-between items-start w-full">
        <!-- Section logo et coordonnées -->
        <div class="w-full">
          <img src="/logo.webp" alt="Révolution Jardin Logo" class="w-32 mb-4" />
          <h3 class="text-xl font-bold mb-2">
            <span class="font-poppins text-red-600">Révolution </span>
            <span class="text-[#5D9C74] font-normal">Jardin</span>
          </h3>
          <div class="space-y-2 text-gray-600">
            <p>123 Avenue des Jardins, 33000 Bordeaux</p>
            <p>05 56 12 34 56</p>
            <p>contact@revolution-jardin.fr</p>
          </div>

          <!-- Section navigation et réseaux sociaux -->
          <div class="mt-6 flex flex-col md:flex-row justify-between items-start w-full">
            <!-- Réseaux sociaux -->
            <div class="flex space-x-4 mb-4 md:mb-0 mt-4">
              <a href="#" class="text-gray-600 hover:text-accent-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                  />
                </svg>
              </a>
              <a href="#" class="text-gray-600 hover:text-accent-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm-2-11c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm4 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm2 5c0 2.21-1.79 4-4 4s-4-1.79-4-4h8z"
                  />
                  <circle cx="12" cy="12" r="2.5" />
                </svg>
              </a>
              <a href="#" class="text-gray-600 hover:text-accent-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M19.59 6.69a4.83 4.83 0 0 0-3.77-4.25C13.94 2.01 12 2 12 2s-1.94.01-3.82.44c-1.83.44-3.29 1.76-3.78 4.25-.44 2.52-.44 7.8 0 10.32.44 2.5 1.95 3.81 3.78 4.25 1.88.44 3.82.44 3.82.44s1.94 0 3.82-.44c1.83-.44 3.33-1.75 3.77-4.25.44-2.52.44-7.8 0-10.32zM10 15.38V8.62L16 12l-6 3.38z"
                  />
                </svg>
              </a>
            </div>

            <!-- Navigation -->
            <div class="flex flex-wrap gap-8 md:gap-16 mt-4">
              <a
                href="/"
                class="font-sans text-primary font-medium hover:text-accent-green transition-colors duration-300"
              >
                Accueil
              </a>
              <a
                href="/a-propos"
                class="font-sans text-primary font-medium hover:text-accent-green transition-colors duration-300"
              >
                A Propos
              </a>
              <a
                href="/realisations"
                class="font-sans text-primary font-medium hover:text-accent-green transition-colors duration-300"
              >
                Réalisations
              </a>
              <a
                href="/contact"
                class="font-sans text-primary font-medium hover:text-accent-green transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Copyright -->
      <div class="text-center mt-8 text-gray-500 text-sm">
        <p>© 2024 Révolution Jardin. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
