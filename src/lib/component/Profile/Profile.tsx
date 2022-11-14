import { useContext, useRef, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Dropdown } from 'lib/component/Dropdown'
import { Flex, Text } from 'lib/component/Toolkit'
import { SvgChevronDown, SvgExclamation, SvgLogout, SvgUser, SvgWallet } from 'lib/component/Svg'
import { getEtherscanUrl, shortenAddress } from 'lib/util/address'
import { useConnector } from 'lib/hook'
import { AuthContext } from 'lib/context/Auth'

const ProfileAccount = styled(Flex)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-bottom-right-radius: ${({ theme }) => theme.radii.default};
  border-top-right-radius: ${({ theme }) => theme.radii.default};
  border: 1px solid ${({ theme }) => theme.colors.borderAlt};
  justify-content: center;
  margin-left: -15px;
  min-width: 132px;
  padding: 4px 0px 4px 14px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`

const ProfileCircle = styled(Flex)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.radii.circle};
  border: 1px solid ${({ theme }) => theme.colors.borderAlt};
  height: 31px;
  justify-content: center;
  width: 31px;
  z-index: 1;
`

const ProfileContainer = styled(Flex)<any>`
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  justify-content: center;
  position: relative;
`

const DropdownItem = styled(Flex)`
  min-width: 200px;
  cursor: pointer;
  transition: 0.2s ease;
  padding: 7px 12px;
  background-color: ${({ theme }) => theme.colors.background};
  &:hover {
    /* TODO: use color palette in the next refactor */
    color: #614dce;
    background-color: rgb(242 244 247);
  }
`

const DropdownLink = styled(Link)`
  display: flex;
  min-width: 200px;
  cursor: pointer;
  transition: 0.2s ease;
  padding: 7px 12px;
  background-color: ${({ theme }) => theme.colors.background};
  &:hover {
    /* TODO: use color palette in the next refactor */
    color: #614dce;
    background-color: rgb(242 244 247);
  }
`

export default function Profile() {
  const ref = useRef()
  const { disconnect } = useContext(AuthContext)
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const { address, isConnected, isConnecting, isWrongNetwork } = useConnector()
  const onDisconnect = () => {
    setIsDropdownOpen(false)
    disconnect()
  }
  return (
    <ProfileContainer ref={ref}>
      {isConnecting ? (
        <>
          <ProfileCircle>
            <SvgUser height="20px" width="20px" />
          </ProfileCircle>
          <ProfileAccount onMouseEnter={() => setIsDropdownOpen(true)}>
            <Text>connecting...</Text>
          </ProfileAccount>
        </>
      ) : isConnected ? (
        <Flex
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          padding="5px 0"
        >
          <ProfileCircle>
            <SvgUser height="20px" width="20px" />
          </ProfileCircle>
          <ProfileAccount>
            <Text>{shortenAddress(address || '')}</Text>
            <Flex alignItems="center" justifyContent="center" marginLeft="10px">
              <SvgChevronDown height="20px" width="20px" />
            </Flex>
          </ProfileAccount>
          <Dropdown
            isOpen={isDropdownOpen}
            offsetLeft={0}
            offsetTop={ref.current !== undefined ? ref.current['clientHeight'] : 0}
          >
            <DropdownLink href={getEtherscanUrl(address || '')} onClick={() => setIsDropdownOpen(false)}>
              <SvgWallet height={20} width={20} />
              <Text as="span" margin="0 0 0 15px">
                Wallet
              </Text>
            </DropdownLink>
            <DropdownItem onClick={onDisconnect}>
              <SvgLogout height={20} width={20} />
              <Text as="span" margin="0 0 0 15px">
                Disconnect
              </Text>
            </DropdownItem>
          </Dropdown>
        </Flex>
      ) : isWrongNetwork ? (
        <>
          <ProfileCircle>
            <SvgExclamation height="20px" width="20px" />
          </ProfileCircle>
          <ProfileAccount onMouseEnter={() => setIsDropdownOpen(true)}>
            <Text>wrong network</Text>
            <Flex alignItems="center" justifyContent="center" marginLeft="10px">
              <SvgChevronDown height="20px" width="20px" />
            </Flex>
          </ProfileAccount>
        </>
      ) : null}
    </ProfileContainer>
  )
}
