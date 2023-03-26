import propTypes from 'prop-types';
import {
  HoursList,
  HoursItem,
  HoursContainer,
  HoursText,
} from './OurFriendsCard.styled';

const ModalHours = ({ workDays }) => {
  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const dashDottedLine = '------------------';
  // console.log('workDays===', workDays);
  return (
    <HoursList>
      {workDays &&
        workDays.map((day, index) => (
          <HoursItem key={day._id}>
            {day.isOpen && (
              <HoursContainer>
                <HoursText>{days[index]}</HoursText>
                <HoursText>
                  {`${
                    day.from.startsWith('0') ? day.from.slice(1) : day.from
                  }-${day.to}`}
                </HoursText>
              </HoursContainer>
            )}
            {!day.isOpen && (
              <HoursContainer>
                <HoursText>{days[index]}</HoursText>
                <HoursText> {dashDottedLine}</HoursText>
              </HoursContainer>
            )}
          </HoursItem>
        ))}
      {(!workDays || workDays.length === 0) &&
        days.map(day => (
          <HoursItem key={day}>
            <HoursContainer>
              <HoursText>{day}</HoursText>
              <HoursText> {dashDottedLine}</HoursText>
            </HoursContainer>
          </HoursItem>
        ))}
    </HoursList>
  );
};

ModalHours.propTypes = {
  workDays: propTypes.array,
};

export default ModalHours;
