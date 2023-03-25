import { Button } from "./Account.styled"
import { ReactComponent as AccountIcon } from '../../images/home/svg/account.svg'


const Account = () => {
    return (
        <Button to='/user'>
            <AccountIcon style={{ marginRight: 12 }} /> Account
        </Button>
    )
}

export default Account