import { ReactComponent as Bucket } from '../img/Bucket.svg'
import { CardPet, List, PetInfo, Delete, Title, AddPet, EditPhoto, FromPet } from '../UserInformation/Userinformation.styled'
import { ReactComponent as Plus } from '../img/Plus.svg'


export const PetInformation = () => {
    return (
<div>
<FromPet><Title>My pets: </Title>
          <Title>Add pet <label for="pet"><AddPet><Plus /></AddPet></label>
            <EditPhoto type='file'
              name="pet"
              id="pet"
            /></Title>

        </FromPet>
        <CardPet>

            <img alt='Pet' width='240' src='https://i.ytimg.com/vi/xzCkLdeUw0Q/maxresdefault.jpg'></img>

            <List>
                <PetInfo>Name: Kusachka</PetInfo>
                <PetInfo>Date of birth: 01.01.2022</PetInfo>
                <PetInfo>Breed: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo nihil voluptates eos explicabo debitis excepturi quisquam quos?
                    Aut quae, officia aliquam adipisci, impedit porro nulla ab a beatae,
                    iusto nemo.</PetInfo>
                <Delete><Bucket /></Delete>
            </List>
        </CardPet>
</div>

    )
}

export default PetInformation
