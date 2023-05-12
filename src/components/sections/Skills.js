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
        title="Programming/Markup/Stylesheet/Notation languages"
        description={[
          "Javascript [ES5, ..., ESNext] (Browser and Node.js)",
          "TypeScript",
          "PHP",
          "Dart",
          "CSS3",
          "JSON",
          "XHTML",
          "JSX/TSX",
        ]}
      />
      <ExperiencesList.Item
        title="Back-end - Node.js frameworks & libraries"
        description={[
          "Express",
          "Puppeteer",
          "Socket.IO",
          "TypeORM",
          "Prisma",
          "Sequelize",
          "TypeGraphQL",
          "NestJS",
          "AdonisJs",
          "Ts.ED",
          "Next.js",
          "After.js",
          "Gatsby",
          "Pug",
          "EJS",
          "Swagger for Node.js",
        ]}
      />
      <ExperiencesList.Item
        title="Back-end - PHP frameworks & libraries"
        description={[
          "Laravel",
          "Laravel - Inertia",
          "CodeIgniter",
          "Slim Framework",
          "Twig",
          "Swagger for PHP",
        ]}
      />
      <ExperiencesList.Item
        title="API construction & consumption"
        description={["REST", "GraphQL"]}
      />
      <ExperiencesList.Item
        title="Query languages"
        description={["GraphQL", "SQL", "ReQL", "MongoDB Queries"]}
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
        ]}
      />
      <ExperiencesList.Item
        title="Work/Deployment environment"
        description={[
          "Docker",
          "Vagrant",
          "Heroku",
          "Digital Ocean",
          "Linode",
          "Generic shared hosts",
        ]}
      />
      <ExperiencesList.Item
        title="Test tools"
        description={[
          "Cypress",
          "Jest",
          "React Testing Library",
          "Enzyme",
          "PHPUnit",
        ]}
      />
      <ExperiencesList.Item
        title="Dependency managers"
        description={["Yarn", "Npm", "Composer"]}
      />
      <ExperiencesList.Item
        title="Module bundlers & Task runners"
        description={["Webpack", "Vite", "Gulp"]}
      />
      <ExperiencesList.Item
        title="Version control"
        description={["GIT", "SVN", "CVS"]}
      />
      <ExperiencesList.Item
        title="Preprocessors/Static type checkers"
        description={["Flow", "SASS", "Compass", "LESS"]}
      />
      <ExperiencesList.Item
        title="Front-end- Frameworks & Libraries"
        description={[
          "React",
          "Redux",
          "Zustand",
          "Vue.js",
          "Vuex",
          "jQuery",
          "Axios",
          "Lodash",
          "Bootstrap",
          "Materialize",
          "Material-UI",
          "Handlebars",
          "Glamor",
          "Glamorous",
          "JSS",
          "Styled components",
          "Emotion",
          "Styletron",
          "Stitches",
        ]}
      />
      <ExperiencesList.Item
        title="Mobile - Frameworks & Libraries"
        description={["React Native", "Flutter"]}
      />
      <ExperiencesList.Item
        title="Linting/Code Quality Tool"
        description={["Eslint", "Standard JS", "PHP_CodeSniffer"]}
      />
      <ExperiencesList.Item
        title="Prototyping"
        description={["Figma", "Zeplin", "Adobe XD", "InVision"]}
      />
      <ExperiencesList.Item
        title="CMS"
        description={["WordPress (plugins, themes and widgets)"]}
      />
      <ExperiencesList.Item
        title="Others"
        description={[
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
