<template>
	<div>
		<v-container>
			<transition name="fade">
				<v-row justify="center">
					<v-col cols="12" md="10">
						<h3 class="my-3 display-1">My Skills</h3>
						<div class>
							<template v-for="(skill, i) in mySkills">
								<v-avatar size="50" color="primary" :key="i" dark class="mr-2 mb-2">
									<v-tooltip bottom>
										<template v-slot:activator="{on}">
											<v-icon large color="white" v-on="on">mdi-{{skill}}</v-icon>
										</template>
										<span>
											{{skill.split('language-')[1] ?
											skill.split('language-')[1] :
											skill == 'database' ?
											'mongodb' : skill}}
										</span>
									</v-tooltip>
								</v-avatar>
							</template>
						</div>
					</v-col>
					<v-col cols="12" md="10">
						<h3 class="mt-3 mb-5 display-1">Recent Work</h3>
						<v-list three-line>
							<template v-for="project in projects">
								<v-list-item :key="project.name" :href="project.link" target="_blank" class="pl-0">
									<v-list-item-content>
										<v-list-item-title class="text-uppercase">{{project.name}}</v-list-item-title>
										<v-list-item-subtitle class="primary--text">{{project.link}}</v-list-item-subtitle>
										<v-list-item-subtitle>{{project.about}}</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
							</template>
						</v-list>
					</v-col>
				</v-row>
			</transition>
		</v-container>
	</div>
</template>

<script>
export default {
	computed: {
		showUi: () => {
			return true;
		},
		mySkills() {
			return [
				"nodejs",
				"language-javascript",
				"language-php",
				"vuejs",
				"firebase",
				"jquery",
				"language-html5",
				"language-css3",
				"wordpress",
				"vuetify",
				"database",
			];
		},
		projects() {
			return [
				{
					name: "Lashr",
					link: "https://getlashr.com",
					about: "Find and book personal services",
				},
				{
					name: "Beyound Graphics Academy",
					link: "https://beyondgraphicsacademy.com.ng",
					about: "Website for a top-notch Graphics design academy",
				},
				{
					name: "Voteryte",
					link: "https://voteryte.com",
					about: "Decentralized voting app built on the blockchain",
				},
				{
					name: "Hotelsmart",
					link: "https://hotelsmart.com.ng",
					about: "Online OTA and Hotel management system",
				},
				{
					name: "Docuhelp",
					link: "https://github.com/godwwinpeace22/docuhelp",
					about:
						"Free and opensource knowledgebase/self-service widget in Javascript with Markdown support.",
				},
				{
					name: "Nigerian cities and attraction",
					link: "https://www.npmjs.com/package/nigerian-cities-and-attractions",
					about:
						"An api to get a comprehensive list of major cities in Nigeria and their attractions",
				},
				{
					name: "QView.ai",
					link: "https://qview.ai",
					about: "Push and email notifications for qview.ai",
				},
				{
					name: "Styleblog",
					link: "https://github.com/godwwinpeace22/styleblog",
					about: "A simple cms in PHP",
				},
				{
					name: "TSG Media",
					link: "https://thesaintsgathering.com.ng",
					about: "Interface for TSG media files",
				},
				{
					name: "Lighthouse Parish",
					link: "http://rccglighthouse.com.ng/",
					about: "RCCG Lighthouse Parish website",
				},
			];
		},
	},
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>