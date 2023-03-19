

import PetInformation from "./PetInformation/PetInformation"
import Userinformation from "./UserInformation/Userinformation"
import { Wrap} from "./UserInformation/Userinformation.styled"


const UserPage = () => {
  return (
    <div>
      <Wrap>
        <Userinformation />
        <PetInformation />
      </Wrap>
    </div>
  )
}

export default UserPage