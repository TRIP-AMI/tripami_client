import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from '@/components/atoms/Button/IconButton';
import { RootStackNavigationProp } from '@/navigations';

export default function BackLeftArrow({
  theme = 'black',
}: {
  theme?: 'white' | 'black';
}) {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <View style={styles.container}>
      <View>
        <IconButton
          icon='arrow-back'
          size={24}
          color={theme}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
