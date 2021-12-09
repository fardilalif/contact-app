import React from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../Icon/index.js';
import styles from './styles.js';
import PropTypes from 'prop-types';

const AppModal = ({
  modalVisibility,
  setModalVisibility,
  title,
  modalBody,
  modalFooter,
  closeOnTouchOutside,
}) => {
  return (
    <Modal visible={modalVisibility} transparent>
      <TouchableOpacity
        onPress={() => {
          if (closeOnTouchOutside) {
            setModalVisibility(false);
          }
        }}
        style={styles.wrapper}>
        <View style={styles.modal}>
          <SafeAreaView>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setModalVisibility(false)}>
                <Icon type="evil" name="close" size={24} />
              </TouchableOpacity>
              <Text style={styles.title}>{title || 'RNContact'}</Text>
            </View>
            <View style={styles.footerSeparator} />

            <View style={styles.body}>{modalBody}</View>
            {modalFooter}

            {!modalFooter && (
              <View>
                <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}>Terms of Service</Text>
                    </View>
                  </View>
                </>
              </View>
            )}
          </SafeAreaView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

AppModal.propTypes = {
  closeOnTouchOutside: PropTypes.bool,
};

AppModal.defaultProps = {
  closeOnTouchOutside: true,
};

export default AppModal;
