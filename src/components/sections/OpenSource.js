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
                link="https://github.com/netojose/laravel-bootstrap-4-forms"
                description="Laravel 5 package forms for bootstrap 4"
            />
            <ExperiencesList.Item
                title="Laravel 5 API REST explorer"
                link="https://github.com/netojose/laravel-api-explorer"
                description="API explorer for laravel applications"
            />
            <ExperiencesList.Item
                title="Google Maps Places Autocomplete React component"
                link="https://github.com/netojose/react-google-places-typeahead"
                description="A React component to build a customized UI for Google Maps Places Autocomplete"
            />
            <ExperiencesList.Item
                title="React Select date picker"
                link="https://github.com/netojose/react-select-datepicker"
                description="A simple React date picker besed on selet fields"
            />
            <ExperiencesList.Item
                title="React Modal"
                link="https://github.com/netojose/react-modal"
                description="A lightweight dialog component for React"
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
