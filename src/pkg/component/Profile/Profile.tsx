import styled from 'styled-components'
import { shortenAddress } from 'pkg/util/address'
import { SvgChevronDown, SvgExclamation, SvgUser } from 'pkg/component/Svg'
import { Text, Flex } from 'pkg/component/Toolkit'
import { useConnector } from 'pkg/hook'

const ProfileAccount = styled(Flex)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-bottom-right-radius: ${({ theme }) => theme.radii.default};
  border-top-right-radius: ${({ theme }) => theme.radii.default};
  border: 1px solid ${({ theme }) => theme.colors.borderAlt};
  justify-content: center;
  margin-left: -8px;
  min-width: 128px;
  padding: 4px 10px 4px 14px;
  &:hover {
    cursor: pointer;
  }
`

const ProfileCircle = styled(Flex)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.radii.circle};
  border: 1px solid ${({ theme }) => theme.colors.borderAlt};
  height: 48px;
  justify-content: center;
  width: 48px;
  z-index: 1;
`

const ProfileContainer = styled(Flex)`
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  justify-content: center;
`

export default function Profile() {
  const { account, isActivating, isActive, isWrongNetwork } = useConnector()
  return (
    <ProfileContainer>
      {isActivating ? (
        <>
          <ProfileCircle>
            <SvgUser height="20px" width="20px" />
          </ProfileCircle>
          <ProfileAccount>
            <Text>connecting...</Text>
          </ProfileAccount>
        </>
      ) : isActive ? (
        <>
          <ProfileCircle>
            <SvgUser height="20px" width="20px" />
          </ProfileCircle>
          <ProfileAccount>
            <Text>{shortenAddress(account || '')}</Text>
            <Flex alignItems="center" justifyContent="center" marginLeft="10px">
              <SvgChevronDown height="20px" width="20px" />
            </Flex>
          </ProfileAccount>
        </>
      ) : isWrongNetwork ? (
        <>
          <ProfileCircle>
            <SvgUser height="20px" width="20px" />
          </ProfileCircle>
          <ProfileAccount>
            <Text>{shortenAddress(account || '')}</Text>
            <Flex alignItems="center" justifyContent="center" marginLeft="10px">
              <SvgChevronDown height="20px" width="20px" />
            </Flex>
          </ProfileAccount>
        </>
      ) : null}
    </ProfileContainer>
  )
}
