import AddRoom from '../../../components/addRoomType/AddRoom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setAmenityType,
  setAttractionType,
  setFacilityType,
  setPeopleCount,
  setRoomCount,
  setRoomType,
  setServiceType,
} from '../../../slices/roomSlice';
import { useNavigate } from 'react-router-dom';
import usePeopleCount from '../../../hooks/settingRoom/usePeopleCount';
import useRoomType from '../../../hooks/settingRoom/useRoomType';
import { message } from 'antd';
import { addRoomService } from '../../../services/roomCRUD/addRoom';
import useRoomCount from '../../../hooks/settingRoom/useRoomCount';
import useFacilityType from '../../../hooks/settingRoom/useFacilityType';
import useAttractionType from '../../../hooks/settingRoom/useAttractionType';
import useServiceType from '../../../hooks/settingRoom/useServiceType';
import useAmenityType from '../../../hooks/settingRoom/useAmenityType';

const AddRoomPage = () => {
  const [roomCountValue, setRoomCountValue] = useState('');
  const dispatch = useDispatch();
  const peopleCount = usePeopleCount();
  const roomType = useRoomType();
  const facilityType = useFacilityType();
  const attractionType = useAttractionType();
  const serviceType = useServiceType();
  const amenityType = useAmenityType();

  const handlePeopleCount = (count) => {
    dispatch(setPeopleCount(count));
  };

  const handleRoomType = (checkedValues) => {
    dispatch(setRoomType(checkedValues.target.value));
  };

  const handleFacilityType = (checkedValues) => {
    dispatch(setFacilityType(checkedValues));
  };

  const handleAttractionType = (checkedValues) => {
    dispatch(setAttractionType(checkedValues));
  };

  const handleServiceType = (checkedValues) => {
    dispatch(setServiceType(checkedValues));
  };

  const handleAmenityType = (checkedValues) => {
    dispatch(setAmenityType(checkedValues));
  };

  const handleComplete = async () => {
    if (roomCountValue.trim() === '' || peopleCount === '' || roomType === '') {
      message
        .error('필수정보(객실 수용인원, 개수, 타입)를 모두 설정해주세요.')
        .then();
      return;
    }

    try {
      const requestBody = {
        roomTypeName: roomType,
        totalRoom: roomCountValue,
        people: peopleCount,
        facilityOptions: facilityType,
        attractionOptions: attractionType,
        serviceOptions: serviceType,
        amenityOptions: amenityType,
      };
      await addRoomService(requestBody);
      window.location.replace('/settingroom');
    } catch (error) {
      message.error(`객실을 추가할 수 없습니다: ${error}`);
    }
  };

  return (
    <AddRoom
      roomCountValue={roomCountValue}
      onPeopleCount={handlePeopleCount}
      setRoomCountValue={setRoomCountValue}
      onRoomType={handleRoomType}
      onFacilityType={handleFacilityType}
      onAttractionType={handleAttractionType}
      onAmenityType={handleAmenityType}
      onServiceType={handleServiceType}
      onComplete={handleComplete}
    />
  );
};

export default AddRoomPage;
