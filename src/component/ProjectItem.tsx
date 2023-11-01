import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {FC} from 'react';
import Animated from 'react-native-reanimated';
import {RootStackParamList, projectsScreenProps} from '../navigation/types';
import {StackNavigationProp} from '@react-navigation/stack';

const ProjectItem: FC<{
  item: {
    name: string;
    tags: string[];
    details: string;
    tools: string[];
    image: any;
    url: string;
  };
  navigation: StackNavigationProp<RootStackParamList, 'projects', undefined>;
}> = ({item, navigation}) => {
  const {width} = useWindowDimensions();
  const styles = makeStyles(width);
  const goToDetail = (data: {
    item: {
      name: string;
      tags: string[];
      details: string;
      tools: string[];
      image: any;
      url: string;
    };
  }) => {
    navigation.navigate('projectDetail', data);
  };
  return (
    <TouchableOpacity
      testID="item"
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => goToDetail({item: item})}>
      <Animated.View sharedTransitionTag={`sharedTag${item.name}`}>
        <Image source={item.image} style={styles.img} />
      </Animated.View>
      <View style={styles.bottom}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.tags}>
          {item.tags.map((item, i) => (
            <Text key={i.toString()}>- {item}</Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProjectItem;

const makeStyles = (width: number) =>
  StyleSheet.create({
    container: {
      marginBottom: 30,
      backgroundColor: '#f2f2f2',
      paddingVertical: 10,
      borderRadius: 5,
    },
    img: {
      width: width / 1.4,
      height: 200,
      resizeMode: 'cover',
      alignSelf: 'center',
    },
    bottom: {
      paddingHorizontal: 20,
    },
    name: {
      fontSize: 20,
      fontWeight: '500',
      color: '#313131',
      marginVertical: 10,
    },
    tags: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 6,
    },
    item: {
      fontSize: 16,
      fontWeight: '500',
      color: '#313131',
    },
  });
