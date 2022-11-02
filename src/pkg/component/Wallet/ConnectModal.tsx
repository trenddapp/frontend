import { Flex } from 'pkg/component/Toolkit'
import { Modal, ModalBody, ModalHeader, ModalTitle } from 'pkg/component/Modal'
import ConnectCancel from './ConnectCancel'
import ConnectCard from './ConnectCard'
import connection from 'config/connection'

interface ConnectModalProps {
  open: boolean
  onConnect: () => void
  onDismiss: () => void
}

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
        <Flex alignItems="center" flexDirection="column" justifyContent="center">
          {Object.keys(connection).map((key) => {
            return (
              <ConnectCard
                connector={connection[key].connector}
                icon={connection[key].icon}
                key={key}
                onConnect={onConnect}
                title={connection[key].name}
              />
            )
          })}
        </Flex>
        <ConnectCancel onClick={onDismiss}>Cancel</ConnectCancel>
      </ModalBody>
    </Modal>
  )
}
