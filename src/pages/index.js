import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const IndexPage = ({ data }) => {
  return (
    <main>
      <div className="image">
        <GatsbyImage image={data.imageSharp.gatsbyImageData} alt="Matt, with grey clay on his face" />
      </div>

      <p>
        <a href="https://www.teaganpresley.com/" target="_blank" rel="noreferrer">Check out the hot Teagan Presley getting a facial</a>
      </p>
    </main>
  )
}

export default IndexPage

export const query = graphql`{
  imageSharp {
    gatsbyImageData
  }
}`

export const Head = () => <title>Matt Gives Himself A FACIAL!!</title>
