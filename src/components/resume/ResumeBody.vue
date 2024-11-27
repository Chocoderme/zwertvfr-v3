<template>
  <div class="resume-body">
    <ResumeSection title="CAREER SUMMARY">
      <p>
        Bi-langual full-stack developer with 7+ years of professional experience
        in France and South Korea. Very familiar with the Front-End environment
        and Vue3 ecosystem. Worked both solo and as part of a team. Passionate,
        curious, eager to learn and transmit, I also have experience in working
        with and teaching junior developers.<br />
        I am now looking to consolidate my knowledges and expand my Back-End and
        management skills.
      </p>
    </ResumeSection>
    <div class="resume-body-2col">
      <ResumeSection title="WORK EXPERIENCE">
        <ResumeTimeline>
          <ResumeTimelineElement v-for="(workExperience, i) of workExperiences" :key="i" v-bind="workExperience">
            <div class="resume-work-experience">
              <summary>{{ workExperience.summary }}</summary>
              <h4 v-if="workExperience.achievements">Achievements:</h4>
              <ul v-if="workExperience.achievements" class="resume-work-experience-achievements">
                <li v-for="(achievement, i) of workExperience.achievements" :key="i">
                  {{ achievement }}
                </li>
              </ul>
              <h4 v-if="workExperience.technologies">Technologies used:</h4>
              <ul v-if="workExperience.technologies" class="resume-work-experience-technologies">
                <li v-for="(technology, i) of workExperience.technologies" :key="i">
                  <Badge style="font-size: 0.9em">{{ technology }}</Badge>
                </li>
              </ul>
            </div>
          </ResumeTimelineElement>
        </ResumeTimeline>
      </ResumeSection>
      <div>
        <ResumeSection title="SKILLS & TOOLS">
          <div>
            <ResumeSkillSection title="Hard Skills" :skills="hardSkills" type="bar" />
            <ResumeSkillSection title="Soft Skills" :skills="softSkills" type="chip" />
          </div>
        </ResumeSection>
        <ResumeSection title="EDUCATION">
          <ResumeEducation :items="educationItems" />
        </ResumeSection>
        <ResumeSection title="LANGUAGE">
          <ResumeLanguages :languages="languages" />
        </ResumeSection>
        <ResumeSection title="INTERESTS">
          <div>
            {{ hobbies.join(", ") }}
          </div>
        </ResumeSection>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Skill } from "./ResumeSkillSection.vue";
import type { TimelineElement } from "./ResumeTimelineElement.vue";
import type { ResumeEducationItem } from "./ResumeEducation.vue";

type WorkExperience = TimelineElement & {
  summary?: string;
  achievements?: string[];
  technologies?: string[];
};

const workExperiences: WorkExperience[] = [
  {
    name: "Front-end Developer",
    location: { name: "3i - 쓰리아이", country: "Korea" },
    date: "Sept. 2021 - Apr. 2024",
    summary:
      "Part of a small 4~7-member team, I actively participated in the migration of several Vue2  projects to Vue3, in the development of new tools, libraries and products in typescript and Vue3 and in documenting existing projects. Additionally, I took part in day to day activities and missions.",
    achievements: [
      "Migrated existing products from Vue2 to Vue3.",
      "Planned and developped company's video meeting product.",
      "Built a set of tools to help/improve cowokers daily work&life (CLI, typedoc-vuepress, Slack bot, QA testing tools, FIFA 2022...).",
      "Migrated all front-end projects (30+), CICD pipelines and webhooks.",
      "Designed and developed libraries to simplify FE projects development (core logic, vue components, integration api).",
      "Maintain and develop features for company's core THREE.JS module.",
      "Improved company's workflow: branching stategy, git cz, PR...",
      "Side missions: job interviews, AWE exposition, 3D logo, juniors mentoring...",
    ],
    technologies: [
      "Vue.JS",
      "Typescript",
      "Pinia",
      "SASS",
      "Vite",
      "ThreeJS",
      "Unity3D",
      "Twilio",
      "NodeJS",
    ],
  },
  {
    name: "Full-stack Developer",
    location: { name: "Dell technologies", country: "Korea" },
    date: "Jan. 2020 - Sept. 2021",
    summary:
      "Hired as a full stack developer consultant, I worked on Samsung's big data transformation project. In a team of 5~8 people, I participed in the design and implementation of big data services. Pro active, I also suggested, implemented and deployed several custom tools now used by Samsung engineers to visualize and monitor their systems.",
    achievements: [
      "Research and implement an S3-like API using Java spring boot.",
      "Implement a JS worker based runtime client side algorithm to generate graph showing thousands of micro-services status, their relationship and impacts on other services in case of a crash.",
      "Vue2 interface to control the micro-services graph and alarm system (email, sms, etc..) based on user defined rules (CPU threshold, API healthcheck, etc..).",
      "Vue2 admin and user interface to visualize, manage, launch, stop/kill, get results of single-threaded and multi-threaded cloud python computation scripts, run queue, user quotas...",
      "Unit tests for developed products with Java spring boots.",
      "UI/UX Consulting activities on client's internal projects.",
    ],
    technologies: [
      "Vue.JS",
      "Typescript",
      "Vuex",
      "ThreeJS",
      "Java Spring Boot",
      "CrateDB",
      "Redis",
      "Kafka",
    ],
  },
  {
    name: "Full-stack Developer",
    location: { name: "Self Employed", country: "France" },
    date: "Oct. 2017 - Jan. 2020",
    summary:
      "To broaden my knowledge beyond the developer position, I decided to create my company and work as a freelancer. For more than 2 years, I learned how to reach to new customers, to listen to their needs, to suggest and adapt new or existing solutions to their needs, to plan and estimate development tasks, to deliver and to handle possible delays.",
    achievements: [
      "Conception and development of a cross-platform mobile application using IONIC2 framework.",
      "Blog type custom website linked with Facebook feed using Facebook API.",
      "2 party games using Unity3D",
      "Personal open source project : KoaJS API documentation generator.",
      "Listen and understand customer needs and suggest suitable solutions.",
    ],
    technologies: ["Vue.JS", "Vuex", "Ionic", "KoaJS", "Unity3D", "NodeJS"],
  },
  {
    name: "Full-stack Developer (Intern)",
    location: { name: "CapGemini", country: "France" },
    date: "Apr. 2018 - Sep. 2018",
    summary:
      "Accomplishment of my master degree, I joined the C# development team in CapGemini FRANCE. As a junior, I mainly worked on company's internal tools and projects, and learned a lot from my peers. As a showed progress and got more autonomous in my work, my team's confidence in my stated to grow. At this time, I got to participate for the first time in a large-scaled client's development solution project.",
    achievements: [
      "Developed NEXITY's new marketing campain management platform (front-end & back-end).",
      "Write technical documents / update existing ones.",
      "Customer assistance & customer's developers support.",
      "Designed and developed a new company co-working space in Angular 6 (with back office).,",
    ],
    technologies: ["C#", "ASP.NET", "Angular6", "NodeJS"],
  },
  {
    name: "Full-stack Developer (Intern)",
    location: { name: "Digital Street", country: "France" },
    date: "Apr. 2016 - Jul. 2016",
    summary:
      "As part of a 4 people start-up company, I was in charge of the web and android projects. I decided to use technologies and frameworks that I was familiar with : Angular, Ionic and Java. This internship was part of my bachelor degree validation exam.",
    achievements: [
      "Interactive platform dedicated to online influencers to generate their own custom mobile app (AngularJS).",
      "Migration of 2 iOS apps to Android.",
      "Designed and developed a mobile webview app using IONIC1 in solo.",
      "Mockups and business proposal document.",
      "Technical and end-user documentation",
    ],
    technologies: ["AngularJS", "Ionic1", "Java Android", "Draw.IO"],
  },
  {
    name: "Developer (Intern)",
    location: { name: "Dupont Restauration", country: "France" },
    date: "Jul. 2014 - Dec. 2014",
    summary:
      "First internship. I work for Dupont Restauration as a Junior developer. Using the company's technologies, I automated the company's reporting process and migrated old ACCESS database data to a new ORACLE app.",
  },
];

const hardSkills: Skill[] = [
  { name: "Vue.JS", level: "expert" },
  { name: "Typescript", level: "expert" },
  { name: "HTML,CSS/SASS", level: "expert" },
  { name: "Node.JS/Express.JS", level: "advanced" },
  { name: "C#", level: "intermediate" },
  { name: "Unity", level: "advanced" },
  { name: "Ionic", level: "intermediate" },
];

const softSkills: Skill[] = [
  { name: "Problem solving" },
  { name: "Effective communication" },
  { name: "Adaptability" },
  { name: "Continuous learning" },
  { name: "Leadership" },
  { name: "Decision making" },
  { name: "Mentoring" },
];

const educationItems: ResumeEducationItem[] = [
  {
    name: "EPITECH",
    description: "Bachelor & Master degree in I.T.",
    date: "Oct. 2013 - June 2018",
  },
  {
    name: "KEIMYUNG UNIVERSITY (계명대학교)",
    description: "Exchange student in South Korea – video-game specialization",
    date: "Sept. 2016 - June 2017",
  },
  {
    name: "HANYANG UNIVERSITY (한양대 어학당)",
    description: "Korean language study",
    date: "Dec. 2018 - June 2019",
  },
];

const languages = [
  { name: "French", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Korean", level: "Novice" },
];

const hobbies = ["Basket-ball", "Hiking", "Climbing", "Travel", "Video-games"];
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";
@use "sass:math";

.resume-body {
  position: relative;
  padding: 2em;
  background-color: map.get($colors, "white");
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s ease-in-out;

  .resume-section {
    margin-bottom: 1em;
  }

  .resume-body-2col {
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2em;

    &>* {
      position: sticky;
      bottom: 0;
      align-self: self-end;
    }
  }

  .resume-work-experience {
    h4 {
      font-size: 1em;
      padding: 0;
      margin: 1em 0 0.5em 0;
      font-weight: bold;
    }

    .resume-work-experience-achievements {
      list-style: disc;
      padding-left: 1.2em;
    }

    .resume-work-experience-technologies {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
      gap: 0.6em;
      list-style: none;
    }

    .badge {
      background-color: map.get($text-colors, "title", "base");
    }
  }
}

@container (max-width: 1299px) {
  .resume-body {
    .resume-body-2col {
      grid-template-columns: 1fr;

      &>* {
        position: relative;
        bottom: unset;
        align-self: auto;
      }
    }
  }
}


html.dark {
  .resume-body {
    background-color: mix(map.get($colors, "black"),
        map.get($colors, "white"),
        math.percentage(math.div(1, 10)));
  }
}
</style>
