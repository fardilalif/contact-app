import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import CreateContactComponent from '../../components/CreateContactComponent/index.js';
import {CONTACT_DETAIL, CONTACT_LIST} from '../../constants/routeNames.js';
import createContact from '../../context/actions/contacts/createContact.js';
import editContact from '../../context/actions/contacts/editContact.js';
import {GlobalContext} from '../../context/Provider.js';
import UploadImage from '../../helpers/UploadImage.js';
import countryCodes from '../../utils/countryCodes.js';

const CreateContact = () => {
  console.log('Render create contact');
  const [form, setForm] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const {
    contactsDispatcher,
    contactsState: {
      createContact: {loading, error},
    },
  } = useContext(GlobalContext);
  const {navigate, setOptions} = useNavigation();
  const sheetRef = useRef(null);
  const [localFile, setLocalFile] = useState(null);
  const {params} = useRoute();

  useEffect(() => {
    if (params?.contact && params?.editing) {
      console.log('Open from contact details');
      setOptions({
        title: 'Update contact',
      });
      const {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        is_favorite: isFavorite,
        country_code: countryCode,
      } = params.contact;
      setForm(prev => {
        return {
          ...prev,
          firstName,
          lastName,
          phoneNumber,
          isFavorite,
          phoneCode: countryCode,
        };
      });

      const country = countryCodes.find(
        item => item.value.replace('+', '') === countryCode,
      );

      if (country) {
        setForm(prev => {
          return {
            ...prev,
            countryCode: country.key.toUpperCase(),
          };
        });
      }

      if (params.contact?.contact_picture) {
        setLocalFile(params?.contact.contact_picture);
      }
    }
  }, []);

  const onChange = ({name, value}) => {
    return setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = () => {
    if (params?.contact && params?.editing) {
      if (localFile?.size) {
        setIsUploading(true);
        UploadImage(localFile)(url => {
          setIsUploading(false);
          editContact(
            {...form, contactPicture: url},
            params.contact.id,
          )(contactsDispatcher)(contact =>
            navigate(CONTACT_DETAIL, {item: contact}),
          );
        })(error => {
          console.log(`Error submit on edit contact`, error);
          setIsUploading(false);
        });
      } else {
        editContact(form, params.contact.id)(contactsDispatcher)(contact =>
          navigate(CONTACT_DETAIL, {item: contact}),
        );
      }
    } else {
      if (localFile?.size) {
        setIsUploading(true);
        UploadImage(localFile)(url => {
          setIsUploading(false);
          createContact({...form, contactPicture: url})(contactsDispatcher)(
            contact => navigate(CONTACT_LIST, {item: contact}),
          );
        })(error => {
          console.log(`Error submit on create contact`, error);
          setIsUploading(false);
        });
      } else {
        createContact(form)(contactsDispatcher)(contact =>
          navigate(CONTACT_LIST, {item: contact}),
        );
      }
    }
  };

  const toggleSwitch = () => {
    setForm(prev => {
      return {...prev, isFavorite: !form.isFavorite};
    });
  };

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const onFileSelected = image => {
    closeSheet();
    setLocalFile(image);
  };

  return (
    <CreateContactComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      setForm={setForm}
      loading={loading || isUploading}
      error={error}
      toggleSwitch={toggleSwitch}
      sheetRef={sheetRef}
      openSheet={openSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  );
};
export default CreateContact;
