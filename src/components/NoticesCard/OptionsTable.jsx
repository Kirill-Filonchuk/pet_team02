import PropTypes from 'prop-types';
import { Table, Td, Tr } from './NoticesCard.styled';

const OptionsTable = ({ options }) => {
  return (
    <Table>
      <tbody>
        {options.map(({ key, value, isPrice }) => (
          <Tr key={key} isPrice={isPrice} hasPrice={isPrice && value}>
            <Td>{key}:</Td>
            <Td>{isPrice ? `$${value}` : value}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default OptionsTable;

OptionsTable.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      isPrice: PropTypes.bool,
    })
  ).isRequired,
};
