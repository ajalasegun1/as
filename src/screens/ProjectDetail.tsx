import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  Linking,
} from 'react-native';
import React, {FC} from 'react';
import Animated from 'react-native-reanimated';
import {projectDetailScreenProps} from '../navigation/types';
import CustomButton from '../component/CustomButton';

const ProjectDetail: FC<projectDetailScreenProps> = ({navigation, route}) => {
  const {width} = useWindowDimensions();
  const styles = makeStyles(width);
  const {item} = route.params;
  const goToLink = (val: string) => Linking.openURL(val);
  return (
    <View style={styles.container}>
      <View style={styles.innerTop}>
        <Image source={item.image} style={styles.img} />

        <View style={styles.body}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.bottom}>
            <View style={styles.tags}>
              {item.tags.map((item, i) => (
                <Text key={i.toString()} style={styles.item}>
                  - {item}
                </Text>
              ))}
            </View>
          </View>
          <Text style={styles.details}>{item.details}</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton
          text="View"
          onPress={() => goToLink(item.url)}
          testID="check2"
        />
      </View>
    </View>
  );
};

export default ProjectDetail;

const makeStyles = (width: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 40,
    },
    innerTop: {flex: 1},
    img: {
      width: width - 20,
      height: 200,
      resizeMode: 'cover',
      alignSelf: 'center',
    },
    body: {
      flex: 1,
      paddingHorizontal: 10,
      marginTop: 20,
    },
    name: {
      fontSize: 30,
      fontWeight: '700',
      color: '#313131',
    },
    tags: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 6,
    },
    bottom: {},
    item: {color: '#313131'},
    details: {
      fontSize: 16,
      marginTop: 20,
    },
    btnContainer: {
      marginBottom: 40,
      paddingHorizontal: 10,
    },
  });
