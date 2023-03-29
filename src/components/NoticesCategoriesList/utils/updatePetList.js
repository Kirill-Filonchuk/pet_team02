//FUNCTION SET isFavorite AND isMine TO PET LIST
export const updatedPetList = (list, favorites, owns) => {
  return list?.map(item => ({
    ...item,
    isFavorite: favorites?.includes(item._id) ? true : false,
    isMine: owns?.includes(item._id) ? true : false,
  }));
};
