const React = require('react')

const Topic = require('../Topic')
const ExperiencesList = require('../ExperiencesList')

module.exports = () => (
    <Topic
        id="open-source"
        title="Open Source"
        description="Since my career's beginning, I always used open source tools. So, why not to contribute with some open source tools?"
    >
        <ExperiencesList.Wrapper>
            <ExperiencesList.Item
                title="Laravel bootstrap forms 4"
                link="https://google.com"
                description="Are you working on something great? I would love to help"
            />
            <ExperiencesList.Item
                title="Laravel 5 API REST explorer"
                link="https://github.com/netojose/laravel-api-explorer"
                description="API explorer for laravel applications"
            />
            <ExperiencesList.Item
                title="My site"
                link="https://github.com/netojose/site"
                description="Source code used for this webSource code for my personal website"
            />
            <ExperiencesList.Item
                title="Docker environment for Lumen (micro-framework by Laravel)"
                link="https://github.com/netojose/docker-lumen"
                description="Docker orchestration provisioning all necessary tools for work with Lumen"
            />
            <ExperiencesList.Item
                title="Laravel 4 Bing Translation"
                link="https://github.com/netojose/laravel-4-bing-translation"
                description="Translate texts using Bing API"
            />
        </ExperiencesList.Wrapper>
    </Topic>
)
