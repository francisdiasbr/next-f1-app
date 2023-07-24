import ClickableAsset from 'components/ClickableAsset'
import PageContainer from 'components/Container'
import { GetServerSideProps } from 'next'
import React from 'react'

const PageIndex = ({}) => {
  const renderHeader = () => {
    return (
      <ClickableAsset
        alt='teste'
        href='/'
        src='assets/logos/mainlogo.svg'
        width='160px'
      />
    )
  }

  const renderContent = () => {
    return <pre>content</pre>
  }

  const renderFooter = () => {
    return <pre>footer</pre>
  }

  return (
    <PageContainer
      header={renderHeader()}
      content={renderContent()}
      footer={renderFooter()}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {}
  }
}

export default PageIndex
