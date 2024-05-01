import React from 'react'
import RootLayouts from '../../layouts/RootLayouts'
import Hero from '../../components/organisems/Hero'
import Collection from '../../components/organisems/Collection'
import Product from '../../components/organisems/Product'

export default function home() {
  return (
    <RootLayouts>
        <Hero/>
        <Collection/>
        <Product/>
    </RootLayouts>
  )
}
