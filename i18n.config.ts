export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'pl',
	messages: {
		en: {
			landing: {
				animatedWords: ['Hello', 'I\'m', 'Filip', 'Web Developer'],
			},
			frontend: {
				titles: ['Frameworks', 'Additional technologies'],
				description: [
					'I\'m frontend developer since 2018 and commercially from 2021. Most of my time I\'ve spent writing React, but from 2022 when I\'ve get more control over projects I\'ve move more to Vue (this portfolio is created using Vue + Nuxt) and specially SolidJS',
					'Similar situaltion is with CSS when I\'ve start useing pure CSS, Boostrap and CSS-in-JS. And now I\'m writing css mainly in tailwind and unocss',
				],
			},
			projects: {
				title: 'Projects',
				subtitles: ['Internal projects', 'Frontend Mentor'],
				licenceWarning: 'Because of agreements I can\'t show source code and in some cases even screens',
				toggleAllButton: ['Close all', 'Open all'],
				fmcodeProjects: {
					titles: {
						engagement: 'Level of commitment',
						time: 'Time',
						skills: 'Gained skills',
					},
					list: [
						{
							title: 'Letssport',
							description: 'Sports event management',
							commitment: 'Secondary frontend developer',
							time: 'A few months after starting work, for 2 years',
							skills: 'Managing maps, creating large dynamic forms, working with websocket and grapthql, first steps in SSR',
						}, {
							title: 'Światpaliw',
							description: 'Fuel forecasts and more',
							commitment: 'Lead frontend developer',
							time: 'First half of 2023',
							skills: 'Deeper SSR management with SolidStart, creating charts, fetching data from inconvenient (HTML) sources',
						}, {
							title: 'Government project',
							description: 'Document and project management',
							commitment: 'Lead frontend developer',
							time: 'First half of 2023',
							skills: 'Creating fullstack applications using SolidStart, managing binaries, dealing with tools popular in Gov applications',
						}, {
							title: 'Loximide',
							description: 'Air conditioning calculator',
							commitment: 'Lead frontend developer',
							time: 'Second quarter of 2023',
							skills: 'Advanced use of ServerFunction, Advanced use of charts, Creating pdfs with puppeteer',
						}, {
							title: 'Nieruchomości',
							description: 'Property management app',
							commitment: 'Additional frontend developer',
							time: 'First project after starting work',
							skills: 'Learning the basics of working with external Git and baremetal Linux',
						}, {
							title: 'Bronisze',
							description: 'Warehouse management',
							commitment: 'Additional frontend developer',
							time: 'First year of work',
							skills: 'Using bootstrap, working with a team, heavy use of redux, CRA and class-based React',
						}, {
							title: 'AI',
							description: 'GUI for a system that searches for skin lesions in patients',
							commitment: 'Lead frontend developer of the second wave',
							time: 'beginning of 2nd year',
							skills: 'Working with electron. Repairing and modernizing a project in poor technical condition',
						}, {
							title: 'Automotive',
							description: 'A website with reliable automotive quizzes',
							commitment: 'Additional frontend developer',
							time: 'End of 2023',
							skills: 'Working with T3Stack (Next, NextAuth, Prisma, Tailwind), working with advanced timers',
						},
					],
				},
			},
		},
		pl: {
			landing: {
				animatedWords: ['Cześć', 'Jestem', 'Filip', 'Web Developer'],
			},
			frontend: {
				titles: ['Frameworki', 'Dodatkowe technologie'],
				description: [
					'Frontendem zajmuje się od 2018 roku, z czego komercyjnie od 2021. Większość mojej przygody spędziłem pisząc kod w React, ale od 2022 mając większą kontrolę nad projektami szala przechyliła się na Vue (to portfolio jest napisane w Vue + Nuxt) a w szczególności SolidJS',
					'Podobna sytacja jest w przypadku CSS\'a gdzie zaczynałem pisząc go w czystym CSS\'sie, Boostrap\'ie i CSS-in-JS. Gdzie teraz pisze go głównie z wykozystaniem tailwind\'a i unocss\'a',
				],
			},
			projects: {
				title: 'Projekty',
				subtitles: ['Wewnętrzne projekty', 'Frontend Mentor'],
				licenceWarning: 'Niestety ze wzgedu na umowe nie moge pokazać kodu źrudłowego a w niektórych przypadkach nawet strony',
				toggleAllButton: ['Zamkni wszystkie', 'Otwórz wszystkie'],
				fmcodeProjects: {
					titles: {
						engagement: 'Poziom zaangażowania',
						time: 'Czas',
						commitment: 'Zdobyte umiejętności',
					},
					list: [
						{
							title: 'Letssport',
							description: 'Zarządzanie wydarzeniami sportowymi',
							commitment: 'Drugożędny frontend developer',
							time: 'Kilka miesięcy po rozpoczęciu pracy, trwał 2 lata',
							skills: 'Zarządzanie mapami, tworzenie dużych dynamicznych formularzy, praca z websocketem i grapthql, pierwsze kroki w SSR',
						}, {
							title: 'Światpaliw',
							description: 'Prognozy paliw i nie tylko',
							commitment: 'Pierwszożędny frontend developer',
							time: 'Pierwsza połowa roku 2023',
							skills: 'Głębrze zarządzanie SSR z SolidStart, tworzenie wykresów, pobieranie danych z niewygodnych (HTML) źródeł',
						}, {
							title: 'Projekt rzadowy',
							description: 'Zarządzanie dokumentami i projektami',
							commitment: 'Pierwszożędny fullstack developer',
							time: 'Pierwsza połowa roku 2023',
							skills: 'Tworzenie aplikacji Fullstack z wykożystaniem SolidStart, zarządzanie plikami binarnymi, okiełznanie narzędzi popularnych w rządowych aplikacjach',
						}, {
							title: 'Loximide',
							description: 'Kalkulator dla klimatyzacji',
							commitment: 'Pierwszożędny fullstack developer',
							time: 'Drugi kwartał roku 2023',
							skills: 'Zaawansowane uzycie ServerFunction, zaawanoswane uzycie wykresów, tworzenie pdf\'ów z puppeteer',
						}, {
							title: 'Nieruchomości',
							description: 'Aplikacja do narządzania nieruchomościami',
							commitment: 'Doskokowy frontend developer',
							time: 'Pierwszy projekt po rozpoczęciu pracy',
							skills: 'Nauka podstaw pracy z uzyciem wenwętrznego Gita i baremetal linuxa',
						}, {
							title: 'Bronisze',
							description: 'Rzarządzanie magazynami',
							commitment: 'Doskokowy frontend developer',
							time: 'Pierwszy rok pracy',
							skills: 'Uzycie bootstrap, praca z zespołem, mocne uzycie redux, CRA i class-based Reacta',
						}, {
							title: 'AI',
							description: 'GUI dla systemu wyszukującego zmian skórnych u pacjentów',
							commitment: 'Główny frontend developer drugiej fali',
							time: 'początek 2 roku pracy',
							skills: 'Praca z elektronem. Naprawianie i modernizacja projektu w złym stanie technicznym',
						}, {
							title: 'Automotive',
							description: 'Strona z żetelnymi quizami motoryzacyjnymi',
							commitment: 'Doskokowy frontend developer',
							time: 'Końcówka 2023',
							skills: 'Praca z T3Stack (Next, NextAuth, Prisma, Tailwind), praca z zaawansowanymi timerami',
						},
					],
				},
			},
		},
	},
}));
