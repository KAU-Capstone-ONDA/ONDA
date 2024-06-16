import RoomType from '../type/RoomType';

const mappingRoomType = (value) => {
  const roomType = RoomType.find((type) => type.value === value);
  return roomType ? roomType.label : value;
};

export default mappingRoomType;
