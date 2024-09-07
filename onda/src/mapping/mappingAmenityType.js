import AmenityType from '../type/AmenityType';

const mappingAmenityType = (value) => {
  const amenityType = AmenityType.find((type) => type.value === value);
  return amenityType ? amenityType.label : value;
};

export default mappingAmenityType;
