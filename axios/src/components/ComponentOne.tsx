import { FC } from 'react'
import { UserContext, ChannelContext } from '../App'

const ComponentOne: FC = () => {
  return (
    <div>
      <UserContext.Consumer>
        {
          user => {
            return (
              <ChannelContext.Consumer>
                {
                  channel => {
                    return <div>User name {user}, channel {channel}</div>
                  }
                }
              </ChannelContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentOne