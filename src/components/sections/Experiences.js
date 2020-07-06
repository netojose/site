const React = require('react')

const Topic = require('../Topic')
const ExperiencesList = require('../ExperiencesList')

module.exports = () => (
    <Topic
        id="experience"
        title="Experience"
        description="I already had the opportunity to work on awesome companies with awesome people."
    >
        <ExperiencesList.Wrapper>
            <ExperiencesList.Item
                title="Clevertech consultant - Front-end Engineer"
                subtitle="Clevertech"
                start="Jul, 2019"
                end="Present"
                description="Working on Clevertech clients, using React, Redux, and related technologies."
                image="/assets/images/exp-clevertech.jpg"
            />
            <ExperiencesList.Item
                title="Aubay consultant - Front-end Engineer"
                subtitle="TripAdvisor"
                start="Oct, 2018"
                end="Jul, 2019"
                description="Working on internal tools and projects for the hotel's segment, using React, Redux, and correlated technologies, migrating legacy technologies to a new stack, or adding new features on current products."
                image="/assets/images/exp-trip-advisor.jpg"
            />
            <ExperiencesList.Item
                title="Aubay consultant - Front-end Engineer"
                subtitle="OLX"
                start="Sep, 2017"
                end="Sep, 2018"
                description="Front End engineer at OLX, working on a product for premium sellers on a vertical platform focused on cars sales in some European countries (Standvirtual in Portugal, Autovit in Romania, and Otomoto on Poland). The challenge here was to maintain legacy software (monolithic architecture, classical MVC with PHP) and at the same time work with new technologies (SPA, PWA, microservices architecture, etc.), migrating parts of the product and keeping some points as a priority, like SEO."
                image="/assets/images/exp-olx.jpg"
            />
            <ExperiencesList.Item
                title="Tech Lead & Full Stack Developer"
                subtitle="Planedia"
                start="Jun, 2013"
                end="Jul, 2018"
                description="I worked on this startup since it was founded, working as a back-end, using PHP & Laravel. Sometime later, I switched for a front-end position, working with React & Redux. I also helped with the recruiting process to get new developers and taking technical decisions."
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
                description="I worked on the blogs team, using WordPress. Involved in dozens of projects, I created blogs and sites for soap operas, reality shows, news programs, journalists, auditorium programs, etc. My mission was creating themes, plugins, and widgets for different projects. Previously, the company has contracted external partners for creating his projects. I started on a new blogs team (I was the third member). At the end of the year, we were more than 20 members. There were no more external partners working on projects because the sites and blogs were created and maintained by our team."
                image="/assets/images/exp-record.jpg"
            />
            <ExperiencesList.Item
                title="Back-end Developer"
                subtitle="Grupo Ser Educacional"
                start="Oct, 2008"
                end="Feb, 2012"
                description="As a back-end developer, I worked on some educational software inside of this company. With more than 100.000 students around the country, the educational group needed software to the handle library books and books reservations, control financial data, students make enrolment,  paying his monthly tuition, entrance exams, etc."
                image="/assets/images/exp-ser-educacional.jpg"
            />
        </ExperiencesList.Wrapper>
    </Topic>
)
