import { ref, computed, type Component } from "vue";
import { defineStore } from "pinia";

export interface Project {
  title: string;
  image?: string;
  type: string;
  tags: string[];
  summary: string;
  date?: Date;
  links?: { icon?: "github" | "url"; url: string }[];
}

export interface Tag {
  label: string;
  values: string[];
}

export const useProjectStore = defineStore("project", () => {
  const projects = ref<Project[]>([
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
      title: "CV en ligne (V2)",
      type: "Website",
      tags: ["Vue3", "Typescript", "Pinia", "HTML/SCSS", "Frontend"],
      summary: "Mon site personnel (version actuelle)",
      links: [
        { icon: "github", url: "https://github.com/shoko31/zwertvfr-v3" },
        { icon: "url", url: "https://me.zwertv.fr" },
      ],
      date: new Date(2022, 11),
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
      tags: ["Typescript", "Sequelize", "Koa", "Reflect-metadata", "Backend"],
      summary:
        "Un module KoaJS open-source pour générer des routes REST en utilisant koa-router et les decorators (typescript)",
      links: [{ icon: "github", url: "https://github.com/Chocoderme/koa-eko" }],
      date: new Date(2018, 8),
      image: import.meta.env.BASE_URL + "portfolio/koaeko.png",
    },
    {
      title: "KoaEko Scope",
      type: "Open-source Library",
      tags: ["Typescript", "Sequelize", "Koa", "Reflect-metadata", "Backend"],
      summary:
        "Un module KoaEko open-source permettant la génération de routes API scopées et fieldées",
      links: [
        { icon: "github", url: "https://github.com/Chocoderme/koa-eko-scope" },
      ],
      date: new Date(2018, 8),
      image: import.meta.env.BASE_URL + "portfolio/koaekoscope.png",
    },
    {
      title: "KoaEko Doc",
      type: "Open-source Library",
      tags: ["Typescript", "Sequelize", "Koa", "Reflect-metadata", "Backend"],
      summary:
        "Un module KoaEko open-source permettant la génération d'une documation API en ligne en utilisant les decorators",
      links: [
        { icon: "github", url: "https://github.com/Chocoderme/koa-eko-doc" },
      ],
      date: new Date(2018, 8),
      image: import.meta.env.BASE_URL + "portfolio/koaekodoc.png",
    },
    {
      title: "Cells Runner",
      type: "Game",
      tags: ["Unity", "C#", "Game Dev", "Game Jam"],
      summary:
        "Participation à la Global Game Jam 2018 (Janvier 2018) (thème: Transmission)",
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
        "Participation à la Ludum Dare 40 (Décembre 2017) (thème: Plus vous en avez, pire c'est)",
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
      title: "CV en ligne (V1)",
      type: "Website",
      tags: ["HTML/CSS", "Javascript", "Frontend"],
      summary: "Premiere version de mon site personnel",
      links: [{ icon: "url", url: "https://me.zwertv.fr" }],
      date: new Date(2017, 10),
      image: import.meta.env.BASE_URL + "portfolio/website_vignette.png",
    },
    {
      title: "CerealSquad",
      type: "Game",
      tags: ["C#", "SFML.NET", "Game Dev"],
      summary: "Mini-jeu multijoueur développé en 4 mois en C# avec SFML.NET",
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
      summary: "Constructeur de terrain pour le mini-jeu CerealSquad",
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
      summary:
        "Plateforme de partage de tests unitaires pour les étudiants d'Epitech",
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
    { label: "HTML", values: ["HTML"] },
    { label: "Frontend", values: ["Frontend"] },
    { label: "Backend", values: ["Backend"] },
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
