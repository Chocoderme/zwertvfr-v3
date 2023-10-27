import { ref, computed } from "vue";
import { defineStore } from "pinia";

export interface Project {
  title: string;
  image?: string;
  type: string;
  tags: string[];
  summary: string;
  date?: Date;
  links?: { icon?: "github" | "npm" | "url"; url: string }[];
}

export interface Tag {
  label: string;
  values: string[];
}

export const useProjectStore = defineStore("project", () => {
  const projects = ref<Project[]>([
    {
      title: "Vue-useOptimistic",
      type: "Open-source Library",
      tags: ["Vue3", "Typescript", "Library", "Frontend"],
      summary:
        "Vue3 optimistic values' hook, Inspired by react useOptimistic hook",
      links: [
        { icon: "github", url: "https://github.com/shoko31/vue-useoptimistic" },
        { icon: "npm", url: "https://www.npmjs.com/package/vue-useoptimistic" },
      ],
      date: new Date(2023, 10),
      image: import.meta.env.BASE_URL + "portfolio/vue-useoptimistic.svg",
    },
    {
      title: "Memento Mori",
      type: "Website",
      tags: ["Vue3", "Typescript", "Pinia", "HTML/SCSS", "Frontend"],
      summary: "Simple vue3 memento mori calendar website",
      links: [
        { icon: "github", url: "https://github.com/shoko31/memento-mori" },
        { icon: "url", url: "https://zwertv.fr/memento-mori/" },
      ],
      date: new Date(2023, 10),
      image: import.meta.env.BASE_URL + "portfolio/memento-mori.png",
    },
    {
      title: "Personal website (V2)",
      type: "Website",
      tags: ["Vue3", "Typescript", "Pinia", "HTML/SCSS", "Frontend"],
      summary:
        "Second version of my personal website using newer front-end technologies and framework (Current)",
      links: [
        { icon: "github", url: "https://github.com/shoko31/zwertvfr-v3" },
        { icon: "url", url: "https://me.zwertv.fr" },
      ],
      date: new Date(2022, 11),
      image: import.meta.env.BASE_URL + "portfolio/personal-website-2.png",
    },
    {
      title: "Pathfinder",
      type: "Website",
      tags: ["Vue3", "Typescript", "Algorithm", "Frontend"],
      summary: "Simple vue3 made website to visualize pathfinding algorithms",
      links: [
        { icon: "github", url: "https://github.com/shoko31/pathfinder" },
        { icon: "url", url: "https://zwertv.fr/path-finder/" },
      ],
      date: new Date(2022, 8),
      image: import.meta.env.BASE_URL + "portfolio/pathfinder.png",
    },
    {
      title: "Kr Place",
      type: "Website",
      tags: ["Vue2", "Javascript", "Vuex", "Frontend"],
      summary: "Simple website to test your korean level",
      links: [
        { icon: "github", url: "https://github.com/shoko31/kr-place" },
        { icon: "url", url: "https://zwertv.fr/kr-place/#/" },
      ],
      date: new Date(2020, 3),
      image: import.meta.env.BASE_URL + "portfolio/krplace.png",
    },
    {
      title: "InKeeper Bot",
      type: "Discord bot",
      tags: ["Python", "Discord BOT", "Backend"],
      summary: "My first python discord bot with management and fun commands",
      links: [
        { icon: "github", url: "https://github.com/shoko31/InKeeperBot" },
      ],
      date: new Date(2019, 11),
      image: import.meta.env.BASE_URL + "portfolio/discord.png",
    },
    {
      title: "KoaEko",
      type: "Open-source Library",
      tags: [
        "Typescript",
        "Sequelize",
        "Koa",
        "Library",
        "Reflect-metadata",
        "Backend",
      ],
      summary:
        "Open-source KoaJS module allowing you to create REST routes using koa-router and decorators (typescript)",
      links: [
        { icon: "github", url: "https://github.com/Chocoderme/koa-eko" },
        { icon: "npm", url: "https://www.npmjs.com/package/koa-eko" },
      ],
      date: new Date(2018, 8),
      image: import.meta.env.BASE_URL + "portfolio/koaeko.png",
    },
    {
      title: "KoaEko Scope",
      type: "Open-source Library",
      tags: [
        "Typescript",
        "Sequelize",
        "Koa",
        "Library",
        "Reflect-metadata",
        "Backend",
      ],
      summary:
        "Open-source KoaJS module extending KoaEko to generate scoped and fielded API routes",
      links: [
        { icon: "github", url: "https://github.com/Chocoderme/koa-eko-scope" },
        { icon: "npm", url: "https://www.npmjs.com/package/koa-eko-scope" },
      ],
      date: new Date(2018, 8),
      image: import.meta.env.BASE_URL + "portfolio/koaekoscope.png",
    },
    {
      title: "KoaEko Doc",
      type: "Open-source Library",
      tags: [
        "Typescript",
        "Sequelize",
        "Koa",
        "Library",
        "Reflect-metadata",
        "Backend",
      ],
      summary:
        "Open-source KoaJS module extending KoaEko to generate online REST API documentation using decorators (typescript)",
      links: [
        { icon: "github", url: "https://github.com/Chocoderme/koa-eko-doc" },
        { icon: "npm", url: "https://www.npmjs.com/package/koa-eko-doc" },
      ],
      date: new Date(2018, 8),
      image: import.meta.env.BASE_URL + "portfolio/koaekodoc.png",
    },
    {
      title: "Cells Runner",
      type: "Game",
      tags: ["Unity", "C#", "Game Dev", "Game Jam"],
      summary:
        "Global Game Jam 2018 entry (January 2018) (theme: Transmission)",
      links: [
        {
          icon: "github",
          url: "https://github.com/shoko31/CellsRunner",
        },
        {
          icon: "url",
          url: "https://globalgamejam.org/2018/games/cells-runner",
        },
      ],
      date: new Date(2018, 1),
      image: import.meta.env.BASE_URL + "portfolio/cellsrunner.png",
    },
    {
      title: "Loki's Tale",
      type: "Game",
      tags: ["Unity", "C#", "Game Dev", "Game Jam"],
      summary:
        "Ludum Dare 40 entry (Décembre 2017) (theme: The more you have, the worst it becomes)",
      links: [
        {
          icon: "github",
          url: "https://github.com/shoko31/LokisTale",
        },
        {
          icon: "url",
          url: "https://chocoderme.itch.io/lokis-tale",
        },
      ],
      date: new Date(2017, 12),
      image: import.meta.env.BASE_URL + "portfolio/lokistale.png",
    },
    {
      title: "Personal website (V1)",
      type: "Website",
      tags: ["HTML/CSS", "Javascript", "Frontend"],
      summary: "First version of my personal website",
      links: [{ icon: "url", url: "https://me.zwertv.fr" }],
      date: new Date(2017, 10),
      image: import.meta.env.BASE_URL + "portfolio/website_vignette.png",
    },
    {
      title: "CerealSquad",
      type: "Game",
      tags: ["C#", "SFML.NET", "Game Dev"],
      summary:
        "Small local multiplayer game coded in 4 months using C# and SFML.NET",
      links: [
        { icon: "github", url: "https://github.com/shoko31/CerealSquad" },
      ],
      date: new Date(2016, 11),
      image: import.meta.env.BASE_URL + "portfolio/cerealsquad_vignette.png",
    },
    {
      title: "CerealSquad Terrain Builder",
      type: "Game tool",
      tags: ["C#", "SFML.NET", "Game Dev"],
      summary: "CerealSquad quick & easy terrain / room builder",
      links: [
        {
          icon: "github",
          url: "https://github.com/shoko31/CerealSquad/tree/dev/TerrainBuilder",
        },
      ],
      date: new Date(2016, 11),
      image:
        import.meta.env.BASE_URL +
        "portfolio/cerealsquad_terrainbuilder_vignette.png",
    },
    {
      title: "uTest",
      type: "Website",
      tags: ["PHP", "HTML/JS/CSS", "School project", "Frontend"],
      summary: "Epitech's student dedicated unit tests sharing platform",
      links: [
        {
          icon: "github",
          url: "https://github.com/shoko31/uTest",
        },
      ],
      date: new Date(2016, 7),
      image: import.meta.env.BASE_URL + "portfolio/utest_vignette.png",
    },
  ]);

  const tags = ref<Tag[]>([
    { label: "Vue", values: ["Vue", "Vue3", "Vue2", "Vue.js"] },
    { label: "Typescript", values: ["Typescript"] },
    { label: "Unity/C#", values: ["C#", "Unity"] },
    { label: "PHP", values: ["PHP"] },
    { label: "HTML/CSS", values: ["HTML", "CSS", "SASS", "SCSS"] },
    { label: "Frontend", values: ["Frontend"] },
    { label: "Backend", values: ["Backend"] },
    { label: "Library", values: ["Library"] },
  ]);
  const activeTags = ref<Tag[]>([]);

  const activeProjects = computed(() =>
    activeTags.value.length <= 0
      ? projects.value
      : projects.value.filter((p) =>
          p.tags
            .map((t) => t.toLowerCase())
            .some((t) =>
              activeTags.value.some((activeTag) =>
                activeTag.values
                  .map((v) => v.toLowerCase())
                  .some((v) => t.split("/").includes(v))
              )
            )
        )
  );

  return { projects, tags, activeTags, activeProjects };
});
