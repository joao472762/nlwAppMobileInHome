import React from 'react';
import {Fontisto} from "@expo/vector-icons"
import { ImageBackground, Text, View } from 'react-native';

import { styles } from './styles';
import { Member } from '../../components/Member';
import { Header } from '../../components/Header';
import BannerImage from "../../assets/banner.png";
import { theme } from '../../global/styles/theme';
import { FlatList } from 'react-native-gesture-handler';
import { ButtonIcon } from '../../components/ButtonIcon';
import { HeaderList } from '../../components/HeaderList';
import { ListDivider } from '../../components/ListDivider';
import { Button } from '../../components/Button';

export function AppointmentDetail() {
  const merbers = [
    {
      id: '1',
      name: 'Amanda',
      avatar_url: 'https://github.com/joao472762.png',
      status: 'online'

    },
    {
      id: '2',
      name: 'Lais',
      avatar_url: 'https://github.com/joao472762.png',
      status: 'ocupado'

    },
    {
      id: '3',
      name: 'Alicia',
      avatar_url: 'https://github.com/joao472762.png',
      status: 'ocupado'

    },
    {
      id: '4',
      name: 'Julia',
      avatar_url: 'https://github.com/joao472762.png',
      status: 'indisponível'

    }
  ]
  const {occupied, on, primary} = theme.colors
  return (
    <View style={styles.container}>
      <Header
      title='Detalhes'
      action= {
        <Fontisto
        name='share'
        size={24}
        color= {theme.colors.primary}
        />
      }
      />
      <ImageBackground
      source={BannerImage}
      style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
              Lendários
          </Text>
          <Text style={styles.subTitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <HeaderList
      title='Jogadores'
      subTitle='Total 3'
      />

      <FlatList
      data={merbers}
      keyExtractor = {(item)=> item.id}
      renderItem= {
        ({item}) => (
          <Member
          data={{
            avatarUrl: item.avatar_url,
            userName: item.name,
            status: item.status
          }}
          />
        )
       }
       style={styles.members}
       ItemSeparatorComponent={()=><ListDivider/>}
      />
      <View style={styles.footer}>

        <Button
        title='Entrar na partida'
        />
      </View>
    </View>

  );
}

