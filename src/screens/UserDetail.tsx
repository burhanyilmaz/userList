import React from 'react';
import { useSelector } from 'react-redux';
import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { selectedUserSelector } from 'store/users/selectors';
import { VERTICAL_PADDING, width } from 'utils/constants';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { Button, Spacer } from 'components';
import InformationWithLabel from 'components/InformationWithLabel';

const UserDetail = () => {
  const {
    age,
    image,
    lastName,
    firstName,
    company: { address },
  } = useSelector(selectedUserSelector)!;
  const { goBack } = useAppNavigation();

  const displayCompanyLocation = () => {
    Linking.openURL(
      `https://www.google.com/maps/search/${address.coordinates.lat},${address.coordinates.lng}`,
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={goBack} style={styles.goBackButton}>
          <Text style={styles.goBackText}>Go Back</Text>
        </Pressable>
        <Image resizeMode="contain" style={styles.headerImage} source={{ uri: image }} />
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.userInformation}>
          <InformationWithLabel label={'Full Name'} info={`${firstName} ${lastName}`} />
          <Spacer size={4} />
          <InformationWithLabel label={'Age'} info={age} />
        </View>
        <Spacer size={16} />
        <View>
          <InformationWithLabel label={'Company Address'} info={address.address} />
          <Spacer size={4} />
          <InformationWithLabel label={'Company Postal Code'} info={address.postalCode} />
          <Spacer size={4} />
          <InformationWithLabel label={'Company State'} info={address.state} />
          <Spacer size={4} />
          <Button title="Go to Google Maps" onPress={displayCompanyLocation} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width,
    backgroundColor: '#383838',
    position: 'absolute',
  },
  headerImage: {
    width: width,
    height: width / 1.5,
  },
  informationContainer: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: width / 1.5 - 16,
    backgroundColor: '#fff',
    padding: VERTICAL_PADDING,
  },
  userInformation: {
    borderBottomWidth: 2,
    borderColor: 'rgba(0,0,0,0.1)',
    paddingBottom: 8,
  },
  goBackButton: {
    zIndex: 1,
    top: 30,
    position: 'absolute',
    padding: VERTICAL_PADDING,
  },
  goBackText: {
    fontSize: 15,
    color: '#fff',
  },
});

export default UserDetail;
