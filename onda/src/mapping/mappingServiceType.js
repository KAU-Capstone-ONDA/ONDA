import ServiceType from '../type/ServiceType';

const mappingServiceType = (value) => {
  const serviceType = ServiceType.find((type) => type.value === value);
  return serviceType ? serviceType.label : value;
};

export default mappingServiceType;
