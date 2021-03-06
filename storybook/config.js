import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import { withA11y } from '@storybook/addon-a11y'
import CssReset from '../packages/CssReset/CssReset.jsx'
import StoryWrapper from './StoryWrapper'

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})
addDecorator(withA11y)
addDecorator(story => (
  <>
    <CssReset />
    <StoryWrapper>{story()}</StoryWrapper>
  </>
))

configure(
  [require.context('./docs', false, /\.stories\.mdx$/), require.context('../packages', true, /\.stories\.(js|mdx)$/)],
  module
)
