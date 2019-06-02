const React = require('react')

const Topic = require('../Topic')
const ExperiencesList = require('../ExperiencesList')

module.exports = () => (
    <Topic
        id="courses"
        title="Courses"
        description="I know, is not a lot and they are unfinished, but I can't learn using the traditional courses (I'm trying, but the applied methodologies not helping). But, this not means I not study. I do this every day, but using my way. I try to learn something new every single day."
    >
        <ExperiencesList.Wrapper>
            <ExperiencesList.Item
                title="Bachelor of Computer Science"
                subtitle="Faculdade dos Guararapes"
                start="Jul, 2006"
                end="Dropout"
            />
            <ExperiencesList.Item
                title="Mechatronics technician"
                subtitle="ETEPAM"
                start="Jan, 2008"
                end="Dropout"
            />
            <ExperiencesList.Item
                title="Computer Technician"
                subtitle="IFMA"
                start="Jul, 2006"
                end="Dropout"
            />
            <ExperiencesList.Item
                title="Electronics Technician "
                subtitle="IFMA"
                start="Jul, 2004"
                end="Dropout"
            />
        </ExperiencesList.Wrapper>
    </Topic>
)
