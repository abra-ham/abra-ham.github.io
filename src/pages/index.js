import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import myPicture from '../images/me.jpg';

import * as styles from './index.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Abraham López | Software Engineer" />
    <article className={styles.index}>
      <header className={styles.header}>
        <figure>
          <img src={myPicture} alt="Me at Corona Capital"/>
        </figure>
        <h1>Abraham López</h1>
        <h2>Software Engineer</h2>
        <div>
          <a href="https://www.linkedin.com/in/abraham-l%C3%B3pez-76b993138/">LinkedIn</a>
          <a href="https://github.com/abra-ham">GitHub</a>
        </div>
      </header>
      <section className={styles.aboutMe}>
        <p>
          A software enginer born and raised in Guadalajara, Jalisco.
          Abraham likes to spend his days coding, hanging out with his girlfriend and
          being a helping hand to his single mother.
        </p>
        <p>
          Abraham really enjoys:
        </p>
        <ul>
          <li>Crafting tasteful front end experiences</li>
          <li>Writing software that scales</li>
          <li>Implementing all tech he reads about on Medium (sarcasm?)</li>
          <li>Learning about principles, patterns and paradigms</li>
          <li>Writing unit and integration testing</li>
          <li>In case his CTO is reading this, he always uses a TDD approach ;)</li>
          <li>Writing in third person!</li>
        </ul>
      </section>
    </article>
  </Layout>
)

export default IndexPage
