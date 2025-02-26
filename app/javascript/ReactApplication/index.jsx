import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import HomePage from '../pages/HomePage'
import getApolloClient from './getApolloClient'

const ReactApplication = () => (
  <ApolloProvider client={getApolloClient()}>
    <HomePage />
  </ApolloProvider>
)

window.document.addEventListener('DOMContentLoaded', () => {
  const domNode = document.getElementById('react-root')

  const root = createRoot(domNode)

  root.render(<ReactApplication />)
})

export default ReactApplication
