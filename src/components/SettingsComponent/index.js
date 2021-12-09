import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import AppModal from '../common/AppModal/index.js';
import colors from '../../assets/theme/colors.js';
import Icon from '../common/Icon/index.js';

const SettingsComponent = ({
  settingsOptions,
  modalVisible,
  setModalVisible,
  preferencesArray,
}) => {
  return (
    <>
      <AppModal
        modalVisibility={modalVisible}
        setModalVisibility={setModalVisible}
        title="Sort by"
        modalBody={
          <View>
            {preferencesArray.map(({name, selected, onPress}) => {
              return (
                <View key={name}>
                  <TouchableOpacity
                    onPress={onPress}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: 10,
                    }}>
                    {selected && (
                      <Icon name="check" size={20} type="material" />
                    )}
                    <Text
                      style={{fontSize: 17, paddingLeft: selected ? 10 : 30}}>
                      {name}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        }
        modalFooter={<></>}
        closeOnTouchOutside={false}
      />

      <ScrollView style={{backgroundColor: colors.white}}>
        {settingsOptions.map(({title, subTitle, onPress}) => {
          return (
            <TouchableOpacity key={title} onPress={onPress}>
              <View
                style={{
                  padding: 20,
                }}>
                <Text style={{fontSize: 17}}>{title}</Text>
                {subTitle && (
                  <Text style={{opacity: 0.5, paddingTop: 5}}>{subTitle}</Text>
                )}
              </View>

              <View style={{height: 0.5, backgroundColor: colors.grey}}></View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
};

export default SettingsComponent;
