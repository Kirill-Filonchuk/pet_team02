import { ReactComponent as Camera } from '../img/Camera.svg'
import { ReactComponent as Pensil } from '../img/Pensil.svg'
import { ReactComponent as LogOut } from '../img/LogOut.svg'
import { Input, Item, List, Text, CardUser, EditPhoto, Label, Log, Title } from './Userinformation.styled'

const Userinformation = () => {
    return (
        <div>
            <Title>My information:</Title>
            <CardUser>
                <div>
                    <img width='233' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxDNUG8ezOY8K7-uuhAvlt4UjYItZohbsUsXO3xptxEKAd1M7HRXmHHgtEWt8R3GOLrI&usqp=CAU" alt="photo" />
                    {/* <Photo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxDNUG8ezOY8K7-uuhAvlt4UjYItZohbsUsXO3xptxEKAd1M7HRXmHHgtEWt8R3GOLrI&usqp=CAU" alt="photo"/> */}
                    <Label for="photo"><Camera />Edit photo</Label>
                    <EditPhoto type='file'
                        name="photo"
                        id="photo"
                    />
                </div>
                <List>
                    <Item>
                        <Text>Name:</Text>
                        <Input type='text' />
                        <Pensil />
                    </Item>
                    <Item>
                        <Text>Email:</Text>
                        <Input type='text' />
                        <span><Pensil /></span>
                    </Item>
                    <Item>
                        <Text>Birthday:</Text>
                        <Input type='text' />
                        <span><Pensil /></span>
                    </Item>
                    <Item>
                        <Text>Phone:</Text>
                        <Input type='text' />
                        <span><Pensil /></span>
                    </Item>
                    <Item>
                        <Text>City:</Text>
                        <Input type='text' />
                        <span><Pensil /></span>
                    </Item>
                </List>
                <Log><LogOut />Log Out</Log>
            </CardUser>
        </div>

    )
}

export default Userinformation