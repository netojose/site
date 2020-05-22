const React = require('react')

const Topic = require('../Topic')
const ExperiencesList = require('../ExperiencesList')

module.exports = () => (
    <Topic
        id="skills"
        title="Skills"
        description="I already worked on a lot of projects, with the most different technologies to solve the most different kind of problems, always trying to find who is the best technology to solve each problem. I'm also studying new technologies each week. So this list is in constant changing."
    >
        <ExperiencesList.Wrapper>
            <ExperiencesList.Item
                title="Programming/Markup/Stylesheet/Notation languages"
                description={[
                    'Javascript [ES5, ES6, ES7, ES8] (Browser and Node.js)',
                    'TypeScript',
                    'PHP',
                    'Dart',
                    'CSS3',
                    'JSON',
                    'XHTML',
                    'JSX'
                ]}
            />
            <ExperiencesList.Item
                title="Preprocessors/Static type checkers"
                description={['Flow', 'SASS', 'Compass', 'LESS']}
            />
            <ExperiencesList.Item
                title="Back-end - PHP frameworks & libraries"
                description={[
                    'Laravel',
                    'Lumen',
                    'CodeIgniter',
                    'Slim Framework',
                    'BotMan',
                    'Smarty',
                    'Twig',
                    'Swagger for PHP'
                ]}
            />
            <ExperiencesList.Item
                title="Back-end - Node.js frameworks & libraries"
                description={[
                    'Express',
                    'Puppeteer',
                    'Socket.IO',
                    'Sequelize',
                    'Swagger for Node.js',
                    'AdonisJs',
                    'Next.js',
                    'After.js',
                    'Gatsby',
                    'Pug',
                    'EJS'
                ]}
            />
            <ExperiencesList.Item
                title="Front-end- Frameworks & Libraries"
                description={[
                    'React',
                    'Redux',
                    'Vue.js',
                    'Vuex',
                    'jQuery',
                    'Axios',
                    'Lodash',
                    'Bootstrap',
                    'Materialize',
                    'Material-UI',
                    'Handlebars',
                    'Glamor',
                    'Glamorous',
                    'JSS',
                    'Styled components',
                    'Emotion'
                ]}
            />
            <ExperiencesList.Item
                title="Mobile - Frameworks & Libraries"
                description={['React Native', 'Flutter']}
            />
            <ExperiencesList.Item
                title="Linting/Code Quality Tool"
                description={['Eslint', 'JSLint', 'Standard JS', 'PHP_CodeSniffer']}
            />
            <ExperiencesList.Item
                title="Query languages"
                description={['SQL', 'ReQL', 'MongoDB Queries', 'GraphQL']}
            />
            <ExperiencesList.Item
                title="Databases"
                description={[
                    'MySQL',
                    'RethinkDB',
                    'MariaDB',
                    'PostgreSQL',
                    'MongoDB',
                    'Redis',
                    'MSSQL',
                    'SQLite'
                ]}
            />
            <ExperiencesList.Item
                title="Prototyping"
                description={['Figma', 'Zeplin', 'Adobe XD', 'Sketch', 'InVision']}
            />
            <ExperiencesList.Item
                title="Version control"
                description={['GIT', 'SVN', 'CVS']}
            />
            <ExperiencesList.Item
                title="Test tools"
                description={[
                    'Jest',
                    'Enzyme',
                    'Jasmine',
                    'PHPUnit',
                    'Selenium'
                ]}
            />
            <ExperiencesList.Item
                title="REST API description tool"
                description={['Swagger', 'Blueprint', 'Apiary']}
            />
            <ExperiencesList.Item
                title="CMS"
                description={['WordPress (plugins, themes and widgets)']}
            />
            <ExperiencesList.Item
                title="Dependency managers"
                description={['Composer', 'Yarn', 'Npm', 'Bower']}
            />
            <ExperiencesList.Item
                title="Module bundlers & Task runners"
                description={['Webpack', 'Gulp']}
            />
            <ExperiencesList.Item
                title="Work/Deployment environment"
                description={[
                    'Docker',
                    'Vagrant',
                    'Heroku',
                    'Digital Ocean',
                    'Linode',
                    'Generic shared hosts'
                ]}
            />
            <ExperiencesList.Item
                title="Others"
                description={[
                    'Babel',
                    'Storybook',
                    'REST',
                    'MVC',
                    'ORM',
                    'OOP',
                    'AWS (S3)',
                    'Functional programming',
                    'SOLID',
                    'Natural Language Processing',
                    'Scrum',
                    'Continuous Integration',
                    'Continuous Delivery',
                    'Progressive web apps',
                    'Reactive programming',
                    'Memcached',
                    'Responsive design',
                    'Web standards',
                    'Performance',
                    'Usability',
                    'Accessibility',
                    'SEO'
                ]}
            />
        </ExperiencesList.Wrapper>
    </Topic>
)
