const React = require("react");
const { css } = require("glamor");

const Dl = require("../Dl");
const Section = require("../Section");
const Grid = require("../Grid");
const ButtonLink = require("../ButtonLink");
const { colors } = require("../../variables");

const BREAKPOINT = "@media(max-width: 560px)";

module.exports = () => (
  <Section id="hello">
    <Grid.Row
      styles={{
        [BREAKPOINT]: {
          flexDirection: "column",
        },
      }}
    >
      <Grid.Column
        styles={{
          width: "30%",
          textAlign: "center",
          [BREAKPOINT]: {
            width: "100%",
          },
        }}
      >
        <img
          src={`/assets/images/me.jpg?v=${Date.now()}`}
          alt="José Neto"
          draggable="false"
          className={css({
            borderRadius: "50%",
            border: `solid 1px ${colors.accent}`,
            maxWidth: 300,
            width: "100%",
            "@media print": {
              maxWidth: 100,
            },
          })}
        />
      </Grid.Column>
      <Grid.Column
        styles={{
          width: "70%",
          [BREAKPOINT]: {
            width: "100%",
          },
        }}
      >
        <h2
          className={css({
            margin: 0,
            fontSize: 36,
            lineHeight: 1.25,
            " &:after": { content: ".", color: colors.primary },
            "@media print": {
              " &:after": { content: "''" },
            },
          })}
        >
          I am José Neto
        </h2>
        <p>
          I'm a <strong>Software Engineer</strong> located in Lisbon, Portugal.
          Passionate web developer, with over 16 years of experience.
        </p>
        <Dl
          items={[
            [
              "Email",
              <a href="mailto:contact@joseneto.dev">contact@joseneto.dev</a>,
            ],
            ["Phone", <a href="tel:+351 935 281 144">+351 935 281 144</a>],
            ["GitHub", <a href="https://github.com/netojose">netojose</a>],
            [
              "LinkedIn",
              <a href="https://www.linkedin.com/in/josesousaneto">
                josesousaneto
              </a>,
            ],
            [
              "Website",
              <a href="https://joseneto.dev">https://joseneto.dev</a>,
            ],
            ["Address", "Lisbon, Portugal"],
          ]}
        />
        <p
          className={css({
            [BREAKPOINT]: {
              textAlign: "center",
            },
            "@media print": {
              display: "none",
            },
          })}
        >
          <ButtonLink
            href={`/assets/docs/jose-neto-cv.pdf?v=${Date.now()}`}
            download="jose-neto-cv.pdf"
          >
            Download CV
          </ButtonLink>
          <ButtonLink primary href="mailto:contact@joseneto.dev">
            Contact
          </ButtonLink>
        </p>
      </Grid.Column>
    </Grid.Row>
  </Section>
);
