const React = require("react");

const Topic = require("../Topic");
const ExperiencesList = require("../ExperiencesList");

module.exports = () => (
  <Topic
    id="skills"
    title="Skills"
    description="I already worked on a lot of projects, with the most different technologies to solve the most different kinds of problems, always trying to find who is the best technology to solve each problem. I'm also studying new technologies each week. So this list is in constant changing."
  >
    <ExperiencesList.Wrapper>
      <ExperiencesList.Item
        title="Artificial Intelligence"
        description={["OpenAI", "Gemini", "Wit.ai", "Dify.AI"]}
      />
      <ExperiencesList.Item
        title="Programming/Markup/Stylesheet languages"
        description={[
          "Javascript (Browser and Node.js)",
          "TypeScript",
          "PHP",
          "Python",
          "Dart",
          "CSS3",
          "XHTML",
          "JSX/TSX",
        ]}
      />
      <ExperiencesList.Item
        title="Front-end- Frameworks & Libraries"
        description={[
          "React",
          "React Query",
          "React Router",
          "TanStack Router",
          "React Hook Form",
          "Zod",
          "Zustand",
          "Redux",
          "Jotai",
          "Vue.js",
          "Vuex",
          "jQuery",
          "Axios",
          "Radash",
          "Lodash",
          "i18next",
          "date-fns",
          "Ant Design",
          "Bootstrap",
          "Material-UI",
          "Handlebars",
          "Panda CSS",
          "Styled components",
          "Emotion",
          "Sass",
          "Tailwind CSS",
        ]}
      />
      <ExperiencesList.Item
        title="Back-end - Node.js frameworks & libraries"
        description={[
          "NestJS",
          "Express",
          "TypeORM",
          "Prisma",
          "Sequelize",
          "TypeGraphQL",
          "Puppeteer",
          "Bull & BullMQ",
          "class-validator",
          "AdonisJs",
          "Express",
          "Socket.IO",
          "Ts.ED",
          "Next.js",
          "Gatsby",
          "Pug",
          "EJS",
          "Swagger",
        ]}
      />
      <ExperiencesList.Item
        title="Back-end - PHP frameworks & libraries"
        description={[
          "Laravel",
          "CodeIgniter",
          "Slim Framework",
          "Twig",
          "Swagger for PHP",
        ]}
      />
      <ExperiencesList.Item
        title="Back-end - Python frameworks & libraries"
        description={["FastAPI"]}
      />
      <ExperiencesList.Item
        title="Mobile - Frameworks & Libraries"
        description={["React Native", "Flutter"]}
      />
      <ExperiencesList.Item
        title="Communication protocols (construction & consumption)"
        description={["REST", "GraphQL", "WebSocket", "SSE", "gRPC"]}
      />
      <ExperiencesList.Item
        title="Databases"
        description={[
          "MySQL",
          "RethinkDB",
          "MariaDB",
          "PostgreSQL",
          "MongoDB",
          "MSSQL",
          "SQLite",
          "Supabase",
        ]}
      />
      <ExperiencesList.Item
        title="Work/Deployment environment"
        description={[
          "Docker",
          "Heroku",
          "Digital Ocean",
          "Linode",
          "Generic shared hosts",
        ]}
      />
      <ExperiencesList.Item
        title="AWS services"
        description={["S3", "EC2", "SES"]}
      />
      <ExperiencesList.Item
        title="Test tools"
        description={[
          "Cypress",
          "Jest",
          "React Testing Library",
          "Vitest",
          "Enzyme",
          "PHPUnit",
        ]}
      />
      <ExperiencesList.Item
        title="Module bundlers"
        description={["Vite", "Webpack"]}
      />
      <ExperiencesList.Item
        title="Version control"
        description={["GIT", "SVN"]}
      />
      <ExperiencesList.Item
        title="Prototyping"
        description={["Figma", "Zeplin", "Adobe XD"]}
      />
      <ExperiencesList.Item
        title="CMS"
        description={["WordPress (plugins, themes and widgets)"]}
      />
      <ExperiencesList.Item
        title="Others"
        description={[
          "Git",
          "Eslint",
          "Redis",
          "Babel",
          "Storybook",
          "MVC",
          "ORM",
          "OOP",
          "AWS (S3)",
          "Functional programming",
          "SOLID",
          "Natural Language Processing",
          "Scrum",
          "Continuous Integration",
          "Continuous Delivery",
          "Progressive web apps",
          "Reactive programming",
          "Memcached",
          "Responsive design",
          "Web standards",
          "Performance",
          "Usability",
          "Accessibility - a11y",
          "SEO",
        ]}
      />
    </ExperiencesList.Wrapper>
  </Topic>
);
