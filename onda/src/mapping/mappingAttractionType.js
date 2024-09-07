import AttractionType from '../type/AttractionType';

const mappingAttractionType = (value) => {
  const attractionType = AttractionType.find((type) => type.value === value);
  return attractionType ? attractionType.label : value;
};

export default mappingAttractionType;
