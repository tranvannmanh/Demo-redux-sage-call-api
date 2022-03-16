import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import allReducer from './redux-saga/saga_reducer';
import createSagaMiddleware from '@redux-saga/core';
import watchApi from './redux-saga/api';
import * as api_actions from './redux-saga/actions';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  allReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(watchApi);
// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
//   {
//     id: '745038s08745fgh-4572-234785-47984920',
//     title: 'Fourth Item',
//   }
// ];
const action = type => store.dispatch({ type });
const Item = ({ item }) => {
  return (
    <Text style={{width:'100%'}}>{item}</Text>
  )
}
const renderItems = ({item}) => {
  return (
    <View style={styles.task}>
      <Item item={item.title}/>
    </View>
   )
}

const Todo = () => {
  // const [content, setContent] = useState('');
  const USER_DATA = useSelector(state => state.user_data);
  console.log(USER_DATA);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{color: '#FFFFFF'}}>Tasks</Text>
        </View>
        <FlatList
          data={USER_DATA.data}
          renderItem={renderItems}
          keyExtractor={item=>item.id}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={()=>action(api_actions.FETCH_DATA)}
        >
          <Text>Fetch user data</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <Todo/>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    height: '100%'
  },

  header: {
    backgroundColor: '#646464',
    width: '90%',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 5,
    paddingVertical: 5
  },
  
  task: {
    backgroundColor: '#A6D3D4',
    marginBottom: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 8
  },
  button: {
    backgroundColor: '#6BD3BA',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    marginBottom: 5
  }
})

export default App;