import React from "react"
import { Link } from "gatsby"
import styles from "./about.module.css"
import Layout from "../components/Layout"

export default () => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <h1 className={styles.title}>About Sport Senza Frontiere</h1>
      <p>Such wow. Very React.</p>
    </div>
  </Layout>
)
