import {Image, Linking, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import profile from '../assets/images/profile.jpeg';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {CERTIFICATION, EXPERIENCE, SKILLS} from '../constants';
import ListComponent from '../component/ListComponent';
import CustomButton from '../component/CustomButton';
import {homeScreenProps} from '../navigation/types';
import ActionButton from '../component/ActionButton';

const Home: FC<homeScreenProps> = ({navigation}) => {
  const scale = useSharedValue(0.8);
  const aniProfStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: withTiming(scale.value, {duration: 5000})}],
    };
  });

  useEffect(() => {
    scale.value = 1;
  }, []);
  const goToProjects = () => navigation.navigate('projects');
  const email = () => {
    Linking.openURL('mailto:ajalasegun1@gmail.com');
  };
  const call = () => {
    Linking.openURL('tel:+2347034882469');
  };
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <Animated.View style={[styles.profileContainer, aniProfStyle]}>
        <Image source={profile} style={styles.profile} />
      </Animated.View>

      <Text style={styles.name}>Segun Ajala</Text>
      <View style={styles.actionSection}>
        <ActionButton onPress={call} title="Call" testID="callbtn" />
        <ActionButton onPress={email} title="Email" testID="emailbtn" />
      </View>
      <Text style={styles.desc}>
        A skilled and experienced React Native developer with a passion for
        creating robust and user-friendly mobile applications. With over 3 years
        of experience in the field, he has a proven track record of delivering
        high-quality cross-platform apps for both iOS and Android. I am
        dedicated to staying up-to-date with the latest trends and best
        practices in mobile app development, ensuring that his work is always on
        the cutting edge. He excels in collaborating with designers and back-end
        developers to bring the vision of an app to life, and he's proficient in
        optimizing app performance and user experience. I am an excellent
        problem solver and communicator, making him a valuable asset to any
        development team.
      </Text>

      <ListComponent title="Skills" data={SKILLS} testID="skills" />
      <ListComponent title="Experience" data={EXPERIENCE} testID="experience" />
      <ListComponent
        title="Certification"
        data={CERTIFICATION}
        testID="certification"
      />
      <View style={styles.btnContainer}>
        <CustomButton
          text="View Projects"
          onPress={goToProjects}
          testID="viewProject"
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  scroll: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  profile: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
  },
  profileContainer: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 20,
    color: '#313131',
  },
  desc: {
    fontSize: 16,
    fontWeight: '500',
    // letterSpacing: 1.5,
    lineHeight: 20,
    textAlign: 'justify',
    marginTop: 20,
    color: '#313131',
  },
  skill: {
    fontSize: 18,
    fontWeight: '600',
    color: '#313131',
    marginTop: 20,
  },
  skillsContainer: {
    flex: 1,
    marginBottom: 40,
  },

  btnContainer: {
    marginTop: 20,
  },
  actionSection: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
