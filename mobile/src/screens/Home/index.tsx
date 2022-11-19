import { useEffect, useState } from "react";
import { Image, FlatList, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import logoImg from '../../assets/image-9.svg';
// import { translate } from "../../locales";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])

  const navigation = useNavigation();

  function handleOpenGaming({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl });
  }

  useEffect(() => {
    fetch('http://localhost:3030/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
        {/* <Text>{translate('hello')}</Text> */}
        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGaming(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          
          contentContainerStyle={styles.contentList}
        />

        
      </SafeAreaView>
    </Background>
  );
}
