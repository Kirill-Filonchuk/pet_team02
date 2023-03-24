import { ButtonBurger } from "./Account.styled"
import { ReactComponent as AccountIcon } from '../../images/home/svg/account.svg'

const AccountBurger = () => {
 
    return (
        <ButtonBurger to='/user' >
            <AccountIcon />Account
        </ButtonBurger>
    )
}

export default AccountBurger
