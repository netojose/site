const React = require("react");

const Topic = require("../Topic");
const ExperiencesList = require("../ExperiencesList");

module.exports = () => (
  <Topic
    id="experience"
    title="Experience"
    description="I already had the opportunity to work on awesome companies with awesome people."
  >
    <ExperiencesList.Wrapper>
      <ExperiencesList.Item
        title="CTO"
        subtitle="Praquesair"
        start="Jan, 2022"
        end="Now"
        description="I was responsible for building 100% of API, and 75% of mobile apps (Android and IOS) for this startup. A marketplace for beauty and wellness used in Brazil."
        image="/assets/images/exp-praquesair.jpg"
      />
      <ExperiencesList.Item
        title="Tech Lead"
        subtitle="Sodexo"
        start="Oct, 2022"
        end="Oct, 2023"
        description="Working at solutions for food tech and services fields, maintaining web and mobile native applications used across the globe. Helping to improve and migrate legacy code, implementing new features according to product team requirements."
        image="/assets/images/exp-sodexo.jpg"
      />
      <ExperiencesList.Item
        title="Front-end Engineer"
        subtitle="BoostUp"
        start="Jan, 2022"
        end="Aug, 2022"
        description="Creating new features for BoostUp product (a B2B product focused to provide accurate forecasts for companies, based on AI). I helped to create advanced and highly customizable dashboards, tables, widgets and charts, with international teams across different time zones."
        image="/assets/images/exp-boostup.jpg"
      />
      <ExperiencesList.Item
        title="CTO"
        subtitle="Delloop"
        start="Sep, 2019"
        end="Oct, 2022"
        description="Building the Delloop product with TypeScript and GraphQL, and the mobile app with Flutter> Also coordinating the web team."
        image="/assets/images/exp-delloop.jpg"
      />
      <ExperiencesList.Item
        title="Aubay consultant - Front-end Engineer"
        subtitle="TripAdvisor"
        start="Oct, 2018"
        end="Aug, 2019"
        description="Working on internal tools and projects for the hotel's segment, using React, Redux, and correlated technologies, migrating legacy technologies to a new stack, or adding new features on current products."
        image="/assets/images/exp-trip-advisor.jpg"
      />
      <ExperiencesList.Item
        title="Aubay consultant - Software Engineer"
        subtitle="OLX"
        start="Sep, 2017"
        end="Sep, 2018"
        description="Software Engineer at OLX, working on a product for premium sellers on a vertical platform focused on cars sales in some European countries (Standvirtual in Portugal, Autovit în România, and Otomoto in Poland). The challenge here was to maintain legacy software (monolithic architecture, classical MVC with PHP) and at the same time work with new technologies (SPA, SSR, PWA, microservices architecture, etc.), migrating parts of the product from the legacy to the new platform, keeping in mind important items, like SEO."
        image="/assets/images/exp-olx.jpg"
      />
      <ExperiencesList.Item
        title="Tech Lead & Full Stack Developer"
        subtitle="Planedia"
        start="Jun, 2013"
        end="Jul, 2017"
        description="I worked on this startup since it was founded, working as a back-end, using Node.js/express/MongoDB, PHP/Laravel/MySQL and sometimes, at the front-end position, working with React & Redux. I also helped with the recruiting process to get new developers and make technical decisions."
        image="/assets/images/exp-planedia.jpg"
      />
      <ExperiencesList.Item
        title="Front-end Engineer"
        subtitle="Liferay"
        start="Mar, 2012"
        end="Feb, 2013"
        description="Allocated inside a Liferay customer (Leroy Merlin Brazil), I helped to upgrade the customer website, applying the most recent Liferay features and the Liferay best practices, and to convert it on e-commerce portal, able to sell more than 80.000 different products."
        image="/assets/images/exp-liferay.jpg"
      />
      <ExperiencesList.Item
        title="Front-end Engineer"
        subtitle="Record TV"
        start="Jan, 2011"
        end="Mar, 2012"
        description="I worked on the blogs team, using WordPress. Involved in dozens of projects, I created blogs and sites for soap operas, reality shows, news programs, journalists, auditorium programs, etc. My mission was creating themes, plugins, and widgets for different projects. Previously, the company has contracted external partners for creating his projects. I started on a new blog team (I was the third member). At the end of the year, we had more than 20 members. There were no more external partners working on projects because the sites and blogs were created and maintained by our team."
        image="/assets/images/exp-record.jpg"
      />
      <ExperiencesList.Item
        title="Back-end Developer"
        subtitle="Grupo Ser Educacional"
        start="Oct, 2008"
        end="Feb, 2012"
        description="As a back-end developer, I worked on some educational software inside of this company. With more than 100.000 students around the country, the educational group needed software to handle library books and book reservations, control financial data, students make enrollment, paying his monthly tuition, entrance exams, etc."
        image="/assets/images/exp-ser-educacional.jpg"
      />
    </ExperiencesList.Wrapper>
  </Topic>
);
