import { Button } from 'components';
import Input from 'components/core/Input';
import UserCard from 'components/UserCard';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { Screen } from 'navigators/Screens';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { addUser, removeUser, selectUser } from 'store/users/actions';
import { userListSelector } from 'store/users/selectors';
import { fetchUserList } from 'store/users/thunk';
import { User } from 'store/users/types';
import { PADDING } from 'utils/constants';
import { isValidUrl } from 'utils/helpers';

const UserList = () => {
  const dispatch = useAppDispatch();
  const [newUserImage, setNewUserImage] = useState('');
  const users = useSelector(userListSelector);
  const { navigate } = useAppNavigation();

  const onRemoveUserHandler = (id: number) => {
    dispatch(removeUser(id));
  };

  const onNavigateUserDetails = (user: User) => {
    dispatch(selectUser(user));
    navigate(Screen.USER_DETAILS);
  };

  const onAddNewUser = () => {
    if (!isValidUrl(newUserImage)) {
      alert('Pleas write valid image url!');

      return;
    }
    dispatch(addUser(newUserImage));
    setNewUserImage('');
    alert('Added new user.');
  };

  useEffect(() => {
    dispatch(fetchUserList());
  }, []);

  const renderItem = ({ item }: { item: User }) => (
    <UserCard
      id={item.id}
      age={item.age}
      image={item.image}
      name={item.username}
      onPress={() => {
        onNavigateUserDetails(item);
      }}
      onClickRemove={onRemoveUserHandler}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={users}
        numColumns={2}
        ListEmptyComponent={
          <View style={styles.loading}>
            <ActivityIndicator />
          </View>
        }
        renderItem={renderItem}
        ListHeaderComponent={
          <Input value={newUserImage} onChange={setNewUserImage} placeholder="User Image Url" />
        }
        keyExtractor={item => item.id.toString()}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
      <View style={styles.floatButtonContainer}>
        <Button title="Add User" onPress={onAddNewUser} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: 'space-around',
    padding: PADDING,
    alignItems: 'center',
  },
  floatButtonContainer: {
    position: 'absolute',
    bottom: 16,
    width: '100%',
    padding: PADDING,
  },
  loading: {
    marginTop: 16,
  },
});

export default UserList;
