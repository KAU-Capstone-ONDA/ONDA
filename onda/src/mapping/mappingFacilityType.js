import FacilityType from '../type/FacilityType';

const mappingFacilityType = (value) => {
  const facilityType = FacilityType.find((type) => type.value === value);
  return facilityType ? facilityType.label : value;
};

export default mappingFacilityType;
