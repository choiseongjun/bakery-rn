import React, { useState,useEffect } from 'react';
import {   
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import styled from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import { FlatList } from 'react-native-gesture-handler';
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'rgb(250,250,250)'
    },
    container__listBread:{
      flex:12,
      marginTop: 10,
    },
    listBread__eachList:{
      flex:1,
    },

    image:{
      flex:1,
      resizeMode: 'contain',
      justifyContent:'center',
      alignItems:'center',
    },
  });

  const ContainerHeaderOption = styled.View`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
  `;
  const HeaderOptionList = styled.TouchableOpacity`
    width:100px;
    height:60px;
    margin-right: 10px;
    color:white;
    background-color: rgb(243,96,65);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const HeaderOptionList__Text = styled.Text`
    color: white;
  `;

  const SearchBarContainer = styled.View`
    backgroundColor:rgb(250,250,250);
    width: 100%;
    height:50px;
    display:flex;
    flex-direction: row;
    align-items: center;
  `;

  const IconFilter = styled.View`
    display:flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  `;

  const ScrollList = styled.ScrollView`
    flex:1;
  `;

  const EachBread = styled.View`
    width: 100%;
    height:180px;
    margin-top: 10px;
    background-color: white;
    display:flex;
    align-items: flex-start;
  `;

  const EachBread__Inbox = styled.View`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 100%;
  `;

  const EachBread__Inbox_more = styled.View`
    width:33px;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:10px;
  `;

  const Location = styled.View`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    margin-bottom:10px;
  `;

const Tab = createBottomTabNavigator();

function HomeScreen() {
    const [ colors, setColor ] = useState({
      color: 'white',
      preColor: 'rgb(243,96,65)',
      bgColor: 'rgb(243,96,65)',
      preBgColor: 'white'
    });

    const [ toggle, setToggle] = useState(true);

    const changeToggle = () => { 
      setToggle(!toggle);
      checktoggle();
    };

    const moveMap = () => {

    }


    const checktoggle = () => {
      if(!toggle) {
        setColor({
          color:'rgb(243,96,65)',
          preColor: 'white',
          bgColor: 'white',
          preBgColor: 'rgb(243,96,65)'
        });
      }
      else {
        setColor({
          color: 'white',
          preColor: 'rgb(243,96,65)',
          bgColor: 'rgb(243,96,65)',
          preBgColor: 'white'
        });
      }
    };

    return (
      <SafeAreaView style={ styles.container }>
        <View style = {{flex:1, padding: 10}}>
          <ContainerHeaderOption>
            <HeaderOptionList disabled={!toggle} onPress = { changeToggle } style = {{backgroundColor:colors.bgColor}}>
              <HeaderOptionList__Text style = {{color: colors.color}}>리스트</HeaderOptionList__Text>
            </HeaderOptionList>
            <HeaderOptionList disabled={toggle} onPress = {changeToggle} style = {{backgroundColor:colors.preBgColor}}>
              <HeaderOptionList__Text style = {{color: colors.preColor}}>지도</HeaderOptionList__Text>
            </HeaderOptionList>
          </ContainerHeaderOption>
          <SearchBarContainer>
            <IconFilter>
              <IconAntDesign name='plussquare' color='rgb(243,96,65)' size={30} />
            </IconFilter>
            <Text style = {{color:'gray', fontSize:16, fontWeight:'400', marginRight:70, marginLeft: 10}}>가장 맛있는 빵은 당신 주변에 있습니다.</Text>
            <IconFilter>
              <IconAntDesign name='edit' color='rgb(243,96,65)' size={30} />
            </IconFilter>
          </SearchBarContainer>
          <View style = { styles.container__listBread}>
            <Location>
              <View>
                <Text style = {{ fontWeight:'bold', fontSize:20 }}>양재 2동
                </Text>
              </View>
              <View>
                <Text style = {{ color:'rgb(243,96,65)', fontWeight:'300', fontSize:14 }}>현재 내 위치 수정
                </Text>
              </View>
              
            </Location>
            <ScrollList>
              <EachBread>
                <ImageBackground style = {[styles.image, {flexDirection:'row',}]} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSqJYCGXWO-_bPa4yI5OY1ZhwakEpnVrqBw&usqp=CAU'}}>
                  <EachBread__Inbox>
                    <Text style = {{fontWeight:'bold', fontSize: 20, color:'rgb(250,250,250)' }}>서울제과
                    </Text>
                  </EachBread__Inbox>
                  <EachBread__Inbox style = {{ flexDirection:'column',backgroundColor:'rgba(0,0,0,0.1)', }}>
                    <IconAntDesign style={{ marginBottom: 10, }} name='hearto' color='rgb(243,96,65)' size = {30}>
                      <Text style ={{color:'white', fontSize: 12, }}></Text>
                    </IconAntDesign>
                    <IconAntDesign style={{ marginBottom: 10, }} name='message1' color='rgb(243,96,65)' size = {30}></IconAntDesign>
                    <IconAntDesign style={{ marginBottom: 10, }} name='pushpino' color='rgb(243,96,65)' size = {30}></IconAntDesign>
                  </EachBread__Inbox>
                  <EachBread__Inbox_more>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>밀</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>어</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>서</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>더</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>보</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>기</Text>
                  </EachBread__Inbox_more>
                </ImageBackground>
              </EachBread>
              <EachBread>
                <ImageBackground style = {[styles.image, {flexDirection:'row',}]} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBJKXZzRsx38eCCZtvE_JAY6xjXm-FLRJRg&usqp=CAU'}}>
                  <EachBread__Inbox>
                    <Text style = {{fontWeight:'bold', fontSize: 20, color:'rgb(250,250,250)' }}>모카빵집
                    </Text>
                  </EachBread__Inbox>
                  <EachBread__Inbox style = {{ flexDirection:'column',backgroundColor:'rgba(0,0,0,0.1)', }}>
                    <IconAntDesign style={{ marginBottom: 10, }} name='hearto' color='rgb(243,96,65)' size = {30}>
                      <Text style ={{color:'white', fontSize: 12, }}></Text>
                    </IconAntDesign>
                    <IconAntDesign style={{ marginBottom: 10, }} name='message1' color='rgb(243,96,65)' size = {30}></IconAntDesign>
                    <IconAntDesign style={{ marginBottom: 10, }} name='pushpino' color='rgb(243,96,65)' size = {30}></IconAntDesign>
                  </EachBread__Inbox>
                  <EachBread__Inbox_more>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>밀</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>어</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>서</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>더</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>보</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>기</Text>
                  </EachBread__Inbox_more>
                </ImageBackground>
              </EachBread>
              <EachBread>
                <ImageBackground style = {[styles.image, {flexDirection:'row',}]} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlcI-vnvCoO1_2VHnzpuXNu3PAKkdc09p46w&usqp=CAU'}}>
                  <EachBread__Inbox>
                    <Text style = {{fontWeight:'bold', fontSize: 20, color:'rgb(250,250,250)' }}>홍대제과
                    </Text>
                  </EachBread__Inbox>
                  <EachBread__Inbox style = {{ flexDirection:'column',backgroundColor:'rgba(0,0,0,0.1)', }}>
                    <IconAntDesign style={{ marginBottom: 10, }} name='hearto' color='rgb(243,96,65)' size = {30}>
                      <Text style ={{color:'white', fontSize: 12, }}></Text>
                    </IconAntDesign>
                    <IconAntDesign style={{ marginBottom: 10, }} name='message1' color='rgb(243,96,65)' size = {30}></IconAntDesign>
                    <IconAntDesign style={{ marginBottom: 10, }} name='pushpino' color='rgb(243,96,65)' size = {30}></IconAntDesign>
                  </EachBread__Inbox>
                  <EachBread__Inbox_more>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>밀</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>어</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>서</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>더</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>보</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>기</Text>
                  </EachBread__Inbox_more>
                </ImageBackground>
              </EachBread>
              <EachBread>
                <ImageBackground style = {[styles.image, {flexDirection:'row',}]} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshakqxTT6CSvCcONRj4O7N_WJBs8Siaqetg&usqp=CAU'}}>
                  <EachBread__Inbox>
                    <Text style = {{fontWeight:'bold', fontSize: 20, color:'rgb(250,250,250)' }}>빵솔솔
                    </Text>
                  </EachBread__Inbox>
                  <EachBread__Inbox style = {{ flexDirection:'column',backgroundColor:'rgba(0,0,0,0.1)', }}>
                    <IconAntDesign style={{ marginBottom: 10, }} name='hearto' color='rgb(243,96,65)' size = {30}>
                      <Text style ={{color:'white', fontSize: 12, }}></Text>
                    </IconAntDesign>
                    <IconAntDesign style={{ marginBottom: 10, }} name='message1' color='rgb(243,96,65)' size = {30}></IconAntDesign>
                    <IconAntDesign style={{ marginBottom: 10, }} name='pushpino' color='rgb(243,96,65)' size = {30}></IconAntDesign>
                  </EachBread__Inbox>
                  <EachBread__Inbox_more>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>밀</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>어</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>서</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>더</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>보</Text>
                    <Text style = {{color:'white', fontSize:15, fontWeight:'700'}}>기</Text>
                  </EachBread__Inbox_more>
                </ImageBackground>
              </EachBread>              
            </ScrollList>
          </View>
        </View>

      </SafeAreaView>
    );
  }
  
function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
function Bottom() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="추천" component={HomeScreen} />
            <Tab.Screen name="검색" component={SettingsScreen} />
            <Tab.Screen name="홈" component={HomeScreen} />
            <Tab.Screen name="마이페이지" component={HomeScreen} />
        </Tab.Navigator>
    ) 
} 
export default Bottom; 