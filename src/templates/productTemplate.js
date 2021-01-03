import React from 'react'
import Layout from "../Components/Layout"

const productTemplate = ({ pageContext: { data } }) => {
    return (
        <Layout>
            <section>
                <h2>{data.title}</h2>
                <img src={data.image.fluid.src} alt={data.title} />
                <p>{data.price}</p>
                <p>{data.info.info}</p>
            </section>
        </Layout>
    )
}

export default productTemplate
