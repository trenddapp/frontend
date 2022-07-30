import { useState } from 'react'

import styled from 'styled-components'

import { connectorCards } from '@/config/connectors'
import { Modal, ModalHeader, ModalBody, ModalTitle } from '@/components/Core/Modal'
import ConnectCancel from './ConnectCancel'
import ConnectCard, { ConnectCardMore } from './ConnectCard'

const ConnectCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`

const ConnectModal = ({ open, onDismiss }) => {
  const [showMore, setShowMore] = useState(false)

  let customConnectorCards = connectorCards.slice(0, 3)
  if (showMore) {
    customConnectorCards = connectorCards
  }

  if (!open) {
    return null
  }

  return (
    <Modal onDismiss={onDismiss}>
      <ModalHeader>
        <ModalTitle>Connect Your Wallet</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <ConnectCards>
          {customConnectorCards.map((customConnectorCard) => {
            return (
              <ConnectCard
                connector={customConnectorCard?.connection?.connector}
                icon={customConnectorCard.icon}
                key={customConnectorCard.id}
                onConnect={onDismiss}
                title={customConnectorCard.title}
              />
            )
          })}
          {showMore ? null : <ConnectCardMore onClick={() => setShowMore(true)} />}
        </ConnectCards>
        <ConnectCancel onClick={onDismiss}>Cancel</ConnectCancel>
      </ModalBody>
    </Modal>
  )
}

export default ConnectModal
