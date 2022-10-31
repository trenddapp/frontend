import styled from 'styled-components'
import { connectorCards } from 'config/connector'
import { Modal, ModalBody, ModalHeader, ModalTitle } from 'pkg/component/Modal'
import ConnectCancel from './ConnectCancel'
import ConnectCard from './ConnectCard'

interface ConnectModalProps {
  open: boolean
  onConnect: () => void
  onDismiss: () => void
}

const ConnectCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`

export default function ConnectModal({ open, onConnect, onDismiss }: ConnectModalProps) {
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
          {connectorCards.map((connectorCard) => {
            return (
              <ConnectCard
                connector={connectorCard?.connection?.connector}
                icon={connectorCard.icon}
                key={connectorCard.id}
                onConnect={onConnect}
                title={connectorCard.title}
              />
            )
          })}
        </ConnectCards>
        <ConnectCancel onClick={onDismiss}>Cancel</ConnectCancel>
      </ModalBody>
    </Modal>
  )
}
