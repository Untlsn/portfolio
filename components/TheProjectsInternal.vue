<script setup lang="ts">
import ProjectsInternalShowcase from '~/components/ProjectsInternalShowcase.vue';
import ProjectsInternalShowcaseLite from '~/components/ProjectsInternalShowcaseLite.vue';
</script>

<template>
	<article>
		<header class="text-5 font-semibold m-4">
			Wewnętrzne projekty:
		</header>
		<p class="m-4 text-sm">
			Niestety ze wzgedu na umowe nie moge pokazać kodu źrudłowego a w niektórych przypadkach nawet strony
		</p>
		<ul class="">
			<ProjectsInternalShowcase
				title="Letssport"
				description="strona do wynajmowania, tworzenia i uczestniczenia w wydarzeniach sportowych"
				commitment="Drugożędny frontend developer"
				time="Kilka miesięcy po rozpoczęciu pracy, trwał 2 lata"
				skills="Zarządzanie mapami, tworzenie dużych dynamicznych formularzy, praca z websocketem i grapthql, 1 kroki w SSR"
				href="https://www.lets.sport/"
				src="/screens/letssport.webp"
			/>
			<ProjectsInternalShowcase
				title="Światpaliw"
				description="prognozy paliw i nie tylko"
				commitment="Pierwszożędny frontend developer"
				time="Pierwsza połowa roku 2023"
				skills="Głębrze zarządzanie SSR z SolidStart, tworzenie wykresów, pobieranie danych z niewygodnych (HTML) źródeł"
				href="https://swiatpaliw.com/"
				src="/screens/swiatpaliw.webp"
			/>
			<ProjectsInternalShowcaseLite
				title="Projekt rzadowy"
				description="zarządzanie dokumentami i projektami"
				commitment="Pierwszożędny fullstack developer"
				time="Pierwsza połowa roku 2023"
				skills="Tworzenie aplikacji Fullstack z wykożystaniem SolidStart, zarządzanie plikami binarnymi, okiełznanie narzędzi popularnych w rządowych aplikacjach"
			/>
			<ProjectsInternalShowcaseLite
				title="Projekt rzadowy"
				description="zarządzanie dokumentami i projektami"
				commitment="Pierwszożędny fullstack developer"
				time="Pierwsza połowa roku 2023"
				skills="Tworzenie aplikacji Fullstack z wykożystaniem SolidStart, zarządzanie plikami binarnymi, okiełznanie narzędzi popularnych w rządowych aplikacjach"
			/>
			<ProjectsInternalShowcaseLite
				title="Loximide"
				description="kalkulator dla klimatyzacji"
				commitment="Pierwszożędny fullstack developer"
				time="Drugi kwartał roku 2023"
				skills="Zaawansowane uzycie ServerFunction, zaawanoswane uzycie wykresów, tworzenie pdf'ów z puppeteer"
			/>
			<ProjectsInternalShowcaseLite
				title="Nieruchomości"
				description="aplikacja do narządzania nieruchomościami"
				commitment="Doskokowy frontend developer"
				time="Pierwszy projekt po rozpoczęciu pracy"
				skills="Nauka podstaw pracy z uzyciem wenwętrznego Gita i baremetal linuxa"
			/>
			<ProjectsInternalShowcaseLite
				title="Bronisze"
				description="rzarządzanie magazynami"
				commitment="Doskokowy frontend developer"
				time="Pierwszy rok pracy"
				skills="Uzycie bootstrap, praca z zespołem, mocne uzycie redix, CRA i class-based Reacta"
			/>
			<ProjectsInternalShowcaseLite
				title="AI"
				description="GUI dla systemu wyszukującego zmian skórnych u pacjentów"
				commitment="Główny frontend developer drugiej fali"
				time="początek 2 roku pracy"
				skills="Praca z elektronem. Naprawianie i modernizacja projektu w złym stanie technicznym"
			/>
		</ul>
	</article>
</template>

<style scoped>

</style>
