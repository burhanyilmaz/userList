import { useNavigation } from '@react-navigation/native';
import UserCard from 'components/UserCard';
import { useAppDispatch } from 'hooks/useAppDispatch';
import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { removeUser } from 'store/users/actions';
import { userListSelector } from 'store/users/selectors';
import { fetchUserList } from 'store/users/thunk';
import { User } from 'store/users/types';
import { VERTICAL_PADDING } from 'utils/constants';

const UserList = () => {
  const dispatch = useAppDispatch();
  const users = useSelector(userListSelector);
  const { navigate } = useNavigation();

  const onRemoveUserHandler = (id: number) => {
    dispatch(removeUser(id));
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
        // TODO:
        navigate('UserDetail');
      }}
      onClickRemove={onRemoveUserHandler}
    />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={users}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: 'space-around',
    padding: VERTICAL_PADDING,
  },
});

export default UserList;
